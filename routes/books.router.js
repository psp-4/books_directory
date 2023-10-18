// Importing necessary modules
const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books.controller');

// Routes for CRUD operations
router.get('/', booksController.getAllBooks);
router.post('/', booksController.addBook);
router.put('/:id', booksController.updateBook);
router.delete('/:id', booksController.deleteBook);

module.exports = router;
