const ArticleCateModel=require('./model/articlecate.js');
const UserModel=require('./model/user.js');
const ArticleModel=require('./model/article.js');


//增加分类
// const cate=new ArticleCateModel({
//   title:'国内新闻',
//   description:'国内新闻'
// });
// cate.save();


//增加用户
// const user= new UserModel({
//   username  :'lisi',
//   password:'13214lkisisgfdsgsdsg',
//   name:'李四',
//   age:20,
//   sex:'男',
//   tel:124212142151
// });
// user.save();



// 增加文章
const article=new ArticleModel();
article.title="这是一个国内新闻11111111";
article.cid='5bd46ff74a720725a406528c';
article.author_id='5bd470face4dbf0ae0b185ce';
article.author_name='李四';
article.descripton='这是一个国内新闻11111111 此处省略300字';
article.content='习近平访问美国 这是一个国内新闻11111111';

article.save();