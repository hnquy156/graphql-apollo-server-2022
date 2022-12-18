const mongoose = require('mongoose');
const schema = mongoose.Schema;

const BookSchema = new schema({
  name: { type: String },
  genre: { type: String },
  authorId: { type: String },
});

module.exports = mongoose.model('book', BookSchema);
