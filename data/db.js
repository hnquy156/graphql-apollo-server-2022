const Author = require('../model/author');
const Book = require('../model/book');

const mongoDataMethods = {
  getAllBooks: async (condition = {}) => await Book.find(condition),
  getBookById: async (id) => await Book.findById(id),
  createBook: async (data) => {
    const newBook = new Book(data);
    return await newBook.save();
  },

  getAllAuthors: async (condition = {}) => await Author.find(condition),
  getAuthorById: async (id) => await Author.findById(id),
  createAuthor: async (data) => {
    const newAuthor = new Author(data);
    return await newAuthor.save();
  },
};

module.exports = mongoDataMethods;
