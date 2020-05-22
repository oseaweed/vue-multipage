module.exports = {
    pages: {
        first: {
            template: 'public/first.html',

            // page 的入口
            entry: 'src/pages/first/first.js',
            // 模板来源
            // 在 dist/index.html 的输出
            filename: 'first.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'first',
            // 提取出来的通用 chunk 和 vendor chunk。
            //chunks: ["chunk-vendors", "chunk-common", "index"]
        },
        second: {
            template: 'public/second.html',
            entry: 'src/pages/second/second.js',
            filename: 'second.html',
            title: 'second'
        }
    }

}