const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack-numbers.js',
        //导出lib, import的时候要一样的名称 
        library: 'webpackNumbers',
        libraryTarget: 'umd'
    },
    externals: {
        //声明当前的lib依赖于lodash, 在使用的时候，user的工程里面需要npm install lodash
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    }
};