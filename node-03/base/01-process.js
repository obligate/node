/*
*  process  是一个全局对象
*
*  访问方式
*  console.log(process)
*  console.log(global.process)
*
*  常用的属性和方法
*  console.log(process.argv);
*  console.log(process.execPath); // node目录
*  console.log(process.env);
*  console.log(process.version);
*  console.log(process.versions);
*
*  console.log(process.pid); // 当前进程的pid
*  setInterval(function(){
*
*  }, 5000);
*
* console.log(process.title); // 当前进程显示的名称
* console.log(process.arch); // 当前cpu的架构
* console.log(process.platform);
* console.log(process.cwd());
* console.log(process.chdir(directory));
* console.log(process.exit(code)); // 退出
* console.log(process.memeoryUse); // 内存使用情况
*
* */

// function log(data){
//     process.stdout.write(data);
// }
//
// log('你好');


// 默认情况下，输入流是关闭的，要监听处理输入流数据，首先要开启输入流
process.stdin.resume();

var a;
var b;
// 监听用户的输入数据
process.stdin.on('data', function (chunk) {
    if (!a) {
        a = Number(chunk);
        process.stdout.write("请输入b的值：");
    } else {
        b = Number(chunk);
        process.stdout.write("结果是：" + (a + b));
    }
});


