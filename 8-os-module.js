//OS Modules provide useful ways for us to interact with the operating system
//Built in Modules don't require any installation

const os = require('os');

//Info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime how long the system has been running
console.log(`The system uptime is ${os.uptime} seconds`);

//Returns information about the operating system
const currentOS = {
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),

}

console.log(currentOS);