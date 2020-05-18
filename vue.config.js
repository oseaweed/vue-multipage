module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'index',
            // 提取出来的通用 chunk 和 vendor chunk。
            //chunks: ["chunk-vendors", "chunk-common", "index"]
        },
        login: {
            template: 'public/login.html',
            entry: 'src/pages/login/login.js',
            filename: 'login.html',
            title: 'login'
        }
    }

}