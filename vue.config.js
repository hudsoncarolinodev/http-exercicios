module.exports = {
    devServer: {
        port: 8080,
        proxy: {
            '^/api': {
                target: 'https://corso-vue-1d5b6-default-rtdb.firebaseio.com/',
                ws: true,
                changeOrigin: true,
                
            }
        }
    }
}

