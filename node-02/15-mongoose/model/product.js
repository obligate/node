const  mongoose=require('./db.js');



const  ProductSchema=mongoose.Schema({
    name:{
        type:String
    },
    sn:{
        type:String,
        index:true
    },
    age:Number,
    status:{
        type:Number,
        default:1

    }
});

//静态方法
ProductSchema.statics.findBySn=function(sn,cb){
    //通过 find方法获取 sn的数据    this 关键字获取当前的model
    this.find({"sn":sn},function(err,docs){
        cb(err,docs);
    });
};



// 实例方法   (基本不用)
ProductSchema.methods.print=function(){
    console.log('我是一个实例方法');
    console.log(this.name);
};

module.exports=mongoose.model('Product',ProductSchema,'product');


