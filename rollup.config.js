import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import pkg from "./package.json";

const extensions = ['.js', '.jsx', '.ts', '.tsx']; // 어떤 확장자를 처리 할 지 정함


export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.module,
      format: "es",
    }
  ],
  plugins: [
    external(),
    resolve({ extensions }),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: "**/__tests__/**",
      clean: true
    }),
    commonjs({
      include: ["node_modules/**"],
    })
  ]
};