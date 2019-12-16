console.log('test');

var http = require('http');

http.createServer(function (request, response){
    response.writeHead(200,{'content-type':'text/html'});
    response.write('Hello world');
    response.end();

}).listen(8889);

console.log('server start');

console.log('test2');