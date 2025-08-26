// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // Ignora carpetas generadas y dependencias
  {
    ignores: ['dist', 'node_modules', 'coverage', '.nyc_output'],
  },

  // Reglas base recomendadas
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,

  // Integración con Prettier (al final)
  eslintPluginPrettierRecommended,

  // Config general para archivos .ts (sin tests)
  {
    files: ['**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      sourceType: 'commonjs',
      parserOptions: {
        // Recomendado para flat config con TS
        projectService: true,
        tsconfigRootDir: process.cwd(),
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      // Sugerente: si te molesta en bootstrap(), desactívalo en esa línea con eslint-disable-next-line
      '@typescript-eslint/no-floating-promises': 'warn',
      // Mantener cierta estricta sin tests
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-return': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
    },
  }
);