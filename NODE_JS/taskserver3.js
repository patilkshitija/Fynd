const http=require('http')
var ts=require("./taskserver");
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write('SERVER3');
    res.end();
}).listen(8082);