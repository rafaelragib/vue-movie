const path=require('path')

module.exports={
    outputDir:path.resolve(__dirname,'../server/public'),
    devServer:{
        proxy:{
            '/login':{
                target:'http://localhost:3000'
            }
        }
    }
}