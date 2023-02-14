const http=require('http')
var ts2=require("./taskserver2");
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write('SERVER1');
    res.end();
}).listen(8080);