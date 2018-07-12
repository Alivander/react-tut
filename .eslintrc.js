module.exports = {
    extends: [
        'airbnb-base',
        'react-app',
        'plugin:jsx-a11y/recommended'
    ],
    plugins: [
        'jsx-a11y'
    ],
    rules: {
        'indent': ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            FunctionDeclaration: {
                parameters: 1,
                body: 1
            },
            FunctionExpression: {
                parameters: 1,
                body: 1
            },
            CallExpression: {
                arguments: 1
            },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            ignoredNodes: [
                'JSXElement',
                'JSXElement *'
            ]
        }],
        'no-plusplus': ['error', {
            "allowForLoopAfterthoughts": true
        }]
    }
};
