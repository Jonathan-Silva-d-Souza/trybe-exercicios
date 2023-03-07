const books = require('./data/books');

const nameAndAge = () => books.map((book) => (
  {
    author: book.author.name,
    age: book.releaseYear - book.author.birthYear,
  }
)).sort((objeto1, objeto2) => objeto1.age - objeto2.age);

module.exports = { nameAndAge };