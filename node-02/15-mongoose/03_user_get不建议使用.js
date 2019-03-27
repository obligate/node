
const UserModel=require('./model/user.js');

const user=new UserModel({
    name:'张三',
    age:20
});

console.log(user.name, user.age);



//保存数据
// const user = new UserModel();
// user.name="张三";
// user.age=20;
//
//
//
// user.save(function(err){
//     if(err){
//         console.log(err);
//         return;
//     }
//    console.log('成功')
// });









