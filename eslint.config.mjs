import nextVitals from "eslint-config-next/core-web-vitals"
import perfectionist from "eslint-plugin-perfectionist"
import { includeIgnoreFile } from "@eslint/compat"
import nextTs from "eslint-config-next/typescript"
import { defineConfig } from "eslint/config"
import { fileURLToPath } from "url"


const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url))

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // perfectionist.configs["recommended-alphabetical"],
  perfectionist.configs["recommended-line-length"],
  {
    rules: {
      "react-hooks/incompatible-library": "off",
      "perfectionist/sort-modules": "off",
      "import/no-duplicates": "error",
      "import/first": "error",
    },
  },
  includeIgnoreFile(gitignorePath),
])

export default eslintConfig
