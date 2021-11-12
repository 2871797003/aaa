module.exports = {
    devServer: {
        proxy: {
            '/api/recipe/*': {
                /* 目标代理服务器地址 */
                target: 'https://api.binstd.com',
                /* 允许跨域 */
                changeOrigin: true,
                /*路径重写（防止/api它在服务端扮演真正的地址）*/
                pathRewrite: {
                    "^/api": ""          //若请求的路径在目标url下但不在/api 下，则将其转换成空
                }
            },
        },
    },
}