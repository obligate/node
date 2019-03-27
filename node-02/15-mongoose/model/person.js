var mongoose=require('./db.js');

/**
 *
 * Mongoose 校验参数
 *   required : 表示这个数据必须传入
 *   max: 用于Number 类型数据，最大值
 *   min: 用于Number 类型数据，最小值
 *   enum:枚举类型，要求数据必须满足枚举值enum: ['0', '1', '2']
 *   match:增加的数据必须符合match（正则）的规则
 *   maxlength：最大长度
 *   minlength：最小长度
 *   validate 自定义验证器
 */
//mongoose数据校验:用户通过mongoose给mongodb数据库增加数据的时候，对数据的合法性进行的验证
//mongoose里面定义Schema:字段类型，修饰符、默认参数 、数据校验都是为了数据库数据的一致性

//Schema，为数据库对象的集合,每个schema会映射到mongodb中的一个collection,定义Schema可以理解为表结构的定义
const PersonSchema=mongoose.Schema({
    name:{
        type:String, //指定类型
        trim:true,   //修饰符
        required:true
    },
    sn:{
        type:String,
        index:true,  //索引.
        set(val){  //自定义修饰符
            return val;
        },

        // maxlength:20,
        // minlength:10
        // match:/^sn(.*)/ ,
        validate: function(sn) {
            return sn.length >= 10;
        }

    },
    age:{
        type:Number,
        min:0,    //用在number类型上面
        max:150
    },
    status:{
        type:String,
        default:'success', //默认值
        enum:['success','error']   //status的值必须在 对应的数组里面  注意枚举是用在String
    }
});


module.exports=mongoose.model('Person',PersonSchema,'person');


