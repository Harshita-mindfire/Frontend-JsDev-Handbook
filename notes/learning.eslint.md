---
id: gv9ad1s3wc299dhuleufjey
title: Eslint
desc: ""
updated: 1684917500902
created: 1684917500902
---

## configure eslint in project

- npm i -D eslint
- npx eslint --init and then answer the questions
- add scripts in your package json:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}
```

- npm run lint

## Trouble shooting:

- for react prop types error, either add rule : "react/prop-types": "off" in eslintrc
