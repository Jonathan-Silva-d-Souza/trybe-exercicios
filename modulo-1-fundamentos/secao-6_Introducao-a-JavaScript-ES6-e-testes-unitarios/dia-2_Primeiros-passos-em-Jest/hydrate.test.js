const hydrate = require('./hydrate.js');

describe('Testa a função hydrate', () => {
  it('Testa se hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });

  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });

  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 3 copos de vinho')).toBe('9 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
  });
});