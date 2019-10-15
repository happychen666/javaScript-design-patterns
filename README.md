操作步骤：

1, 运行 npm init
2，安装开发依赖 （注意版本）
        `npm install webpack webpack-cli --save-dev --registry=https://registry.npm.taobao.org
         npm install webpack-dev-server html-webpack-plugin --save-dev --registry=https://registry.npm.taobao.org
        `

        配置 webpack.dev.config 文件：
            devServer 是本地开发环境下的服务器，从这个服务器中获取文件，所以里面要配置地址
3，通过babel工具来解析es6语法
    `npm install babel-core babel-loader babel-polyfill babel-preset-es2015 babel-preset-latest --save-dev --registry=https://registry.npm.taobao.org`

    配置 .babelrc 文件
    配置 webpack.dev.config 文件中的 rules
4， `npm run dev`
