module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['prettier'],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'none',
        arrowParens: 'avoid',
        tabWidth: 2,
        printWidth: 80,
        semi: false
      }
    ]
  }
}
