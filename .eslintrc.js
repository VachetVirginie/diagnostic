module.exports = {
    root: true,
    env: {
      browser: true,
      node: true
    },
    parserOptions: {
      parser: 'babel-eslint'
    },
    plugins: [
      'vue',
    ],
    rules: {
      'vue/max-attributes-per-line': 'off',
      'vue/no-v-html': 0,
      'no-console': 1, // Allows console.log
    }
  }