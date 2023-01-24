let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/*
for(let index = 0; index < numbers.length; index += 1)
console.log(numbers[index]) pt 1: mostrar na tela a lista
*/


/* let soma = 0;
for(let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}
console.log(soma); pt 2: somar todo o conteúdo do array */

 /* let media = 0;
for(let index = 0; index < numbers.length; index += 1) {
    media += numbers[index]
}
media = media / numbers.length
if(media > 20){
console.log("Valor maior que 20");
} else{
    console.log("Valor menor ou igual a 20")
} 
parte 3 e 4: media aritmetica da lista e valor menos ou igual a 20*/ 

/*
let maiorNumero = numbers[0];
for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] > maiorNumero){
        maiorNumero = numbers[index];
    }
}
console.log(maiorNumero); 
pt 5: maior numero do array
*/

/*
let impar = 0;
for(let index = 0; index < numbers.length; index +=1){
    if(numbers[index] % 3 === 0){
        impar += 1; 
    }
}
    if(impar === 0){
        console.log("Nenhum numero ímpar encontrado");
    } else{
        console.log(impar);
    }
pt 6: Quantos itens do array são impares
    */

/*
let menorValor = numbers[0];
for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] < menorValor){
        menorValor = numbers[index] ;
    }  
}
console.log(menorValor);

pt 7: menor valor do array
*/

//pt 8: escrevendo e adicionando de 1 a 25 no nosso array vazio
let numero = [];
for(let index = 1; index <= 25; index +=1 ){
   numero.push(index);
}
//pt 9: dividindo os valores anima por 2
for(let index = 0; index < numero.length; index +=1){
   console.log(numero[index] / 2); 
};








