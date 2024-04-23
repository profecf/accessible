// Agafar del HTML per ID el hamburguer i el contingut del nav
const hamburguer = document.getElementById('hamburger');
const desplegable = document.getElementById('contingut-nav');

let desplegat = false;

// Cuan es faci click al hamburger que executi una funció on aplicará una condició on mirará el boolean i fará una funció o l'altre
hamburguer.addEventListener('click', function() {
    if (desplegat) {
        desplegable.style.display = 'none';
    } else {
        desplegable.style.display = 'block';
    }

    // Fiquem el sentit del boolean al reves
    desplegat = !desplegat;
})

// Agafar del HTML per ID la lupa i el camp de text i el botó del formulari
const lupa = document.getElementById('lupa');
const text = document.getElementById('text');
const button = document.getElementById('button');

let formulariDesplegat = false;

// Cuan es faci click a la lupa que executi una funció on aplicará una condició on mirará el boolean i fara una funció o l'altre
lupa.addEventListener('click', function() {
    if (formulariDesplegat) {
        text.style.display = 'none';
        button.style.display = 'none';
    } else {
        text.style.display = 'block';
        button.style.display = 'block';
    }

    // Fiquem el sentit del boolean al reves
    formulariDesplegat = !formulariDesplegat;
})