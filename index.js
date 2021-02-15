/* MK first try
*/
var http = require('http');
var url = require("url");

/*var server = require("./server");
var router = require("./router");*/

const hostname = '127.0.0.1';
const port = 3000;

function start(route){
  function route (pathname){
    console.log("About to route a request for: " + pathname);
  };
  
  console.log ("Start Function");
  
  function onRequest(request, response){
    var pathname = url.parse (request.url) .pathname;     
    
    route (pathname);
    
    response.writeHead (200, {"Content-Type": "text / html"});
    
    response.write ("Hello World");      
    
    response.end ();
  };
  http.createServer (onRequest) .listen (3000);    
  console.log ("Server Started.");
};

console.log ("Start Server");

exports.start = start ();

//server.start(router.router);


