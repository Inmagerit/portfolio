const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    entry:'./src/index.ts',
    module:{
        rules:[
            {
                test: /\.ts$/i,
                use:'ts-loader',
                include: [path.resolve(__dirname, 'src')],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'src/index.html'), 
          filename: 'index.html', 
          inject: 'body', 
        }),
      ],
    
    output:{
        publicPath: 'public',
        filename:'bundle.js',
        path: path.resolve(__dirname,'public')
    }
    
    
}
