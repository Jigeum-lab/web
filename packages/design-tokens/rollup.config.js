import typescript from "rollup-plugin-typescript2";

const inputFilePath = "src/index.ts";

const outputOptions = [
  {
    file: "dist/bundle.cjs.js",
    format: "cjs",
  },
  {
    file: "dist/bundle.esm.js",
    format: "es",
  },
];

export default outputOptions.map((output) => ({
  input: inputFilePath,
  output: {
    ...output,
    sourcemap: true,
  },
  plugins: [typescript()],
  external: [],
}));
