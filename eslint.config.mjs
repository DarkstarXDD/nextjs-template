import { dirname } from "path"
import { fileURLToPath } from "url"

import { includeIgnoreFile } from "@eslint/compat"
import { FlatCompat } from "@eslint/eslintrc"
import eslintPluginImport from "eslint-plugin-import"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url))

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  includeIgnoreFile(gitignorePath, "Imported .gitignore patterns"),
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "import/first": "error",
      "import/no-duplicates": "error",
      "import/newline-after-import": "error",
    },
  },
]

export default eslintConfig
