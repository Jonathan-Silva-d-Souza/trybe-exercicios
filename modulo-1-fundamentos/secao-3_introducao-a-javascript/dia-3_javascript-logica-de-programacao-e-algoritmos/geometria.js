/*
Quadrado de simbolo:
let n = 5;
let asteristico = '*';
let linha = '';
for(let index = 0; index < n; index += 1){
    linha = linha + asteristico;
    console.log('**********')
};
*/

/*
 Triângulo retângulo de simbolo:
let n = 5;
let asteristico = '*';
let linha = '';
for(let index = 0; index < n; index += 1){
    linha = linha + asteristico;
    console.log(linha)
};


let n = 5;
let asteristico = '*';
let linha = '';
let linhaInversa = n - 1
for(let index = 0; index < n; index += 1){
    for(let colunaIndex = 0; colunaIndex < n; colunaIndex += 1){
        if(colunaIndex < linhaInversa){
            linha = linha + ' ';
        } else {
            linha = linha + asteristico;
        }
    }
    console.log(linha);
    linha = '';
    linhaInversa -= 1;
};

// Piramide
let n = 5;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};

// Piramide sem asteristico no meio
let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}
*/

let divisors = 1;
let numberToCheck = 97;

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) { divisors += 1;
    }
}
if (divisors === 2) {
    console.log(numberToCheck + ' é primo');
} else { 
    console.log(numberToCheck + ' não é primo');
}