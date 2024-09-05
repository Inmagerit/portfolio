const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();
const port = 3000;


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'testone',
});


db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }

  console.log('Connected to MySQL database');
});


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/pageTwo', (req, res) => {
    
    res.sendFile(path.join(__dirname, 'public', 'pageTwo.html'));
  });
  

app.get('/clients', (req, res) => {
  const query = 'SELECT * FROM clients';

  
  db.query(query, (err, result) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    // Check if result is empty or not an array
    if (!Array.isArray(result) || result.length === 0) {
      res.status(404).send('No clients found');
      return;
    }

    // Send the result as JSON
    res.json(result);
  });
});
app.get('/cars', (req, res) => {
    const query = 'SELECT * FROM car_models';
  
    // Execute the query with an arrow function for the callback
    db.query(query, (err, result) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      
      if (!Array.isArray(result) || result.length === 0) {
        res.status(404).send('No cars found');
        return;
      }
  
      
      res.json(result);
    });
  });

// Other routes or queries can be added here

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
