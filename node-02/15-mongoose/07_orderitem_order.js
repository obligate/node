/**
 * 需求： 查询order_item，找出商品名称是酸奶的商品，酸奶这个商品对应的订单的订单号以及订单的总价格
 */
const OrderItemModel=require('./model/order_item.js');
const OrderModel=require('./model/order.js');
const mongoose=require('mongoose');

// 第一中实现方式：
OrderItemModel.find({"_id":"5bd462e970c3066972b12b30"},function(err,docs){
    const order_item=JSON.parse(JSON.stringify(docs));
    const order_id=order_item[0].order_id;
    OrderModel.find({"order_id":order_id},function(err,order){
        order_item[0].order_info=order[0];
        console.log(order_item)
    });
});

// 第二种实现方式
// mongoose中获取ObjectId           mongoose.Types.ObjectId
// OrderItemModel.aggregate([
//     {
//         $lookup:
//             {
//                 from: "order",
//                 localField: "order_id",
//                 foreignField: "order_id",
//                 as: "order_info"
//             }
//     },{
//         $match:{_id: mongoose.Types.ObjectId('5bd462e970c3066972b12b30')}
//     }
// ],function(err,docs){
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(JSON.stringify(docs))
// });