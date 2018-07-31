var http = require("http");

var PORT1= 7000;

var PORT2= 7500;

function handleRequestPort1(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("You're Great: " + request.url);
  }

function handleRequestPort2(request, response) {
    response.end("You're Terrible " + request.url);
}
  
  // Use the Node HTTP package to create our server.
  // Pass the handleRequest function to empower it with functionality.
  var server1 = http.createServer(handleRequestPort1);

  var server2 = http.createServer(handleRequestPort2);
  
  // Start our server so that it can begin listening to client requests.
  server1.listen(PORT1, function() {
  
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT1);
  });

  server2.listen(PORT2, function() {
      console.log("Server listening on: http://localhost:" + PORT2);
  })
  
