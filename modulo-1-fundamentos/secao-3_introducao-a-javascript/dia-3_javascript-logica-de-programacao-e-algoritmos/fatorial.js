// atividade 1: fatorial de um numero
let fatorial = 1;
for(let index = 10; index > 0; index -= 1 ){
    fatorial *= index;
}
console.log(fatorial);

// atividade 2: palavra invertida
let word = 'hacker';
let invertida = '';
for(let index = 0; index < word.length; index += 1){
    invertida += word[word.length - 1 - index];
}
// no lugar de tudo q tá no for pode só fazer isso: reverseWord = word.split('').reverse().join('');
console.log(invertida)

// Atividade 3: Utilize a estrutura de repetição for para
//escrever dois algoritmos: um que imprima no console a maior
//palavra desse array e outro que imprima a menor. 
//Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];
let menor = array[0];
for(let indexMaior = 0; indexMaior < array.length; indexMaior += 1){
    if(array[indexMaior].length > maior.length){
        maior = array[indexMaior];
    }
}

for(let indexMenor = 0; indexMenor < array.length; indexMenor += 1){
    if(array[indexMenor].length < menor.length){
        menor = array[indexMenor];
    }
}
console.log(maior);
console.log(menor);



//Um número primo é um número inteiro maior do que 1 que possui somente 
//dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso
//escreva um algoritmo que imprima no console o maior número primo entre 2
//e 50.

let numeroMaior = 0;
for(let index = 2; index <= 50; index += 1){
   let isPrime = true;
    
  for(let index2 = 2; index2 < index; index2 += 1){
    
          if (index % index2 === 0) {
            isPrime = false;
          }
        }
      
        if (isPrime) {
          numeroMaior = index;
        }
      }
      console.log(numeroMaior);
   
    


