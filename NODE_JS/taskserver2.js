const http=require('http')
var ts3=require("./taskserver3");
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write('SERVER2');
    res.end();
}).listen(8081);