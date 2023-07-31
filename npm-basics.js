//npm global command comes with node
//npm --version to check the npm version 

//If you're installing a package as a Local dependency (only for this project)
//You type npm i <packageName>

//for a global dependency -use in any project 
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)
//mostly we will use local dependency

//package.json file is needed, it must be in the root
//can be created manually, or npm init or npm init -y(no many questions)
//package name should be unique if you hope to publish the app
//The packages you install will be stored under dependencies
//node modules stores the dependencies of the packages installed, one package may have many folders under node_modules

//after installing the lodash library
const _ = require('lodash');

const items = [1, [2,[3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);//will out put the array as [1,2,3,4]

//node modules should be ignored



