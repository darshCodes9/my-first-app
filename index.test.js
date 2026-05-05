// Import supertest - it lets us make fake HTTP requests
const request = require("supertest");

// Import our app
const app = require("./index");

// "describe" groups related tests together
describe("Home Route", function() {

  // "test" defines one individual test
  test("GET / should return welcome message", async function() {
    // Make a fake GET request to our app
    const response = await request(app).get("/");

    // Check the status code is 200 (means OK)
    expect(response.status).toBe(200);

    // Check the response contains our message
    expect(response.body.message).toBe("My first fullstack app");

    // Check the status field says "running"
    expect(response.body.status).toBe("running");
  });

});

describe("Greet Route", function() {

  test("GET /greet/Dhaval should return greeting", async function() {
    const response = await request(app).get("/greet/Dhaval");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello, Dhaval!");
  });

  test("GET /greet/World should return greeting for World", async function() {
    const response = await request(app).get("/greet/World");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello, World!");
  });

});

describe("Health Route", function() {

  test("GET /health should return healthy status", async function() {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("healthy");
  });

});