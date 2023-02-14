var  http=require('http');//importing the in built http module
var dt=require('./ownModule');//calling one module from another/user defined module
//dt:date time
http.createServer(function(req,res){
    //res:response to request
    //response has 3 feature :head and a tail
    //head:code indicating success or failure or any other status
    //200:success code
    res.writeHead(200,{'content-type':'text/html'});
    //update the body of response:date coming from from the different user created module
    res.write("The date and time are currently:" +dt.getCurrentDate());
    //datetime is bring fetched from the outside module
    //using the content type mentioned above as text/htmluser defined module
    res.end();//ending the writing functionality for a request response function
}).listen(8080);//mentioning whinch port our application will run on the server