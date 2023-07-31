//Modules
//You will execute all your code in one file but you will use and import modules accordingly
//Node uses common JS so the module will look slightly different
const names = require('./modules-variables');
const sayHi = require('./modules-functions');
const items = require('./modules-alt-syntax');
require('./7-mind-grenade');//the add is imported without being exported and assigned a variable
console.log(names);

const myItems = items.items;
const myPerson = items.singlePerson;
console.log(myItems);
console.log(items.singlePerson);
sayHi("susan");
sayHi(names.jon);


//Node.js uses the CommonJS library and every file is a module