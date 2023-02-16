let map = 'mapa';

function initMap() {
  const posicionInicio = {
    lat: -25.363,
    lng: 131.044,
  };

  const posicion_N = {
    lat: 40.72970446022922,
    lng: -73.99491169046163,
  };

  const posicion_T = {
    lat: 39.961923521287524,
    lng: -4.831534428745111,
  };

  const posicion_Z = {
    lat: 42.67892854496914,
    lng: -2.0670790551973743,
  };

  map = new google.maps.Map(document.getElementById('map'), {
    center: posicionInicio,
    zoom: 4,
  });

  const marker = new google.maps.Marker({
    position: posicionInicio,
    map: map,
    title: 'Posicion inicial',
  });

  const nuevaYork = new google.maps.Marker({
    position: posicion_N,
    map: map,
    title: 'Nueva York',
  });

  const talavera = new google.maps.Marker({
    position: posicion_T,
    map: map,
    title: 'Talavera',
  });

  const zubielqui = new google.maps.Marker({
    position: posicion_Z,
    map: map,
    title: 'Zubielqui',
  });
}

window.initMap = initMap;
