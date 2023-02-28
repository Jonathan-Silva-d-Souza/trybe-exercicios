const techList = require('./techList.js');

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Jonathan')).toEqual([
        {
            tech: 'CSS',
            name: 'Jonathan'
        },
        {
          tech: 'HTML',
          name: 'Jonathan'
        },
        {
          tech: 'JavaScript',
          name: 'Jonathan'
        },
        {
          tech: 'Jest',
          name: 'Jonathan'
        },
        {
          tech: 'React',
          name: 'Jonathan'
        }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Jonathan')).toBe('Vazio!');
  });
});
module.exports = techList;