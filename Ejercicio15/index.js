const nombre = 'Aitor';
const apellido = 'Cachero';

const objeto = {
  nombre,
  apellido,
};

// sessionStorage.setItem('objeto', JSON.stringify(objeto));
// localStorage.setItem('objeto', JSON.stringify(objeto));

const fecha = new Date();
// document.cookie = `objeto=${JSON.stringify(objeto)};expires=${new Date(fecha.getTime() + 2 * 60000)}`;
