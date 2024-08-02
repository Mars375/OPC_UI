"use client";
import * as React from "react";

import type {
	ToastActionElement,
	ToastProps,
} from "@/components/ui/Toast/Toast";

const TOAST_LIMIT = 1; // Maximum number of toasts to display at once
const TOAST_REMOVE_DELAY = 1000000; // Delay before removing a toast (in milliseconds)

type ToasterToast = ToastProps & {
	id: string;
	title?: React.ReactNode;
	description?: React.ReactNode;
	action?: ToastActionElement;
};

const actionTypes = {
	ADD_TOAST: "ADD_TOAST",
	UPDATE_TOAST: "UPDATE_TOAST",
	DISMISS_TOAST: "DISMISS_TOAST",
	REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

/**
 * Generates a unique ID for each toast.
 * @returns {string} - The generated ID.
 */
function genId() {
	count = (count + 1) % Number.MAX_SAFE_INTEGER;
	return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
	| {
			type: ActionType["ADD_TOAST"];
			toast: ToasterToast;
	  }
	| {
			type: ActionType["UPDATE_TOAST"];
			toast: Partial<ToasterToast>;
	  }
	| {
			type: ActionType["DISMISS_TOAST"];
			toastId?: ToasterToast["id"];
	  }
	| {
			type: ActionType["REMOVE_TOAST"];
			toastId?: ToasterToast["id"];
	  };

interface State {
	toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

/**
 * Adds a toast to the removal queue.
 * @param {string} toastId - The ID of the toast to remove.
 */
const addToRemoveQueue = (toastId: string) => {
	if (toastTimeouts.has(toastId)) {
		return;
	}

	const timeout = setTimeout(() => {
		toastTimeouts.delete(toastId);
		dispatch({
			type: "REMOVE_TOAST",
			toastId: toastId,
		});
	}, TOAST_REMOVE_DELAY);

	toastTimeouts.set(toastId, timeout);
};

/**
 * Reducer function to handle toast actions.
 * @param {State} state - The current state.
 * @param {Action} action - The action to perform.
 * @returns {State} - The new state.
 */
export const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case "ADD_TOAST":
			// Add the new toast to the beginning of the array and limit the number of toasts
			return {
				...state,
				toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
			};

		case "UPDATE_TOAST":
			// Update the specified toast
			return {
				...state,
				toasts: state.toasts.map((t) =>
					t.id === action.toast.id ? { ...t, ...action.toast } : t
				),
			};

		case "DISMISS_TOAST": {
			const { toastId } = action;

			// Add the toast to the removal queue
			if (toastId) {
				addToRemoveQueue(toastId);
			} else {
				state.toasts.forEach((toast) => {
					addToRemoveQueue(toast.id);
				});
			}

			// Mark the toast as closed
			return {
				...state,
				toasts: state.toasts.map((t) =>
					t.id === toastId || toastId === undefined
						? {
								...t,
								open: false,
						  }
						: t
				),
			};
		}
		case "REMOVE_TOAST":
			// Remove the specified toast
			if (action.toastId === undefined) {
				return {
					...state,
					toasts: [],
				};
			}
			return {
				...state,
				toasts: state.toasts.filter((t) => t.id !== action.toastId),
			};
	}
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

/**
 * Dispatches an action to update the state.
 * @param {Action} action - The action to dispatch.
 */
function dispatch(action: Action) {
	memoryState = reducer(memoryState, action);
	listeners.forEach((listener) => {
		listener(memoryState);
	});
}

type Toast = Omit<ToasterToast, "id">;

/**
 * Creates and displays a toast.
 * @param {Toast} props - The properties of the toast.
 * @returns {Object} - An object with the toast ID, dismiss, and update functions.
 */
function toast({ ...props }: Toast) {
	const id = genId();

	const update = (props: ToasterToast) =>
		dispatch({
			type: "UPDATE_TOAST",
			toast: { ...props, id },
		});
	const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

	dispatch({
		type: "ADD_TOAST",
		toast: {
			...props,
			id,
			open: true,
			onOpenChange: (open) => {
				if (!open) dismiss();
			},
		},
	});

	return {
		id: id,
		dismiss,
		update,
	};
}

/**
 * Custom hook to use the toast functionality.
 * @returns {Object} - The state and toast functions.
 */
function useToast() {
	const [state, setState] = React.useState<State>(memoryState);

	React.useEffect(() => {
		listeners.push(setState);
		return () => {
			const index = listeners.indexOf(setState);
			if (index > -1) {
				listeners.splice(index, 1);
			}
		};
	}, [state]);

	return {
		...state,
		toast,
		dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
	};
}

export { useToast, toast };
