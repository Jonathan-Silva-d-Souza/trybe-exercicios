// passo 1: Usar if/else
// passo 2: 3 numeros constantes
// passo 3: true se um dos 3 for par
// passo 4: else false

let n1 = 5;
let n2 = 7;
let n3 = 9;
let resultado = false;
if(n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0 ){
    resultado = true;
};
console.log(resultado);