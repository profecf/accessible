const widgets = document.getElementById('desplegable-widgets');
const contingutWidgets = document.getElementById('desplegable-contingut-widgets');

let desplegat = false;

widgets.addEventListener('mouseenter', function() {
    if (desplegat) {
        contingutWidgets.style.display = 'none';
    } else {
        contingutWidgets.style.display = 'block';
    }

    desplegat = !desplegat;
})