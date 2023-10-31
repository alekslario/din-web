// Import express and ejs
var express = require("express");
var ejs = require("ejs");
// Create the express application object
const app = express();
const port = 8000;

var shopData = {
  shopName: "Drinks R Us",
  productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
};
// Set the directory where Express will pick up HTML files
// __dirname will get the current directory
app.set("views", __dirname + "/views");
// Tell Express that we want to use EJS as the templating engine
app.set("view engine", "ejs");
// Tells Express how we should process html files
// We want to use EJS's rendering engine
app.engine("html", ejs.renderFile);
// Handle our routes
app.get("/", function (req, res) {
  res.render("index.html", shopData);
});
app.get("/about", function (req, res) {
  res.render("about.html");
});
app.get("/search", function (req, res) {
  res.render("search.html");
});
// Start the web app listening
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
