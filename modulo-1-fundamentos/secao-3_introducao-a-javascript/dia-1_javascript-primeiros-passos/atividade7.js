// passo 1: Usar if/else
// passo 2: converter nota de 0 a 100 em A a F
// passo 3: 
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// passo 4: O código deve retornar uma mensagem de erro e encerrar se a nota
// passada for menor que 0 ou maior que 100.

let nota = 50;

if(nota < 0 || nota > 100){
    console.log('ERRO, nota inválida');
} else if(nota >= 90){
    console.log('A');
} else if(nota >= 80) {
    console.log('B');
} else if(nota >= 70){
    console.log('C');
} else if(nota >= 60){
    console.log('D');
} else if(nota >= 50){
    console.log('E');
} else{
    console.log('F');
}