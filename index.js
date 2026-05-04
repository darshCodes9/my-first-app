const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/", function(request, response) {
  response.json({
    message: "Welcome to my first app!",
    status: "running"
  });
});

app.get("/greet/:name", function(request, response) {
  const name = request.params.name;
  response.json({
    message: "Hello, " + name + "!",
    timestamp: new Date().toISOString()
  });
});

app.get("/health", function(request, response) {
  response.json({
    status: "healthy",
    uptime: process.uptime() + " seconds"
  });
});

app.listen(PORT, function() {
  console.log("Server is running at http://localhost:" + PORT);
  console.log("Try these URLs in your browser:");
  console.log("  http://localhost:3000/");
  console.log("  http://localhost:3000/greet/Dhaval");
  console.log("  http://localhost:3000/health");
});