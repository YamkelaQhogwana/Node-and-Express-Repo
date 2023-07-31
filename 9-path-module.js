const path = require("path");

//What is used to separate paths
console.log(path.sep);

//Get the normalized path
const filePath = path.join("content", "subfolder" , "rest.txt");
console.log(filePath);

//Return the base name, last/destination file
const base = path.basename(filePath);
console.log(base);

//Return an absolute path, accepts a sequence of paths and resolves it into an absolute path, as in C:\Users etc etc
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'rest.txt');
console.log(absolute);

