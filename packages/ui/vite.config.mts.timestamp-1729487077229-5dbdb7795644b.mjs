// vite.config.mts
import { resolve } from "path";
import react from "file:///Users/seong-gidong/projects/Jigeum-lab/web/node_modules/@vitejs/plugin-react/dist/index.mjs";
import preserveDirectives from "file:///Users/seong-gidong/projects/Jigeum-lab/web/node_modules/rollup-preserve-directives/dist/es/index.mjs";
import { defineConfig } from "file:///Users/seong-gidong/projects/Jigeum-lab/web/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/seong-gidong/projects/Jigeum-lab/web/node_modules/vite-plugin-dts/dist/index.mjs";
import svgr from "file:///Users/seong-gidong/projects/Jigeum-lab/web/node_modules/vite-plugin-svgr/dist/index.js";
var __vite_injected_original_dirname = "/Users/seong-gidong/projects/Jigeum-lab/web/packages/ui";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({
      include: ["./src"],
      outDir: "dist",
      insertTypesEntry: true
    }),
    svgr()
  ],
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".scss"],
    alias: {
      "@": resolve(__vite_injected_original_dirname, "./src")
    }
  },
  build: {
    lib: {
      entry: {
        index: resolve(__vite_injected_original_dirname, "src/index.ts")
      },
      formats: ["es", "cjs"],
      name: "@repo/ui",
      fileName: (format, entryName) => `${entryName}.${format === "es" ? "mjs" : "js"}`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        },
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) {
            return "assets/[name].[ext]";
          }
          if (assetInfo.name === "style.css") {
            return "style.css";
          }
          return assetInfo.name;
        }
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      plugins: [preserveDirectives()]
    }
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
      generateScopedName: "[name]__[local]___[hash:base64:5]"
    },
    preprocessorOptions: {
      scss: {
        // NOTE: 전역설정
        additionalData: '@import "./src/styles/index.scss";'
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3Nlb25nLWdpZG9uZy9wcm9qZWN0cy9KaWdldW0tbGFiL3dlYi9wYWNrYWdlcy91aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3Nlb25nLWdpZG9uZy9wcm9qZWN0cy9KaWdldW0tbGFiL3dlYi9wYWNrYWdlcy91aS92aXRlLmNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3Nlb25nLWdpZG9uZy9wcm9qZWN0cy9KaWdldW0tbGFiL3dlYi9wYWNrYWdlcy91aS92aXRlLmNvbmZpZy5tdHNcIjsvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9kZWZhdWx0XG5cbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgcHJlc2VydmVEaXJlY3RpdmVzIGZyb20gJ3JvbGx1cC1wcmVzZXJ2ZS1kaXJlY3RpdmVzJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L2RlZmF1bHRcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcbmltcG9ydCBzdmdyIGZyb20gJ3ZpdGUtcGx1Z2luLXN2Z3InO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBkdHMoe1xuICAgICAgaW5jbHVkZTogWycuL3NyYyddLFxuICAgICAgb3V0RGlyOiAnZGlzdCcsXG4gICAgICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlLFxuICAgIH0pLFxuICAgIHN2Z3IoKSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGV4dGVuc2lvbnM6IFsnLm1qcycsICcuanMnLCAnLnRzJywgJy5qc3gnLCAnLnRzeCcsICcuanNvbicsICcuc2NzcyddLFxuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcbiAgICB9LFxuICB9LFxuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHtcbiAgICAgICAgaW5kZXg6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2luZGV4LnRzJyksXG4gICAgICB9LFxuICAgICAgZm9ybWF0czogWydlcycsICdjanMnXSxcbiAgICAgIG5hbWU6ICdAcmVwby91aScsXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCwgZW50cnlOYW1lKSA9PlxuICAgICAgICBgJHtlbnRyeU5hbWV9LiR7Zm9ybWF0ID09PSAnZXMnID8gJ21qcycgOiAnanMnfWAsXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgcmVhY3Q6ICdSZWFjdCcsXG4gICAgICAgICAgJ3JlYWN0LWRvbSc6ICdSZWFjdERPTScsXG4gICAgICAgIH0sXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAoYXNzZXRJbmZvKSA9PiB7XG4gICAgICAgICAgaWYgKCFhc3NldEluZm8ubmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuICdhc3NldHMvW25hbWVdLltleHRdJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYXNzZXRJbmZvLm5hbWUgPT09ICdzdHlsZS5jc3MnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3N0eWxlLmNzcyc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGFzc2V0SW5mby5uYW1lO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgIHBsdWdpbnM6IFtwcmVzZXJ2ZURpcmVjdGl2ZXMoKV0sXG4gICAgfSxcbiAgfSxcbiAgY3NzOiB7XG4gICAgbW9kdWxlczoge1xuICAgICAgbG9jYWxzQ29udmVudGlvbjogJ2NhbWVsQ2FzZU9ubHknLFxuICAgICAgZ2VuZXJhdGVTY29wZWROYW1lOiAnW25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdJyxcbiAgICB9LFxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgIHNjc3M6IHtcbiAgICAgICAgLy8gTk9URTogXHVDODA0XHVDNUVEXHVDMTI0XHVDODE1XG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiAnQGltcG9ydCBcIi4vc3JjL3N0eWxlcy9pbmRleC5zY3NzXCI7JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsZUFBZTtBQUV4QixPQUFPLFdBQVc7QUFDbEIsT0FBTyx3QkFBd0I7QUFDL0IsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQVBqQixJQUFNLG1DQUFtQztBQVN6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixJQUFJO0FBQUEsTUFDRixTQUFTLENBQUMsT0FBTztBQUFBLE1BQ2pCLFFBQVE7QUFBQSxNQUNSLGtCQUFrQjtBQUFBLElBQ3BCLENBQUM7QUFBQSxJQUNELEtBQUs7QUFBQSxFQUNQO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxZQUFZLENBQUMsUUFBUSxPQUFPLE9BQU8sUUFBUSxRQUFRLFNBQVMsT0FBTztBQUFBLElBQ25FLE9BQU87QUFBQSxNQUNMLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDakM7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsUUFDTCxPQUFPLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQzFDO0FBQUEsTUFDQSxTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsTUFDckIsTUFBTTtBQUFBLE1BQ04sVUFBVSxDQUFDLFFBQVEsY0FDakIsR0FBRyxTQUFTLElBQUksV0FBVyxPQUFPLFFBQVEsSUFBSTtBQUFBLElBQ2xEO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsU0FBUyxXQUFXO0FBQUEsTUFDL0IsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFFBQ2Y7QUFBQSxRQUNBLGdCQUFnQixDQUFDLGNBQWM7QUFDN0IsY0FBSSxDQUFDLFVBQVUsTUFBTTtBQUNuQixtQkFBTztBQUFBLFVBQ1Q7QUFFQSxjQUFJLFVBQVUsU0FBUyxhQUFhO0FBQ2xDLG1CQUFPO0FBQUEsVUFDVDtBQUVBLGlCQUFPLFVBQVU7QUFBQSxRQUNuQjtBQUFBLE1BQ0Y7QUFBQTtBQUFBO0FBQUEsTUFHQSxTQUFTLENBQUMsbUJBQW1CLENBQUM7QUFBQSxJQUNoQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLGtCQUFrQjtBQUFBLE1BQ2xCLG9CQUFvQjtBQUFBLElBQ3RCO0FBQUEsSUFDQSxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUE7QUFBQSxRQUVKLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
