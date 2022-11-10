import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/main.ts',
  output: [
    {
      file: 'dist/main.js',
      format: 'iife',
      sourcemap: true,
      compact: true,
    },
  ],
  plugins: [resolve(), typescript(), commonjs(), terser()],
};
