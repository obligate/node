/*
* promise
* async await
* */
/*
* 异步方法如何获取值呢？
* 使用setTimeout模拟异步操作
* 1. 方法1，采用回调的方式
* */
// function fakeAsyncMethod(callback){
//     setTimeout(function(){
//         let name = "fakeAsyncMethod";
//         // 如何返回呢？ 通过callback的方式
//         callback(name);
//     },1000);
// }
// fakeAsyncMethod(function(data){
//     console.log(data);
// });

// 2. 采用Promise的方式
// function getDataByPromise(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             let name = "getDataByPromise";
//             resolve(name);
//         },1000);
//     });
// }
// getDataByPromise().then(data=> console.log(data));

/**
 * async 的本质就是返回一个Promise
 */
// function normalMethod(){
//     return "normalMethod";
// }
// console.log(normalMethod());
//
//
// async function  asyncMethod(){
//     return "async method";
// }
// console.log(asyncMethod()); // 返回的是一个Promise,那可以使用then的方式获取数据
// asyncMethod().then(data=>console.log(data));

/**
 *  async  表明指定的函数是一个异步方法
 *  await  等待异步方法执行结果（阻塞当前进程），
 *        1. 不能单独使用，必须在async 定义的方法内部使用
 *        2. 后面必须是异步的方法，也就是async 表明的方法 或者 返回值是Promise的方法
 * */
// 第一种 async await
// async function getData(){
//     return "async by await";
// }
// async function test(){
//     let d = await getData();
//     console.log(d);
// }
// test();

// 第二种 promise await
function getData(){
    return new Promise(resolve => resolve("Promise resolve by await"));
}

async function test(){
    let d = await getData();
    console.log(d);
}
test();
