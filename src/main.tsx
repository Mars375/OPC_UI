import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "../lib/index.css";
import { Toaster } from "@/main.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Toaster />
		<App />
	</React.StrictMode>
);
