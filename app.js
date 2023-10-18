const express = require('express');
const app = express();

// Importing books.router.js as booksRoute
const booksRoute = require('./routes/books.router');

// PORT declaration
const PORT = process.env.PORT || 3000;

// Middleware for JSON request/response
app.use(express.json());

// Use books route
app.use('/books', booksRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});
