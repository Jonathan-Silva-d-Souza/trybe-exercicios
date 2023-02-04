// passo 1: 4 variaveis: salario bruto, salario liquido, aliquotaINSS e aliquotaIR
// passo 2: criar 2 if/else 1 pra INSS outro pra IR

// passo 3: if/else do INSS (Instituto Nacional do Seguro Social)
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS:
// ex: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// if Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

// passo 4: if/else do IR (Imposto de Renda)
// Para pegar o valor do IR, temos um salário-base que é o salario bruto - aliquotaINSS
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

// passo 5: O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45
// (salário-base - valor IR) = R$ 2.612,55.

const salarioBruto = 3000;

let aliquotaINSS;
let aliquotaIR;

if(salarioBruto < 1556.95){
    aliquotaINSS = salarioBruto * 8/100;
} else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    aliquotaINSS = salarioBruto * 9/100;
} else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquotaINSS = salarioBruto * 11/100;
} else {
    aliquotaINSS = 570,88;
}

const salarioBase = salarioBruto - aliquotaINSS;
if(salarioBase <= 1903,98){
    aliquotaIR = 0;
} else if(salarioBase > 1903,98 && salarioBase <= 2826.65){
    aliquotaIR = (salarioBase * 7.5/100) - 142.80;
} else if(salarioBase > 2826.65 && salarioBase <= 3751.05){
    aliquotaIR = (salarioBase * 15/100) - 354.80;
} else if(salarioBase > 3751.05 && salarioBase <= 4664.68){
    aliquotaIR = (salarioBase * 22.5/100) - 636.13;
} else {
    aliquotaIR = (salarioBase * 27.5/100) - 869.36;
}

const salarioLiquido = salarioBase - aliquotaIR;
console.log(`Salario: ${salarioLiquido}`)