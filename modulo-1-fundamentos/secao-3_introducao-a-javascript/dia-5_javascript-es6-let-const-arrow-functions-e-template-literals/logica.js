// No projeto vai cair parecido com isso:
// Segue exatamente o que o projeto pede, passo a passo, se pedir pra criar
// função primeiro cria a função pra depois ler o resto do q pede


// Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer.
// Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato:
// Fórmulas: perimetro = (2 * base) + (2 * altura) area = base * altura

function calculaAreaPerimetro (base, altura) {
    let resultado = {
        perimetro: (2 * base) + (2 * altura),
        area: base * altura,
      };
      
     return resultado;
};
console.log(calculaAreaPerimetro(2,2))

    
 // Exercício 2 - Crie uma função que, dado um array de números inteiros,
// retorne a quantidade de números pares e ímpares no formato:
let numbers = [1,2,3,4,5,6,7,8,9,10];
function numerosParesImpares (array){ 
    let par = [];
    let impar = [];
    for(const number of array){
        if(number % 2 === 0){
            par.push(number);
        }else{
            impar.push(number);
        }
    }
    let numeros = {
    pares: par.length,
    ímpares: impar.length,
  };
return numeros;


};
console.log(numerosParesImpares(numbers));

//Exercício3-Crie uma função que receba uma string word e outra string ending.
// Verifique se a string ending é o final da string word.
// Considere que a string ending sempre será menor que a string word.
// Dica: Use o split.

// valor de teste: ‘trybe’ e ‘be’
// valor esperado no retorno da função: true
// verificaFimPalavra(‘trybe’, ‘be’);
// Retorno esperado: true
// verificaFimPalavra(‘joaofernando’, ‘fernan’);
// Retorno esperado: false;

const verificaString = (palavra, ending) => {
    if(palavra.endsWith(ending)) {
        return true;
    }
    return false;
}
console.log(verificaString("trybe" , "be"))
console.log(verificaString("joaofernando" , "fernan"))