const fs = require('fs');

/**
 * fs.open(path,flags,[mode],callback)
 *        path: 要打开的文件的路径
 *        flags：打开文件的方式 读/写
 *        mode: 设置文件的模式  读/写/执行
 *        callback: 回调
 *              err: 文件打开失败的错误保存在err里面，如果成功err为null
 *              fd： 被打开文件的标识（句柄）
 * */

fs.open('03-fs.txt', 'r+', function (err, fd) {
    if (err) {
        console.log('文件打开失败');
        console.log(err);
    } else {
        console.log('文件打开成功');
        console.log(fd);
        /**
         * 读取文件
         * fs.read(fd,buffer,offset,length,position,callback)
         *      fd: 通过open方法成功打开一个文件返回的编号
         *      buffer： buffer对象
         *      offset:  新的内容添加到buffer中的起始位置
         *      length:  添加到buffer中内容的长度
         *      position: null或者0即可，读取的文件中的起始位置
         *      callback:
         *          err:
         *          len:  添加进去的内容的实际长度
         *          buffer: 添加进去的内容返回的实际buffer
         * */

        // var bf = new Buffer(10);
        // console.log(bf);
        // fs.read(fd,bf,0,4,null,function(err,len,newbf){
        //     console.log(bf);
        //     console.log(len);
        //     console.log(newbf);
        // })


        /**
         * 当我们要对打开的文件进行写操作的时候，打开文件的模式应该是 读写 方式
         *  fs.write(fd,buffer,offset,length[,position],callback)
         *        fd: 打开的文件
         *        buffer： 要写入的数据
         *        offset: buffer对象中要写入的数据的起始位置
         *        length： 要写入的buffer数据的长度
         *        postion: fd中的起始位置
         *        callback:回调
         * */

        // var bf = new Buffer(123);
        // fs.write(fd, bf, 0, 3, 0, function () {
        //     console.log(arguments);
        // })

        // 直接写字符串
        // fs.write(fd,"1234", 10, "utf-8");
        // fs.close(fd,function(){
        // });
    }
});



