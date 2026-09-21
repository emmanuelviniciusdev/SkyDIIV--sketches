import { defineConfig } from 'tsup'

export default defineConfig({
  entry: { index: 'src/index.ts' },
  format: ['esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: false,
  splitting: false,
  banner: { js: '"use client";' },
  external: [
    'react',
    'react-dom',
    'react/jsx-runtime',
    /^@radix-ui\//,
    '@phosphor-icons/react',
    'class-variance-authority',
    'clsx',
    'tailwind-merge',
  ],
  esbuildOptions(options) {
    options.assetNames = 'assets/[name]'
  },
})
