module.exports = {
  extends: ['next', 'turbo', 'prettier'],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': ['error'],
  },
};
