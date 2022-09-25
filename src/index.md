# v3-use

v3-use is a high-quality and reliable Vue3 Hooks library.

## Install

```bash
$ npm install --save v3-use
# or
$ yarn add v3-use
# or
$ pnpm add v3-use
```

## Usage

```ts
import { useBoolean } from 'v3-use'
```

## Development Workflow

1. Create `hooks/useYourHook/index.ts` and create `hooks/useYourHook/demo/index.vue` and create `hooks/useYourHook/index.md`, run `pnpm metadata && pnpm dev` to preview demo and start coding you hook and create documentation for your hook
2. Create `hooks/useYourHook/__tests__/index.test.ts`, run `pnpm test:watch` to start the test runner and start writing tests for your hook
3. `pnpm test:coverage` tests coverage at 100%
4. Export your hook from `src/hook/index.ts` and add your hook to `README.md`
