import postcss from 'rollup-plugin-postcss';

export default {
  plugins: [
    postcss({
      inject: true,
      plugins: []
    }),
  ],
};