// Requisito 1:

const girafa = true;
const elefante = true;
const macaco = false;
const compareTrue = (animal1, animal2) => {
  if (animal1 === true && animal2 === true) {
    return true;
  } return false;
};

// Requisito 2:
 
const splitSentence = (frase) => {
  let arrayString = frase.split(' ');
  arrayString.join(', ');
  return arrayString;
};

// Requisito 3:

const concatName = (array) => {
  let ultimo = array[array.length -1];
  let primeiro = array[0];
  return `${ultimo}, ${primeiro}`;
};

// Requisito 4:

const footballPoints = (wins, ties) => {
  let vitoria = wins * 3;
  let empate = ties;
  let resultado = vitoria + empate;
  return resultado;
};

// Requisito 5:

const highestCount = (arrayNumeros) => {
  let count = 0;
  let maiorNumero = 0;
  maiorNumero = Math.max(...arrayNumeros);
  for (let index = 0; index < arrayNumeros.length; index += 1) {
    if (maiorNumero === arrayNumeros[index]) {
        count += 1;
    }
  }
  return count;
};

// Requisito 6:

const calcTriangleArea = (base, height) => (base * height) / 2;
const calcRectangleArea = (base, height) => base * height;

const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  } 
  if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  } return `Não foi possivel fazer o cálculo, insira uma forma geométrica válida`;
};

// Requisito 7:

const catAndMouse = (mouse, cat1, cat2) => {
  if (Math.abs(mouse - cat2) === Math.abs(mouse - cat1)) {
    return 'os gatos trombam e o rato foge';
  }
  if (mouse - cat2 > mouse - cat1) {
    return 'cat2'
  } return 'cat1';
};

// Requisito 8:

const fizzBuzz = (arrayNumeros) => {
  let arrayDeString = [];
  for (let i = 0; i < arrayNumeros.length; i += 1) {
    if (arrayNumeros[i] % 3 === 0 && arrayNumeros[i] % 5 === 0) {
        arrayDeString.push('fizzBuzz');
    } else if (arrayNumeros[i] % 3 === 0) {
        arrayDeString.push('fizz');
    } else if (arrayNumeros[i] % 5 === 0) {
        arrayDeString.push('buzz');
    } else {
        arrayDeString.push('bug!');
    }
  }
  return arrayDeString;
}

// Requisito 9:

const encode = (palavra) => {
  palavra = palavra.replaceAll('a', '1');
  palavra = palavra.replaceAll('e', '2');
  palavra = palavra.replaceAll('i', '3');
  palavra = palavra.replaceAll('o', '4');
  palavra = palavra.replaceAll('u', '5');
  return palavra;
}

const decode = (palavra) => {
  palavra = palavra.replaceAll('1', 'a');
  palavra = palavra.replaceAll('2', 'e');
  palavra = palavra.replaceAll('3', 'i');
  palavra = palavra.replaceAll('4', 'o');
  palavra = palavra.replaceAll('5', 'u');
  return palavra;
}

// Requisito 10:

const techList = (array, nome) => {
  let tecnologia = [];
  if (array.length === 0 || nome.length === 0) {
    return tecnologia;
  }
  for (let index = 0; index < array.length; index += 1) {
    tecnologia.push({
        tech: array[index],
        name: nome, 
    });
  }
  return tecnologia;
}

// Requisito 11:

const arrayEmObjetoOcorrencias = (array) => {
  const objArray = {};
  for (const num of array) {
    if (objArray[num] === undefined) {
      objArray[num] = 1;
    } else {
      objArray[num] += 1;
    }
  }
  return objArray;
};

const numeroRepete = (obj) => {
  for (const num in obj) {
    if (obj[num] > 2) {
      return false;
    }
  }
  return true;
};

const verificaDigitosInvalidos = (array) => {
  let mensagem = '';
  const max = Math.max(...array);
  const min = Math.min(...array);
  if (max > 9 || min < 0) {
    mensagem = 'não é possível gerar um número de telefone com esses valores';
  }
  const obj = arrayEmObjetoOcorrencias(array);
  if (numeroRepete(obj)) {
    mensagem = 'não é possível gerar um número de telefone com esses valores';
  }
  return mensagem;
}

const verificaErrosArrayPhone = (array) => {
  let mensagem = '';
  if (array.length !== 11) {
    mensagem = 'Array com tamanho incorreto.';
  } else {
    mensagem = verificaDigitosInvalidos(array);
  }
  return mensagem;
}

const generatePhoneNumber = (array) => {
  let resultado = verificaErrosArrayPhone(array);
  if (resultado.length < 1) {
    let strModelo = '(xx) xxxxx-xxxx';
    for (const digito of array) {
      strModelo = strModelo.replace('x', digito);
    }
    resultado = strModelo;
  }
  return resultado;
}



// Requisito 12:

const triangleCheck = (lineA, lineB, lineC) => {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  } if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    return true;
  } return false;
}

// Requisito 13:

const hydrate = (bebida) => {
  const arrayNumeros = bebida.match(/\d+/g);
  let numeroDeBebidas = 0;
  for (const num of arrayNumeros) {
    numeroDeBebidas += Number(num);
  }
  let agua = `${numeroDeBebidas} `;
  agua += numeroDeBebidas > 1 ? 'copos de água' : 'copo de água';
  return agua;
};
