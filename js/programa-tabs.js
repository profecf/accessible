const pestanyesEnllacos = document.querySelectorAll(".tabs a");
const pestanyesPanells = document.querySelectorAll(".tabs-panel");

for (let enllac of pestanyesEnllacos) {
    enllac.addEventListener("click", event => {
        event.preventDefault();

        document.querySelector(".tabs li.active").classList.remove("active");
        document.querySelector(".tabs-panel.active").classList.remove("active");

        const parentListItem = enllac.parentElement;
        parentListItem.classList.add("active");
        const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

        const panellActiu = [...pestanyesPanells].filter(panel => panel.getAttribute("data-index") == index);
        panellActiu[0].classList.add("active");
    });
}
