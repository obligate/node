const mongoose=require('./db.js');

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        get(params){   //不建议使用,get是在从model获取的时候做的操作，不建议使用
            return "a001"+params
        }   
    },
    age:Number,       
    status:{
        type:Number,
        default:1

    }
});


module.exports=mongoose.model('User',UserSchema,'user');
