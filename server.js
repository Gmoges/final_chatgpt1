const express = require('express');
const bodyParser = require('body-parser');
const readlineSync = require('readline-sync');
const app = express();
const port = 2000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the form page (ensure you have a form.html file in the public folder)
app.get('/', (req, res) => {
  res.sendFile(__dirname + 'https://gmoges.github.io/final_chatgpt1/front/form.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
  // Get form data
  const { name, email, age } = req.body;

  // Process form data (output to terminal)
  console.log(`Received form data:`);
  console.log('\nForm Data Submitted:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Age: ${age}`);

  // Respond back to the client
  res.send('Form submitted successfully! Check the terminal for data.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
