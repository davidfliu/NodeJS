var http = require("http");

http.createServer(function (request, response)) {

	// Send HTTP header
	// HTTP status: 200: Ok
	// Content Type: text/plain
	response.writeHead(200, {'Content-Type': "text/plain'});

	//Send response as "Hello World"

