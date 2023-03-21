var fs = require("fs");


// synchronous file - blocking code example
// var data = fs.readFileSync("info.txt");

// console.log(data.toString());



// asynchronous- non-blocking code example
// function x(){

// }

// let x = function(){

// }
// let x=()=>{

// }

fs.readFile("info.txt",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data.toString());
})

console.log("END");