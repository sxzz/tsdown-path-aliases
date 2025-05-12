import { defineConfig } from 'rolldown'

export default defineConfig({
  input: ['api/index.ts'],
  output: {
    format: 'esm',
  },
  resolve: {
    tsconfigFilename: './api/tsconfig.json',
  },
})
