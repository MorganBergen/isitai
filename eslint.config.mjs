/**
 *
 * @file ./eslint.config.mjs
 *  @see https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file-formats
 *
 *
 **/

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
