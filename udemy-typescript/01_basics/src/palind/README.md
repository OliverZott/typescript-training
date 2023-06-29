# Creating NPM package
- `mkdir ...`
- `npm init -y`
- `npm i typescript -D` 
- `npx tsc --init --rootDir src --outDir lib --sourceMap --declaration --declarationMap`


# Run
- In package.json --> "build" script
    - call with `npm run build`

# Publish
- `npm publish`

# Consume package
- `npm i palind` 
- use in code with:
    - `import { isPalindrome } from 'palind';`