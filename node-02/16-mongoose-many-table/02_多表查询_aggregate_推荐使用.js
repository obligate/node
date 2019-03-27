const ArticleModel=require('./model/article.js');

//三个表关联查询
ArticleModel.aggregate([
    {
        $lookup: {
            from: "articlecate",
            localField: "cid",
            foreignField: "_id",
            as: "cate"
        }
    },
    {
        $lookup: {
            from: "user",
            localField: "author_id",
            foreignField: "_id",
            as: "user"
        }
    }
],function(err,docs){
    console.log(JSON.stringify(docs));
});