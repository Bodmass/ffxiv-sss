module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:import/typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    warnOnUnsupportedTypeScriptVersion: false,
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'react/prop-types': [0],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'react/jsx-props-no-spreading': [0],
    'jsx-a11y/label-has-associated-control': [0],
    'import/extensions': ['error', 'never'],
    'jsx-a11y/anchor-is-valid': [0],
    'react/jsx-one-expression-per-line': [0],
    'react/require-default-props': [0],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/no-array-index-key': [0],
    'import/no-unresolved': [0],
    'global-require': [0],
    'no-nested-ternary': [0],
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['./scripts/*'] }],
  },
  globals: {
    React: 'writable',
  },
}
