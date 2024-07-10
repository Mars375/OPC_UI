import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        dts({
            rollupTypes: true,
        }),
    ],
    build: {
        // Library entry and output configuration
        lib: {
            entry: resolve(__dirname, "lib/main.ts"),
            name: "opc-ui",
            fileName: "opc-ui",
        },
        // Bundler options
        // Externalize react-related dependencies
        rollupOptions: {
            external: ["react", "react-dom", "react/jsx-runtime"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "react/jsx-runtime": "react/jsx-runtime",
                },
            },
        },
    },
});
