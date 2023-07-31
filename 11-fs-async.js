//File System Module could either be Synchronous or Asynchronous
const {readFile, writeFile} = require("fs"); //destructure out of fs module, do not use Sync
console.log("start");//Will come first
readFile("./content/first.txt", "utf8", (err, result) =>{ //callback
    if(err){
     console.log(err);
     return 
    }
    console.log(result);//without utf coding the result will be a buffer
    const first = result;//only after the file has been read
    readFile("./content/second.txt" , "utf-8", (err, result) =>{
     if(err){
     console.log(err);
     return 
    }
    console.log(result);//without utf coding the result will be a buffer
    const second = result;
    writeFile("./content/result-async.txt", ` Here is the result: ${first} ${second}`, {flag: "a"},( (err, result)  =>{
        if (err){
            console.log(err);
        }
        console.log("done with this task")
        
    }));
    })
})
console.log("starting the next task");//Will come second, then the code inside will come after
//node can serve other users basically
//It is messy code (callback hell)
//alternatives are using promises or using async await
//For most of the course it will be reading to the database, writing to the database not files per say
//For the remainder of the course we will use async await


