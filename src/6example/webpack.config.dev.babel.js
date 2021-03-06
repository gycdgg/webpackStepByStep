import path from 'path';
import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import baseConfig from './webpack.config.base';
const env = process.env;
const HOST = env.HOST || env.npm_package_config_host;
const PORT = env.POST || env.npm_package_config_port;

export default webpackMerge(baseConfig, {
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [{
        /**
         * eslint代码规范校验
         */
            test: /\.(js|jsx)$/,
            enforce: 'pre',
            include: path.join(__dirname, 'src'),
            exclude: path.join(__dirname, 'src/components/companyInfo/companyInfo/relateInfo/map'), // 可以不用定义这个字段的属性值，eslint会自动忽略node_modules和bower_
            use: [{
                loader: 'eslint-loader',
                options: {
                    configFile: '.eslintrc.json'
                }
            }]
        }]
    },
    plugins: [
        // 出错不终止插件
        new webpack.NoEmitOnErrorsPlugin(),
        // 配置全局变量
        new webpack.DefinePlugin({
            __DEV__: true
        })
    ],
    devServer: {
        proxy: {
            '/': {
                target: 'http://10.28.200.248'
                // target: 'http://localhost:8080'
            }
        },
        host: HOST,
        port: '8080',
        inline: true,
        contentBase: path.join(__dirname, 'build')
    }
});
