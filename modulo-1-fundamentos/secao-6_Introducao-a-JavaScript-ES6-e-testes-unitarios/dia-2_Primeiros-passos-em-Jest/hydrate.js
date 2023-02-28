const hydrate = (bebida) => {
  const splitBebida = bebida.split('');
  let coposDeAgua = 0;
  for (let index = 0; index < splitBebida.length; index += 1) {
    const parsedCharacter = parseInt(splitBebida[index]);
    if (parsedCharacter) {
        coposDeAgua += parsedCharacter;
    }
  }
  let copos = 'copo';
  if (coposDeAgua > 1) {
    copos = 'copos';
  }
  return `${coposDeAgua} ${copos} de água`;
};
module.exports = hydrate;