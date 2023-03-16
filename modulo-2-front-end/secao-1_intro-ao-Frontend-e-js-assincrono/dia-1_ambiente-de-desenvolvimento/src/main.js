import validator from 'validator';
import './style.css';

const input = document.getElementById('value');
const button = document.getElementById('button');
const p = document.getElementById('answer');
const option = document.getElementById('option');

button.addEventListener('click', (e) => {
  e.preventDefault();
  const campos = {
    cpf: validator.isTaxID(input.value, 'pt-BR'),
    email: validator.isEmail(input.value),
  };
  p.innerHTML = `A validação retornou ${campos[option.value]}`;
});
