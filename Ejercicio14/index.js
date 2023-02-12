$('#btn').click(() => {
  console.log('Hola, estoy utilizando jQuery');
});

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  alert('Todo funciona bien!');
});
