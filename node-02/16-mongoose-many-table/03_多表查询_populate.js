// 1. 还需要在ArticleSchema做一个外键关联关系,例如ref:"ArticleCate"
// cid : {
//     type: Schema.Types.ObjectId,
//         ref:"ArticleCate"    //cid和 文章分类建立关系。   model ,使用populate的时候需要用到，aggregate不需要配置
// },   /*分类 id*/
// 2. 注意使用 populate需要引入用到的model
const ArticleCateModel=require('./model/articlecate.js');
const ArticleModel=require('./model/article.js');
const UserModel=require('./model/user.js');


//文章表和 分类表的关联
// ArticleModel.find({}).populate('cid').exec(function(err,docs){
// 	console.log(docs);
// })


//三个表关联
ArticleModel.find({}).populate('cid').populate('author_id').exec(function(err,docs){
    console.log(docs);
});


// ArticleModel.aggregate  建议使用