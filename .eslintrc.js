module.exports = {
  env: { browser: true, es2021: true },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react-redux/recommended',
    'plugin:jsx-a11y/strict',
    'prettier', // always last to override lint rules
  ],
  overrides: [],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react', 'react-redux', 'jsx-a11y', 'prettier'],
  rules: {
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'no-promise-executor-return': 'off',
    'react/prop-types': 'off', // temp
    'no-underscore-dangle': 'off',
    'max-len': 'off',
    'prefer-destructuring': 'off',
    'prettier/prettier': ['error'],
  },
};
