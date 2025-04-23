import { defineConfig } from 'tsdown'
export default defineConfig({
  entry: [
    'api/index.ts',
  ],
  format: 'esm',
  tsconfig: './api/tsconfig.json',
  
  // we use bundling otherwise imports do not work, since they should resolve to .js
//   bundle: true,
  // we remove code splitting to get readable js files for our node app. in client-side app it would make sense, but not for our backend
//   splitting: true,
  sourcemap: true,
  // dts: true, // tsc type checking
  clean: true
})
