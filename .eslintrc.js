module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react-redux/recommended',
    'plugin:jsx-a11y/strict',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-redux',
    'jsx-a11y',
  ],
  rules: {
    'react/function-component-definition':
      [2, { namedComponents: 'arrow-function' }],
    'object-curly-newline': [2, { minProperties: 2 }],
    'no-promise-executor-return': 'off',
  },
};
