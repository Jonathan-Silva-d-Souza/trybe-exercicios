const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const estudanteRespostas = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparaRespostas = (gabarito, estudanteRespostas) => {
  if (gabarito === estudanteRespostas) return 1;
  if (estudanteRespostas === 'N.A') return 0;
  return -0.5;
};

const countPoints = (gabarito, estudanteRespostas, action) => {
  let contador = 0;
  for (let index = 0; index < gabarito.length; index += 1) {
    const actionReturn = action(gabarito[index], estudanteRespostas[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} pontos`;
};

console.log(countPoints(gabarito, estudanteRespostas, comparaRespostas));