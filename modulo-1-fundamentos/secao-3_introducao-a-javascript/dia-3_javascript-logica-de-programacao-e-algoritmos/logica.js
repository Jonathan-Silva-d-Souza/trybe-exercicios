// Atividade 1: encontre um index atráves de um valor de um elemento
// 1 - let numeros e let valorigual
// 2 - if/ else
// 3 - indexof
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let valorIgual = 3;

if (numbers.indexOf(valorIgual) >= 0) {
  console.log(numbers.indexOf(valorIgual));
} else {
  console.log('Elemento não encontrado no array');
}


// Atividade 2: retorne os números ímpares
// 1 - let com um array vazio
// 2 - for
// 3 - if dentro do for pra selecionar numero ímpar dentro do array entre 1 e 50
// 4 - push
// 5 - escrever na tela o array

let numeros = [];
for(let index = 1; index <= 50 ; index += 1){
    if(index % 2 === 1){
        numeros.push(index)
    }
    
}
console.log(numeros);

// Atividade 3: números divisiveis por 3
// 1 - let inicial
// 2 - let final
// 3 - if no caso de ter mais de 50 números divisiveis por 3
// 4 - se tiver: console.log("Há 50 ou mais números divisiveis por 3")
// 5 - else: console.log("Sequência muito pequena.")

let inicial = 1;
let final = 200;
let contagem = 0;
for(let index = inicial; index <= final; index += 1){
    if(index % 3 === 0){
        contagem += 1;
    }
}
    if(contagem < 50){
        console.log("Sequência muito pequena.")

    }else{
        console.log("Há 50 ou mais números divisiveis por 3")
    }

//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.




// 5 
//Crie um algoritmo que recebe a idade de Carolzita , Flavio e Noel e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.
