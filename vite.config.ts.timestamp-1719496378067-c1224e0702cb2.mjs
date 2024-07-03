// vite.config.ts
import { defineConfig } from "file:///C:/Users/loic_/OneDrive/Documents/Web%20dev/Opc%20React/OPC_REACT_P14/opc-ui/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import react from "file:///C:/Users/loic_/OneDrive/Documents/Web%20dev/Opc%20React/OPC_REACT_P14/opc-ui/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tsconfigPaths from "file:///C:/Users/loic_/OneDrive/Documents/Web%20dev/Opc%20React/OPC_REACT_P14/opc-ui/node_modules/vite-tsconfig-paths/dist/index.mjs";
import dts from "file:///C:/Users/loic_/OneDrive/Documents/Web%20dev/Opc%20React/OPC_REACT_P14/opc-ui/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\loic_\\OneDrive\\Documents\\Web dev\\Opc React\\OPC_REACT_P14\\opc-ui";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      rollupTypes: true
    })
  ],
  build: {
    // Library entry and output configuration
    lib: {
      entry: resolve(__vite_injected_original_dirname, "lib/main.ts"),
      name: "opc-ui",
      fileName: "opc-ui"
    },
    // Bundler options
    // Externalize react-related dependencies
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxsb2ljX1xcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcV2ViIGRldlxcXFxPcGMgUmVhY3RcXFxcT1BDX1JFQUNUX1AxNFxcXFxvcGMtdWlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGxvaWNfXFxcXE9uZURyaXZlXFxcXERvY3VtZW50c1xcXFxXZWIgZGV2XFxcXE9wYyBSZWFjdFxcXFxPUENfUkVBQ1RfUDE0XFxcXG9wYy11aVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbG9pY18vT25lRHJpdmUvRG9jdW1lbnRzL1dlYiUyMGRldi9PcGMlMjBSZWFjdC9PUENfUkVBQ1RfUDE0L29wYy11aS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdHBsdWdpbnM6IFtcblx0XHRyZWFjdCgpLFxuXHRcdHRzY29uZmlnUGF0aHMoKSxcblx0XHRkdHMoe1xuXHRcdFx0cm9sbHVwVHlwZXM6IHRydWUsXG5cdFx0fSksXG5cdF0sXG5cdGJ1aWxkOiB7XG5cdFx0Ly8gTGlicmFyeSBlbnRyeSBhbmQgb3V0cHV0IGNvbmZpZ3VyYXRpb25cblx0XHRsaWI6IHtcblx0XHRcdGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgXCJsaWIvbWFpbi50c1wiKSxcblx0XHRcdG5hbWU6IFwib3BjLXVpXCIsXG5cdFx0XHRmaWxlTmFtZTogXCJvcGMtdWlcIixcblx0XHR9LFxuXHRcdC8vIEJ1bmRsZXIgb3B0aW9uc1xuXHRcdC8vIEV4dGVybmFsaXplIHJlYWN0LXJlbGF0ZWQgZGVwZW5kZW5jaWVzXG5cdFx0cm9sbHVwT3B0aW9uczoge1xuXHRcdFx0ZXh0ZXJuYWw6IFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCIsIFwicmVhY3QvanN4LXJ1bnRpbWVcIl0sXG5cdFx0XHRvdXRwdXQ6IHtcblx0XHRcdFx0Z2xvYmFsczoge1xuXHRcdFx0XHRcdHJlYWN0OiBcIlJlYWN0XCIsXG5cdFx0XHRcdFx0XCJyZWFjdC1kb21cIjogXCJSZWFjdERPTVwiLFxuXHRcdFx0XHRcdFwicmVhY3QvanN4LXJ1bnRpbWVcIjogXCJyZWFjdC9qc3gtcnVudGltZVwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdhLFNBQVMsb0JBQW9CO0FBQzdiLFNBQVMsZUFBZTtBQUN4QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxTQUFTO0FBSmhCLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLFNBQVM7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLGNBQWM7QUFBQSxJQUNkLElBQUk7QUFBQSxNQUNILGFBQWE7QUFBQSxJQUNkLENBQUM7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFBQSxJQUVOLEtBQUs7QUFBQSxNQUNKLE9BQU8sUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDdkMsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1g7QUFBQTtBQUFBO0FBQUEsSUFHQSxlQUFlO0FBQUEsTUFDZCxVQUFVLENBQUMsU0FBUyxhQUFhLG1CQUFtQjtBQUFBLE1BQ3BELFFBQVE7QUFBQSxRQUNQLFNBQVM7QUFBQSxVQUNSLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxVQUNiLHFCQUFxQjtBQUFBLFFBQ3RCO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
