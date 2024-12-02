module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'import/no-cycle': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-array-index-key': 'off',
    'react/react-in-jsx-scope': 'off',
    'max-len': [2, { code: 120 }],
    'react/jsx-filename-extension': [1, { extensions: ['tsx', '.ts'] }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-use-before-define': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'default-case': 'off',
    'react/prop-types': 'off',
    camelcase: 'off',
    'react/self-closing-comp': 'off',
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'import/prefer-default-export': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'max-classes-per-file': 'off',
    'class-methods-use-this': 'off',
    'react/jsx-no-useless-fragment': 'warn',
    'react/function-component-definition': 'off',
    'no-restricted-exports': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['lodash'],
            message: 'Import [module] from lodash-es instead',
          },
        ],
        paths: [
          {
            name: 'react',
            importNames: ['default'],
            message: "React doesn't need to be in scope since version 17",
          },
        ],
      },
    ],
    'import/order': [
      'warn',
      {
        groups: [
          'external',
          'builtin',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'parent',
            position: 'before',
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['**/reducer.ts'],
      rules: {
        'no-param-reassign': 'off',
      },
    },
    {
      files: ['**/analytics/events/**/*.+(js|jsx|ts|tsx)'],
      rules: { 'max-len': 0 },
    },
  ],
  globals: {
    ImportMetaEnv: 'readonly',
    NoInfer: 'readonly',
  },
};
