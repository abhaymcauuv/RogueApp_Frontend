var path    = require('path');
var hwp     = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')
    },
    module:{
        rules:[{
            exclude: /node_modules/,
            test: /\.(js|jsx)?$/,
            loader: 'babel-loader'
        },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }
                ]
              },
              {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
              }]
    },
   resolve: {
      extensions: [".js", ".jsx"]
    },
    plugins:[
        new hwp({template:path.join(__dirname, '/src/index.html')})
    ]
}