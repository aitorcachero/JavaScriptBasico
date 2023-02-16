const parrafos = document.querySelectorAll('.parrafo');
const secciones = document.querySelectorAll('.seccion');
const basura = document.querySelectorAll('.imagen');

parrafos.forEach((parrafo) => {
  parrafo.addEventListener('dragstart', (event) => {
    console.log('Estoy arrastrando el parrafo: ' + parrafo.innerText);
    parrafo.classList.add('dragging');
    event.dataTransfer.setData('id', parrafo.id);
  });

  parrafo.addEventListener('dragend', () => {
    console.log('He terminado de arrastrar el parrafo: ' + parrafo.innerText);
    parrafo.classList.remove('dragging');
  });
});

secciones.forEach((seccion) => {
  seccion.addEventListener('dragover', (event) => {
    event.preventDefault();
    console.log('Drag Over');
  });

  seccion.addEventListener('drop', (event) => {
    console.log('Drop');
    const id_parrafo = event.dataTransfer.getData('id');
    const parrafo = document.getElementById(id_parrafo);
    seccion.appendChild(parrafo);
  });
});

basura.forEach((basura) => {
  basura.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  basura.addEventListener('drop', (event) => {
    const id_parrafo = event.dataTransfer.getData('id');
    document.getElementById(id_parrafo).remove();
  });
});
