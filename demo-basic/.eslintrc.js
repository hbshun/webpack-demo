module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: [
    'import'
  ],
  env: {
    browser: true,
  },
  rules: {
    'react/jsx-filename-extension': [2, { "extensions": [".js", ".jsx"] }],
  }
};