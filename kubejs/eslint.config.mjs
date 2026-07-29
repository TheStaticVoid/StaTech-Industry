/**
 * ESLint configuration file.
 */
import js from '@eslint/js';
import json from '@eslint/json';
import stylistic from '@stylistic/eslint-plugin-js';
import { defineConfig } from 'eslint/config';
import { PanPack } from './dx/eslint-plugin/custom-plugin.mjs';

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
    {
        files: ['**/*.js'],

        plugins: {
            '@stylistic/js': stylistic,
            js,
        },
        extends: ['js/recommended'],
        rules: {
            'no-unused-vars': 'off',
            'no-undef': 'off',
            'no-unexpected-multiline': 'off',
            'no-var': 'error',
            'no-useless-escape': 'warn',
            '@stylistic/js/indent': ['error', 4],
            '@stylistic/js/spaced-comment': 'error',
            '@stylistic/js/no-trailing-spaces': 'error',
            '@stylistic/js/eol-last': ['error', 'always'],
            '@stylistic/js/no-multi-spaces': [
                'error',
                { ignoreEOLComments: true },
            ],
            '@stylistic/js/no-multiple-empty-lines': [
                'error',
                { max: 2, maxEOF: 0 },
            ],
        },
    },
    PanPack,
]);
