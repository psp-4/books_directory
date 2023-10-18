// Importing Book Class to follow the Book Schema
const Book = require('../models/books.model');

// Initializing Books array
const books = [];

// Fetching all books
const getAllBooks = (req, res) => {
    res.json(books);
}

// Book creation logic
const addBook = (req, res) => {
    const { title, author } = req.body;
    const newBook = new Book(books.length + 1, title, author);
    books.push(newBook);
    res.status(201).json(newBook);
}

// Books updation logic
const updateBook = (req, res) => {
    const bookId = parseInt(req.params.id);
    const { title, author } = req.body;

    //Checking if book exists in the current collection
    const bookIndex = books.findIndex(book => book.id === bookId);
    if (bookIndex === -1) {
        return res.status(404).json({ message: 'Book not found' });
    }
    
    // If book exists update as per data
    const updatedBook = { ...books[bookIndex], title, author };
    books[bookIndex] = updatedBook;
    res.json(updatedBook);
}

//  Book deletion logic
const deleteBook = (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(book => book.id === bookId);
    
    //Checking if book exists in the current collection
    if (bookIndex === -1) {
        return res.status(404).json({ message: 'Book not found' });
    }
    
    books.splice(bookIndex, 1);
    res.json({ message: 'Book deleted' });
}

module.exports = {
    getAllBooks,
    addBook,
    updateBook,
    deleteBook
};
