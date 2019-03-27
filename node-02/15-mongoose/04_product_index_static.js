
const productModel=require('./model/product.js');

// 添加索引
// const product = new productModel({
//     name: '赵六',
//     sn:'123456781',
//     age: 29
// });
// product.save();


// 添加自定义静态方法到Schema，调用
productModel.findBySn('123456781',function(err,docs){
    if(err){
        console.log(err);
        return;
    }
    console.log(docs)
});

//添加自定义实例方法到Schema，调用
const  product = new productModel({
    name: '王五',
    sn:'123456788991',
    age: 26
});
product.print();   //自定义的实例方法