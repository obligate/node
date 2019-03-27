const mongoose=require('./db.js');

const NewsSchema=mongoose.Schema({
    title:{
        type:String,
        trim:true    //定义 mongoose模式修饰符 去掉空格
    },
    author:String,
    pic:String,    
    content:String,
    status:{
        type:Number,
        default:1
    }
});

module.exports=mongoose.model('News',NewsSchema,'news');
