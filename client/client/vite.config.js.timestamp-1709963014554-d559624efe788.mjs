// vite.config.js
import { defineConfig } from "file:///C:/Users/4727y/OneDrive/Desktop/internshala/crud/client/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/4727y/OneDrive/Desktop/internshala/crud/client/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000/api"
      }
    }
  },
  plugins: [react()]
});
export {
  vite_config_default as default
};
