const { info, printMessage } = require('./printMessage.js');

describe('Caso de teste para a função printMessage', () => {
  it('teste objeto info', () => {
    expect(info).toHaveProperty('personagem');
  });
});

describe('Testa a função printMessage', () => {
  it('Testa printMessage', () => {
    expect(printMessage(info)).toMatch('Boas vindas,');
    expect(printMessage(info)).toMatch(info.personagem);
  });
});

describe('Fluxo de exceções para a função printMessage', () => {
  it('teste fluxo de exceção função printMessage', () => {
    expect(() => printMessage('Margarida')).toThrow('objeto inválido');
  });
});