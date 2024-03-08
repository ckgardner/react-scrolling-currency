/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:jsx-a11y/recommended',
    'plugin:import/typescript',
    'prettier',
    'plugin:@next/next/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: [
    'prettier',
    'simple-import-sort',
    '@typescript-eslint',
    'deprecation',
    'sort-keys',
    'typescript-custom-sort-keys',
    'sort-destructure-keys',
    'no-relative-import-paths',
  ],
  // eslint-disable-next-line sort-keys/sort-keys-fix
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    /**
     * Listen to typescript configuration
     */
    project: './tsconfig.json',
    sourceType: 'module',
  },
  // eslint-disable-next-line sort-keys/sort-keys-fix
  globals: {
    Blob: 'readonly',
    File: 'readonly',
    FileReader: 'readonly',
    FormData: 'readonly',
    alert: 'readonly',
    confirm: 'readonly',
    document: 'readonly',
    fetch: 'readonly',
    localStorage: 'readonly',
    navigator: 'readonly',
    sessionStorage: 'readonly',
    window: 'readonly',
  },
  ignorePatterns: ['package.json'],
  overrides: [
    {
      files: ['*.json'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
    {
      /**
       * Turn off sort-keys for generated files (it will take longer to sort and there is no need to sort the generated files)
       */
      files: ['**/generated/**/*.ts'],
      rules: {
        '@typescript-eslint/naming-convention': 'off',
        'sort-destructure-keys/sort-destructure-keys': 'off',
        'sort-keys': 'off',
        'sort-keys/sort-keys-fix': 'off',
        'typescript-custom-sort-keys/interface': 'off',
      },
    },
    {
      /**
       * Disable no-undef on typescript file since the check it provides are already provided by Typescript without the need for configuration
       * Refs: https://github.com/typescript-eslint/typescript-eslint/blob/bbfed02ce62533d2020dc0b834cfa17e26a6d523/docs/linting/Troubleshooting.mdx?plain=1#L169
       */
      files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],

  rules: {
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/await-thenable': 'warn',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        fixStyle: 'inline-type-imports',
        prefer: 'type-imports',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-floating-promises': [
      'error',
      {
        ignoreIIFE: true,
      },
    ],
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    /**
     * Report all unnecessary chaining "?".
     * @description https://github.com/typescript-eslint/typescript-eslint/issues/1641 (Issue description)
     * @info https://typescript-eslint.io/rules/no-unnecessary-condition/ (Eslint rule detail)
     * */
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    /** @link https://eslint.org/docs/latest/rules/no-unused-vars#ignorerestsiblings */
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        typedefs: false,
      }, // disable for typing definition
    ],
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/restrict-template-expressions': 'error',
    '@typescript-eslint/unbound-method': 'warn',
    camelcase: 'off',
    /**
     * Report deprecated variables (This is helpful to find deprecated variables are being used)
     * @link https://www.npmjs.com/package/eslint-plugin-deprecation
     * */
    'deprecation/deprecation': 'warn',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': [
      'error' /** Allow test files to import library from devDependencies */,
      {
        devDependencies: ['**/*.test.ts', 'next.config.mjs', '**/*.d.ts'],
      },
    ],
    'import/no-internal-modules': [
      'warn',
      {
        forbid: [
          /* Only access lodash subfolders for tree shaking */
          'lodash',
          'lodash!(/)',
        ],
      },
    ],
    'import/no-unresolved': 'off',
    // Typescript takes care of this
    'import/prefer-default-export': 'off',
    'no-console': 'warn', // For debugging ease
    'no-relative-import-paths/no-relative-import-paths': ['warn'],
    'no-restricted-exports': 'off',
    // https://eslint.org/docs/latest/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      {
        message: 'Use `jsonParse` function instead of `JSON.parse`',
        selector: 'MemberExpression[object.name="JSON"][property.name="parse"]',
      },
      // https://stackoverflow.com/questions/42226436/how-can-i-turn-off-eslints-no-restricted-syntax-rule-just-for-forofstatement
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    // Disable the base rule it can report incorrect errors
    'no-use-before-define': 'off',
    'no-void': ['error', { allowAsStatement: true }],
    'prettier/prettier': 'error',
    // Try removing this after updating to "react-scripts": "^4.x"
    'react/default-props-match-prop-types': 'off',
    'react/display-name': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-curly-newline': 'off',
    // Prettier takes care of this
    'react/jsx-filename-extension': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-no-useless-fragment': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    // Prettier takes care of this
    'react/jsx-one-expression-per-line': 'off',
    /**
     * @ref https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
     */
    'react/jsx-sort-props': ['error'],
    // Prettier takes care of this
    'react/jsx-wrap-multilines': 'off',
    // Prettier takes care of this
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          /** Framework */
          ['^react', '^@?next'],
          /** Internal library */
          ['^src/'],
          /** Relative imports (e.g., './', '../') */
          ['^(\\.+/)'],
          /** Style imports */
          ['^.+\\.module.scss$'],
        ],
      },
    ],
    /**
     * Sort object destructure keys. This rule autofix doesn't tie with comment like `sort-keys`
     * @ref https://github.com/mthadley/eslint-plugin-sort-destructure-keys
     */
    'sort-destructure-keys/sort-destructure-keys': [
      'warn',
      { caseSensitive: false },
    ],
    'sort-keys': 'off',
    /**
     * Sort object keys (not included destructure object)
     * @ref https://github.com/namnm/eslint-plugin-sort-keys
     */
    'sort-keys/sort-keys-fix': ['warn', 'asc'],
    /**
     * Sort all types/interface keys
     * @ref https://github.com/prash471/eslint-plugin-typescript-custom-sort-keys
     */
    'typescript-custom-sort-keys/interface': [
      'warn',
      'asc',
      {
        caseSensitive: true,
        showFunctionsAtEnd: true,
      },
    ],
  },
  settings: {
    /**
     * @desc allow 'ts-toolbelt' to remain in devDependencies without 'import/no-extraneous-dependencies' errors
     * @link https://github.com/import-js/eslint-plugin-import#importcore-modules
     * */
    'import/core-modules': ['ts-toolbelt'],
    'import/resolver': {
      node: {
        paths: [__dirname],
      },
    },
  },
};
