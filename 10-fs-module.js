//File System Module could either be Synchronous or Asynchronous
const {readFileSync, writeFileSync} = require("fs"); //destructure out of fs module
console.log('start'); //1.
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

//Will create a new file and write to it, if it exists wills imply overwrite what was in the file
writeFileSync
("./content/result-sync.txt", ` Here is the result: ${first} ${second}`)
;

//Will append the text that was in the file 
writeFileSync
("./content/result-sync.txt", ` Here is the result: ${first} ${second}`, {flag: "a"});
;

console.log("done with the task");//2.
console.log("starting the next one");//3.

//But what is reading and writing the files is time consuming, the app will slow down and not be able to serve other users it reads line by line

