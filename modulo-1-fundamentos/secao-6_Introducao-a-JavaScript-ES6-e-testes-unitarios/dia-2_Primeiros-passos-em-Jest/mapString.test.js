const { encode, decode } = require('./mapString.js');
const mapString = require('./mapString.js')

describe('testes das funções encode e decode', () => {
  it('testa se encode é definida', () => {
  expect(encode).toBeDefined();
  });

  it('testa se encode é função', () => {
    expect(typeof encode).toEqual('function');
  });

  it('testa de decode é definida', () => {
    expect(decode).toBeDefined();
  });

  it('testa de decode é função', () => {
    expect(typeof decode).toEqual('function');
  });

  it('testa se as vogais são convertidas em numeros na função encode', () => {
    expect(encode('Programador programa')).toBe('Pr4gr1m1d4r pr4gr1m1');
    expect(encode('aeiou')).toBe('12345');
  });

  it('testa se os numeros são convertidos em letras na função decode', () => {
    expect(decode('Pr4gr1m1d4r pr4gr1m1')).toBe('Programador programa');
    expect(decode('12345')).toBe('aeiou');
  });

  it('testa se a string retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('Programador programa').length).toEqual(20);
    expect(decode('Pr4gr1m1d4r pr4gr1m1').length).toEqual(20);
  });

});