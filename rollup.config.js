import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import pkg from './package.json';
import strip from '@rollup/plugin-strip';

const extensions = ['.js', '.jsx', '.ts', '.tsx']; // 어떤 확장자를 처리 할 지 정함

// Rollup Watch 기능(-w)이 동작하는 경우만 '개발 모드'라고 판단
const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [
    external(),
    resolve({extensions}),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: '**/__tests__/**',
      clean: true,
    }),
    commonjs({
      include: ['node_modules/**'],
    }),
    serve('dist'),
    production &&
      strip({
        include: '**/*.[ts|js]x?',
      }),
  ],
};
