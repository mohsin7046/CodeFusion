module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier', // Disables ESLint rules that might conflict with Prettier
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error', // Show Prettier errors as ESLint errors
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off', // React 17+ doesn't require React in scope
  },
};
