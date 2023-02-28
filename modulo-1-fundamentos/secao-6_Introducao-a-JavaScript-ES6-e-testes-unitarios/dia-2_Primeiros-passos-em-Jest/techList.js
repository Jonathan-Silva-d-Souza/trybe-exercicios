const techList = (arrayTecnologias, name) => {
  if (arrayTecnologias.length === 0) return 'Vazio!';
  const sortedArray = arrayTecnologias.sort();
  const technologyList = [];
  for (let index = 0; index < sortedArray.length; index += 1) {
    technologyList.push({
        tech: sortedArray[index],
        name,
    });
  }
  return technologyList;
}

module.exports = techList;