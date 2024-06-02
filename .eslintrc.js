module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect' // React version. 'detect' automatically detects the installed React version
    }
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{tsx,ts,js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname
  },
  plugins: [
    'react'
  ],
  rules: {
    'prefer-const': 'error',
    'react/react-in-jsx-scope': 'off',
    "@typescript-eslint/explicit-function-return-type": "off",
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'react/no-unescaped-entities': 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  }
}
