// modal.js

// Obtén el botón de abrir el modal y el modal
var modalBtn = document.getElementById("openModalBtn");
var modal = document.getElementById("myModal");

// Cuando se haga clic en el botón, muestra el modal
modalBtn.onclick = function() {
    modal.style.display = "block";
}

// Cuando se haga clic en la "x" dentro del modal, ciérralo
var closeModal = document.getElementsByClassName("close")[0];
closeModal.onclick = function() {   
    modal.style.display = "none";
}

// Cuando el usuario haga clic en cualquier parte fuera del modal, ciérralo
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
