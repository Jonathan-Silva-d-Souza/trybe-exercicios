const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

const mudaParaTech = (event) => {
  const techElement = document.querySelector('.tech');
  techElement.classList.remove('tech');
  event.target.classList.add('tech');
  input.value = '';
}

firstLi.addEventListener('click', mudaParaTech);
secondLi.addEventListener('click', mudaParaTech);
thirdLi.addEventListener('click', mudaParaTech);

input.addEventListener('input', (event) => {
  const techElement = document.querySelector('.tech');
  techElement.innerText = event.target.value;
});

myWebpage.addEventListener('dblclick', () => {
  window.location.replace('https://github.com/Jonathan-Silva-d-Souza');
});

myWebpage.addEventListener('mouseover', (event) => {event.target.style.color = 'red'; });

myWebpage.addEventListener('mouseout', (event) => {event.target.style.color = 'unset'; });

