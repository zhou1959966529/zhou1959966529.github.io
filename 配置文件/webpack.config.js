/**
 * Created by Administrator on 2017/2/16 0016.
 */
var webpack = require('webpack')

module.exports = {
    //入口
    entry: './dist1/css/entry.js',   //入口文件路径
    //出口
    output: {
        path: './dist1',         //  生成文件的存放路径
        // publicPath:'dist/',//资源的发布地址
        filename: 'output1.js'      //生成文件的名字
    },
    module: {
        /*loader配置*/
        loaders: [
            //处理css 样式配置        CSS
            {test: /\.css$/, loader: '!style-loader!css-loader'},

            //处理less 配置             Less
            // {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},

             // 处理图片路径配置        img-url
            {test: /\.(png|jpg|gif)$/,
                //limit 字段代表图片打包限制，当图片大小小于限制时会自动转成 base64 码引用
                //&后面都是对生成文件的指定
                loader: 'url-loader?limit=8192&name=img/[hash:8].[name].[ext]'}

        ]
    }
}
