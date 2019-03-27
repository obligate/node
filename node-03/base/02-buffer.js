/**
 *  Buffer类
 *      用于操作二进制数据流
 *
 *
 *
 * */

// new Buffer(size);  size [Number] 创建一个Buffer对象，并为这个对象分配一个大小
// 当我们为一个Buffer对象分配空间大小以后，其长度是固定的，不能更改
// var bf = new Buffer(5);
// console.log(bf);
// bf[6]=10;  // 不能更改
// console.log(bf);


// new Buffer(array);
// var bf = new Buffer([1,2,3]);
// console.log(bf);
// bf[10]=10;
// console.log(bf);


// new Buffer(string,[encoding]);
// var bf = new Buffer('peter','utf-8');
// console.log(bf);
// console.log(bf.length);
// for(var i=0;i<bf.length;i++){
//     console.log(String.fromCharCode(bf[i]));
// }

//     length 代表的是字节长度，不是字符长度
// var str1 = "peter";
// var bf1 = new Buffer(str1);
// console.log(str1.length);
// console.log(Buffer.byteLength(str1));
// console.log(bf1.length);
//
// var str2 = "中国";
// var bf2 = new Buffer(str2);
// console.log(str2.length);
// console.log(bf2.length);


//============================ buf.write(要写入的字符串，从Buffer对象中的第几位开始写入，写入的字符串的长度，写入的字符串的编码) ===================
// var str = "peter";
// console.log(new Buffer(str));
//
// // var bf = new Buffer(3);
// // bf.write(str);
// // console.log(bf);
//
// var bf = new Buffer(5);
// // bf.write(str,1); // 1代表的是buf的从第几个位置开始写，默认从0开始
// // console.log(bf);
//
// bf.write(str,1,3); // 1代表的是buf的从第几个位置开始写，默认从0开始,写入3个字符
// console.log(bf);


// ======================= toString()   toJSON()======================
// var bf = new Buffer("Peter");
// console.log(bf.toString());
// console.log(bf.toString('utf-8',1,3));
//
//
// var bf1 = new Buffer("飞天");
// console.log(bf1.toString());
// console.log(bf1.toString('utf-8',1));
//
//
// console.log(bf.toJSON());




// ========================= slice() ================
    //  原buffer对象和新的buffer指向的是同一个地址,建议用copy方法
// var bf = new Buffer("Peter");
// console.log(bf);
// var bf2 = bf.slice();
// console.log(bf2);
// var bf3 = bf.slice(2,4);
// console.log(bf3);
//
// bf3[0] = 2;
// console.log(bf3);
// console.log(bf);

// var bf4 = new Buffer(10);
// bf.copy(bf4);
// console.log(bf4);
// bf4[0] = 2;
// console.log(bf4);
// console.log(bf);


//================= 类方法 ==============
// console.log(Buffer.isEncoding('utf-8'));
// console.log(Buffer.isEncoding('gbk'));

// var str1 = "peter";
// console.log(Buffer.byteLength(str1));
// var str2 = "中国";
// console.log(Buffer.byteLength(str2));

var str1 = "peter";
var str2 = "中国";

var list = [new Buffer(str1),new Buffer(str2)];
console.log(list);
var bf = Buffer.concat(list);
console.log(bf);

