import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import monacoEditorPlugin from 'vite-plugin-monaco-editor';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/nested',
  plugins: [
    vue(),
    monacoEditorPlugin.default({
      // customDistPath(root, buildOutDir) {
      //   return path.join(root, buildOutDir, 'monacoeditorwork');
      // }
    }),
  ],
});
