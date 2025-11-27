/// <reference types="vitest/config" />
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

import dts from 'vite-plugin-dts';

import path from 'node:path';


export default defineConfig({
    plugins: [
        dts({
            tsconfigPath: './tsconfig.app.json',
            rollupTypes: true,
            exclude: [
                "**/*.stories.ts",
                "**/*.stories.tsx",
                "**/*.stories.jsx",
                "**/*.stories.js",
                "**/*.stories.mdx",
                "stories",
                "**/stories/**"
            ],
        }),
        react(),
        tailwindcss(),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "Socore Design System",
            formats: ["es", "cjs"],
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
});