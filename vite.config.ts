import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { visualizer } from "rollup-plugin-visualizer";
import compression from "vite-plugin-compression";

export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		visualizer({ open: true }),
		compression(),
	],
	build: {
		lib: {
			entry: resolve(__dirname, "lib/main.ts"),
			formats: ["es"],
			name: "opc-ui",
			fileName: "opc-ui",
		},
		sourcemap: true,
		rollupOptions: {
			external: ["react", "react-dom", "react/jsx-runtime"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"react/jsx-runtime": "react/jsx-runtime",
				},
				manualChunks(id) {
					if (id.includes("node_modules")) {
						return "vendor";
					}
					if (id.includes("Button")) {
						return "button";
					}
					if (id.includes("Calendar")) {
						return "calendar";
					}
					if (id.includes("DatePicker")) {
						return "datepicker";
					}
					if (id.includes("DayPicker")) {
						return "daypicker";
					}
					if (id.includes("DropdownMenu")) {
						return "dropdownmenu";
					}
					if (id.includes("Input")) {
						return "input";
					}
					if (id.includes("Label")) {
						return "label";
					}
					if (id.includes("Pagination")) {
						return "pagination";
					}
					if (id.includes("Popover")) {
						return "popover";
					}
					if (id.includes("Table")) {
						return "table";
					}
					if (id.includes("Toast")) {
						return "toast";
					}
					if (id.includes("Command")) {
						return "command";
					}
					if (id.includes("Combobox")) {
						return "combobox";
					}
					if (id.includes("Dialog")) {
						return "dialog";
					}
					if (id.includes("icons")) {
						return "icons";
					}
					if (id.includes("utils")) {
						return "utils";
					}
					if (id.includes("provider")) {
						return "provider";
					}
				},
			},
		},
	},
});
