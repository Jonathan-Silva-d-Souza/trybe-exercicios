const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
// função para descobrir qual o nome do author que nasceu no ano 1947:

const expectResult = 'Stephen King';
const authorBornIn1947 = () => {
  return books.find((book) => book.author.birthYear === 1947).author.name;
};

// função que retorna o nome do livro que tem a menor quantia de caracteres:

const smallerName = () => {
  let nameBook;
  books.forEach((book) => {
    if (!nameBook || book.name.length > nameBook.length) {
        nameBook = book.name;
    }
  });
  return nameBook;
}

// função que encontra o primeiro livro que possui 26 caracteres:

const getNamedBook = () =>  books.find((book) => book.name.length === 26);

// função que retorna true se todas as pessoas autoras nasceram no século XX, ou false, caso contrário:

const everyoneWasBornOnSecXX = () => {
  return books.filter((book) => 
    book.author.birthYear >= 1901 && book.author.birthYear <= 2000);
};

// função que retorne true, se algum livro tiver sido lançado na década de 80, e false, caso contrário:

const resultadoEsperado = true;
const someBookWasReleaseOnThe80s = () => {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
};

console.log(someBookWasReleaseOnThe80s());