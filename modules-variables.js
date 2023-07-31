const secret = "SUPER SECRET"; //This is can be accessed everywhere in the folder, this is problematic
const jon = "jon";
const mark = "mark";

console.log(module);

//With modules you can export certain things into the export to be shared with the entire app
module.exports = {jon, mark}