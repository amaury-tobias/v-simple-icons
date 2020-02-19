import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

const plugins = [
  babel({
    presets: ['@vue/babel-preset-jsx']
  }),
  resolve(),
  commonjs()
]

export default [
  {
    input: './src/index.js',
    output: {
      name: 'vSimpleIcons',
      file: pkg.unpkg, //umd
      format: 'iife',
      compact: true,
    },
    plugins: [...plugins, terser({ output: { ecma: 5 } })]
  },
  {
    input: './src/index.js',
    output: {
      file: pkg.module, // esm
      format: 'es',
      compact: true,
    },
    plugins: [...plugins, terser({ output: { ecma: 6 } })]
  },
  {
    input: './src/index.js',
    output: {
      compact: true,
      file: pkg.main, // .js
      format: 'cjs',
      compact: true,
    },
    plugins: [...plugins]
  }
]
