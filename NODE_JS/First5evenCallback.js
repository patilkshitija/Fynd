const fs=require("fs");

/**
 * call back function to resd file data
 * @param {Error} error
 * @param {buffer} fileData
 * @returns void
 */
function readFirstFiveCallback(error,fileData){
    if (error){
        console.error(error);
        return;

    }
    //converting the fileData which is buffer to string and splitting by line.
    const Lines=fileData.toString().split("\n");
    //slice the lines to the first five and log them.
    Lines.slice(0,6).forEach((line)=>{
        console.log(line);
    });
}
//function call with callback
fs.readFile("./buffer.js" ,readFirstFiveCallback);
