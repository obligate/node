var fs=require('fs');
function getMime(callback){
    fs.readFile('mime.json',function(err,data){
        //console.log(data.toString());
        //return data;
        callback(data);
    })
}

getMime(function(result){
    console.log(result.toString());
})