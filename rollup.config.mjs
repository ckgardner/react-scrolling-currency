import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import typescript from 'rollup-plugin-typescript2';

export default {
  input: "src/index.tsx",
  output: [
    {
      file: "dist/bundle.esm.js",
      format: "esm",
      sourcemap: true,
    },
    {
      file: "dist/bundle.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
  ],
  plugins: [
    postcss({
      plugins: [autoprefixer()],
      minimize: true,
      modules: true,
      inject: true,
      extract: false,
    }),
    typescript({tsconfig: "./tsconfig.json"})
  ],
  external: ['react', 'react/jsx-runtime', 'framer-motion', 'clsx'],
};