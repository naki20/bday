const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for home page
app.get('/', (req, res) => {
  res.render('index');
});

// Route for stickers page
app.get("/stickers", (req, res) => {
  res.render("stickers");
});

// Route for message page (EJS)
app.get('/message', (req, res) => {
  const name = "Chester";const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for home page
app.get('/', (req, res) => {
  res.render('index');
});

// Route for stickers page
app.get("/stickers", (req, res) => {
  res.render("stickers");
});

// Route for message page (EJS)
app.get('/message', (req, res) => {
  const name = "Chester";
  res.render('message', { name });
});

// ✅ Only ONE server start
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
  res.render('message', { name: name });
});

// ✅ Only ONE server start
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
