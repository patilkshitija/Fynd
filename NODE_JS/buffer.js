var buffer1= Buffer.alloc(100);//allocated a space of 100 units
 //we can store data inside this space 
 //var buffer2=new Buffer('FYND')
 //var buffer3= Buffer.from( [1,2,3,4]);
 
//utilising a buffer space
//the write function will have runtime data: username, password
buffer1.write("i am here");
//transforming the buffer content to string 
var a=buffer1.toString('utf-8');
//printing the value
console.log(a);
console.log(Buffer.isBuffer(buffer1));
console.log(buffer1. length); //can be used for validation purpose of the object

var bufferSource=new Buffer('ABC' ); //deprecated
var bufferDesination=Buffer.alloc(3);
bufferSrc.copy(bufferDest);
var Data=bufferDest.toString('utf-8'); 
console.log(Data);

//slice or filter the data
var bufferold=new Buffer('INDIA IS GREAT'); 
var bufferNew= bufferold.slice(0,4); 
console.log(bufferNew.toString());

//concat 2 buffers
var bufferOne=new Buffer('INDIA');
var bufferTwo= new Buffer('IS GREAT');
var bufferFour=new Buffer('JAI HIND');
var bufferThree=new Buffer.concat([bufferOne,bufferTwo,bufferFour]);
console.log(bufferThree.toString());