const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 5000;
//Prevenir crossorigin
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Puedes restringir esto a tu dominio específico en producción
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
// Set up MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'testone',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Define route to retrieve books
app.get('/books', (req, res) => {
  connection.query('SELECT * FROM bookcatalog', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});
app.get('/posts', async (req, res) => {
  try {
    // Extract pagination parameters from the request query
    const page = parseInt(req.query._page) || 1; // default to page 1 if not provided
    const limit = parseInt(req.query._limit) || 10; // default to limit 10 if not provided

    // Fetch data from JSONPlaceholder API with pagination parameters
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);

    // Extract the posts from the response
    const posts = response.data;

    // Send the posts as a JSON response
    res.json(posts);
  } catch (error) {
    // Handle errors
    console.error('Error fetching posts:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
