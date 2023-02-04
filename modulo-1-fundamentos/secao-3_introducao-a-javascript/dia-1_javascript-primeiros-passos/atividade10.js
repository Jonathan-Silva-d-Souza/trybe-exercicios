// Passo 1: Usar if/else inicie com dois valores em duas constantes diferentes:
// o custo de um produto e seu valor de venda.
// Passo 2: criar as 2 constantes, uma pra valor do produto e outra seu valor de venda 
// Passo 3: calcular quanto de lucro (valor de venda, descontado o custo do produto) tera
// ao vender 1000 produtos
// Passo 4: custo do produto -20% de imposto
// Passo 5: se o valor de entrada for menor que 0 da erro
// Passo 6: o lucro é a subtração do valor de venda pelo custo do produto e os 20% de imposto
// valorCustoTotal = valorCusto + impostoSobreOCusto;
// lucro = valorVenda - valorCustoTotal (lucro de um produto);

const valorCusto = 1;
const valorVenda = 2;

const impostoSobreOCusto = 20/100;

if(valorCusto >= 0 && valorVenda >= 0) {
    let valorCustoTotal = valorCusto * impostoSobreOCusto;
    let lucro = (valorVenda - valorCustoTotal) * 1000;
    console.log(lucro) 
} else {
    console.log("Error, os valores não podem ser negativos");
};