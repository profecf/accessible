const carousel = document.getElementById('carousel');
const images = document.querySelectorAll('#carousel img');
let imatgeActual = 0;

function mostrarImage(index) {
  const transformValue = -index * 100 + '%';
  carousel.style.transform = 'translateX(' + transformValue + ')';
}

function seguentImage() {
  imatgeActual = (imatgeActual + 1) % images.length;
  mostrarImage(imatgeActual);
}

function anteriorImage() { 
  imatgeActual = (imatgeActual - 1 + images.length) % images.length;
  mostrarImage(imatgeActual);
}

setInterval(seguentImage, 3000);  // Cambiar de imatge cada 3 seg 