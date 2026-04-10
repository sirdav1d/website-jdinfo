import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypeScript from 'eslint-config-next/typescript'

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    ignores: ['.next/**', '.next-dev/**', 'node_modules/**', 'test-results/**'],
  },
  {
    files: ['app/blog/**/page.tsx'],
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
]

export default eslintConfig
