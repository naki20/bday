const express = require('express');
const app = express();
const path = require('path');
<<<<<<< HEAD
const port = process.env.PORT || 3000;
=======
>>>>>>> bdb6709948789836c7950b6c360151d607c863c4

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
<<<<<<< HEAD
  const name = "Chester";
  res.render('message', { name: name });
});

// ✅ Only ONE server start
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
=======
  const name = "Chester"; // You can dynamically pass the name if you want
  res.render('message', { name: name }); // Passing name to the message.ejs view
});

// Start the server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
>>>>>>> bdb6709948789836c7950b6c360151d607c863c4
