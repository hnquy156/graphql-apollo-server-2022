const mongoose = require('mongoose');
const schema = mongoose.Schema;

const AuthorSchema = new schema({
  name: { type: String },
  age: { type: Number },
});

module.exports = mongoose.model('author', AuthorSchema);
