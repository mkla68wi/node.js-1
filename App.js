/* MK first try
*/
var http = require('http');
var url = require("url");

const hostname = '127.0.0.1';
const port = 3000;

function route (pathname){
  console.log("About to route a request for: " + pathname);
};

function start(route){
  /*function route (pathname){
    console.log("About to route a request for: " + pathname);
  };*/
  exports.route = route;
  console.log ("Start Function");
  
  function onRequest(request, response){
    var pathname = url.parse (request.url) .pathname;      
    //console.log ("Request for " + pathname + " received.");
    
    route (pathname);
    
    response.writeHead (200, {"Content-Type": "text / html"});
    
    response.write ("Hello World");      
    
    response.end ();
  };
  http.createServer (onRequest) .listen (3000);    
  console.log ("Server Started.");
};

console.log ("Start Server");
//exports.route = route;
exports.start = start ();
