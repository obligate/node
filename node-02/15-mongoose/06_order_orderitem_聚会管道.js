/**
 * 模拟数据
 *  db.order.insert({"order_id":"1","uid":10,"trade_no":"111","all_price":100,"all_num":2})
    db.order.insert({"order_id":"2","uid":7,"trade_no":"222","all_price":90,"all_num":2})
    db.order.insert({"order_id":"3","uid":9,"trade_no":"333","all_price":20,"all_num":6})

     db.order_item.insert({"order_id":"1","title":"商品鼠标1","price":50,num:1})
     db.order_item.insert({"order_id":"1","title":"商品键盘2","price":50,num:1})
     db.order_item.insert({"order_id":"1","title":"商品键盘3","price":0,num:1})

     db.order_item.insert({"order_id":"2","title":"牛奶","price":50,num:1})
     db.order_item.insert({"order_id":"2","title":"酸奶","price":40,num:1})

     db.order_item.insert({"order_id":"3","title":"矿泉水","price":2,num:5})
     db.order_item.insert({"order_id":"3","title":"毛巾","price":10,num:1})

     1. 数据库聚合操作
     db.order.aggregate([
     {
          $lookup:
            {
              from: "order_item",
              localField: "order_id",
              foreignField: "order_id",
              as: "items"
            }
       },
     {
        $match:{"all_price":{$gte:90}}
    }
     ])
 */

// 2. mongoose操作
const OrderModel=require('./model/order.js');
//order表关联order_item
OrderModel.aggregate([
    {
        $lookup:
            {
                from: "order_item",
                localField: "order_id",
                foreignField: "order_id",
                as: "items"
            }
    },
    {
        $match:{"all_price":{$gte:90}}
    }
],function(err,docs){
    if(err){
        console.log(err);
        return;
    }
    console.log(JSON.stringify(docs))
});