// Import the Express.js library
const express = require("express");
// Create an Express application
const app = express();
// Define the port on which the server will listen
const port = 8000;

// Define a route for the root URL ("/") and send a response
app.get("/", (req, res) => {
  // Serve the index.html file when the root URL is accessed.
  // res.sendFile(__dirname + "/index.html");
  // Instead, send a simple HTML response to the client
  res.send("<h1>This is home page</h1>");
});

// Define a route for the "/about" URL and send a response
app.get("/about", (req, res) => {
  // Send an HTML response for the "about" page
  res.send("<h1>This is the about page</h1>");
});
// Define a route for the "/contact" URL and send a response
app.get("/contact", (req, res) => {
  // Send an HTML response for the "contact" page, including a phone number
  res.send(
    "<h1>This is the contact page</h1><h2>My number is 9999999999999999999</h2>"
  );
});
// Define a route for the "/date" URL and send a response with the current date
app.get("/date", (req, res) => {
  // Send an HTML response for the "date" page, including the current date
  res.send(`<h1>This is the date page</h1><h2>${new Date()}</h2>`);
});

// Define a dynamic route that takes an "id" parameter and send a personalized response
app.get("/welcome/:id", (req, res) => {
  // Send a personalized welcome message using the "id" parameter from the URL
  res.send(`<h1>Welcome ${req.params.id}</h1>`);
});

// Start the Express server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
