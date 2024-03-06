import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer"; // Optional, for adding vendor prefixes
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
      input: 'src/index.tsx',
      output: {
        dir: 'dist',
        format: 'esm',
      },
      plugins: [autoprefixer(), typescript({tsconfig: "./tsconfig.json"})],
      minimize: true,
      modules: true,
      inject: true,
      extract: false,
    }),
  ],
  external: ["react"],
};
