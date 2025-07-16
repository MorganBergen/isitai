#  codebase overview

```
README.md
next.config.ts
eslint.config.mjs
tsconfig.json
package.json
package-lock.json
test/package.test.js
src/app/upload/page.tsx
src/app/globals.css
src/app/page.tsx
src/app/AppContext.tsx
src/app/layout.tsx
src/app/ThemeContext.tsx
src/app/decode/page.tsx
src/app/decode/decodePage.module.css
src/app/favicon.ico
```

###  purpose

privacy first, client-side web application for extracting and inspecting `exif` and `c2pa` metadata from images.

no files or data leave your machine-everything runs in browser via webassembly/javascript exif tool.

###  framework & technology

-  next.js 15 (app router) + react 19
-  typescript
-  geist ui tokens and custom css (no third party react component libraries)
-  vercel analytics
-  eslint, pre-commit, built-in node 20 test runner

###  directory structure

