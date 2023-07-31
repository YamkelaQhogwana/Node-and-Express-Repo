/*What is Node.js
-runs js outside of the browser
-built on Chromes V8
-Big Community
-It is Full Stack
-You should make sure you have HTML, CSS ES6
-Know the basics so you know how stuff works behind the scene
-This course and Part Two will cover building Apps */


/*
-Node JS has no Dom
-No Window
-Server Side Apps
-Has Access to a file system
-Version Control
-Uses CommonJS
-Repl is for light Testing , the CLI is much better to use

 */


const amount = 12;
if(amount < 10){
    console.log("The amount is small")
}else{
    console.log("Large Number");
}



console.log(`Hey this is my first node app`);
console.log(_dirname);

//Globals No Window
//_dirname - path to current directory
//_filename = filename
//require - function to use modules (CommonJs)
//module - info about current module(file)
//process - info about env where the program is being executed

setInterval(()=>{
    console.log("Hello World");
}, 1000);

//To run the code type node app.js
//To rerun press the arrow key up
//Clear will clear the console