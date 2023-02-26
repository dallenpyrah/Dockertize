module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'node'
    ],
    env: {
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:node/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'node/no-missing-import': [
            'error', {
                'tryExtensions': ['.ts', '.tsx', '.js', '.jsx', '.json']
            }
        ],
        'node/no-unsupported-features/es-syntax': [
            'error', {
                'ignores': ['modules']
            }
        ],
        'node/no-unpublished-import': 'off',
    }
};
