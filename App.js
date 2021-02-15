/* MK first try
*/
var http = require('http');
//const url = require("url");

const hostname = '127.0.0.1';
const port = 3000;

function start(){
  function onRequest(request, response){
    var pathname = url.parse (request.url) .pathname;      
    console.log ("Request for" + pathname + "received.");
    
    response.writeHead (200, {"Content-Type": "text / html"});
    
    response.write ("Hello World");      
    
    response.end ();
  };
  http.createServer (onRequest) .listen (port);    
  console.log ("Server Started.");
};

exports.start = start;