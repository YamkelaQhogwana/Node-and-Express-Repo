//We will not cover much for now, as much of the course is focused on http 
//We are covering it now so we can see some of the core features of Node.js
//The http module is the one that will allow us to create our own server
//We will use Express with http

const http = require("http");

const server = http.createServer((req, res) =>{ //1st param is the request the second parm is the response
/* console.log(req); *///Showing the request object it is giant
if(req.url === "/"){//What address the client is requesting homepage is simple forward slash
    res.end("Welcome to our homepage");//Homepage is localhost 5000 without anything
}
else if(req.url === "/about"){
    res.end("Here is pur short history")
}
else{
res.end(`<h1> Oops </h1>
 <p> We cant seem to find the page your looking for </p>
  <a href = "/"> Back Home </a>`); 
/* res.write("Hello Welcome to our homepage");//What will you display
res.end() */
}
})

server.listen(5000);//Listen to the server on port 5000
//type localhost:5000 in your browser to run
//The terminal will not exit as it used to
//localhost:5000/home for example is the home page
//To reload ctrl + c then rerun the file then reload the browser