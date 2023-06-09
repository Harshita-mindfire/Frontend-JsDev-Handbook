---
id: 0nxkat7266fo4bon6kz0pkq
title: Husky Hook
desc: ''
updated: 1686300590885
created: 1686300590885
---
## Setup husky pre-commit hook

1. npm install husky lint-staged --save-dev
2. Next, add a script for it in package.json:
    ```json
    "lint-staged": "lint-staged --config lint-staged.js",
    "husky-install": "husky install"
    ```
3. Run: npm run husky-install
4. Then create your hook with the following command: `npx husky add .husky/pre-commit "npm run lint-staged"`
    The following file will be automatically generated in the .husky folder at the root of the project:
    ```bash
    #!/bin/sh
    . "$(dirname "$0")/_/husky.sh"
    npm run lint-staged
    ```
5. Add the following configs in package.json
    ```json
    "husky": {
        "hooks": {
        "pre-commit": "lint-staged"
        }
    },
    "lint-staged": {
        "src/**/*.{js,jsx,ts,tsx,json,css,scss}": [
        "prettier --write"
        ]
    },
    ```
  6. Done!