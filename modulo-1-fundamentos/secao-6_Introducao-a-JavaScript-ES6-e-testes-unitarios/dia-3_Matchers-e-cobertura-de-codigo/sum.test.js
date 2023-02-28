const sum = require('./sum.js')

describe('Testa função sum', () => {
  it('deve retornar o resultado da soma', () => {
    expect(sum(2,2)).toBe(4);
    expect(sum(0,0)).toBe(0);
    expect(sum(-5,5)).toBe(0);
  });
  it('deve disparar um erro caso receba um parâmetro diferente de numero', () => {
    expect(() => sum(4, '5')).toThrow();
    expect(() => sum(4,'5')).toThrow('Parâmetros devem ser numeros');
  });
});