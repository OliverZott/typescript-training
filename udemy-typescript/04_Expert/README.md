# run

- `npm install`
- `npx tsc --watch`

  or

- `npx tsc xxx.ts`
  or compile ts directly use **ts-node**
  - `npm i ts-node`
  - `npx ts-node src/xxx.ts`

# debug

- NO `launch,.json` file
- Just `"sourceMap": true,` in `tsconfig.json`
- Set breakpoints and press F5

---
# setup project

- `npm init -y` ... with "yes" to all questions
- `npm i typescript`
- `npx tsc --init --rootdir src --outdir lib`
- `npx tsc --watch`

---

# Remarks

- Conventions: https://github.com/basarat/typescript-book/blob/master/docs/styleguide/styleguide.md

---

# Debugging

- what and how ???
- https://code.visualstudio.com/docs/typescript/typescript-debugging
