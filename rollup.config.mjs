import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer"; // Optional, for adding vendor prefixes

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
  ],
  external: ["react"],
};