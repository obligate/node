const mongoose=require('./db.js');

const UserSchema=mongoose.Schema({
    name:String,
    age:Number,
    status:{
        type:Number,
        default:1   
    }
});

module.exports=mongoose.model('User',UserSchema,'user');
