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

// Only start the server if this file is run directly
// If it's imported by tests, we skip this part
if (require.main === module) {
  app.listen(PORT, function() {
    console.log("Server is running at http://localhost:" + PORT);
  });
}

// Export the app so tests can import it
module.exports = app;