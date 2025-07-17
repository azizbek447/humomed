import tailwindcssPlugin from '@tailwindcss/vite';
import viteReactPlugin from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import viteConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    port: 3010,
    historyApiFallback: true,
  },
  build: {
    reportCompressedSize: false,
    commonjsOptions: { transformMixedEsModules: true },
  },
  plugins: [tailwindcssPlugin(), viteConfigPaths(), viteReactPlugin()],
});
