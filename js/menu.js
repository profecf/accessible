window.onload = function () {
  // Gestión del menú con submenús desplegables
  var menuItems = document.querySelectorAll("li.has-submenu");

  Array.prototype.forEach.call(menuItems, function (el, i) {
    var timer;

    // Añadir botón para desplegar menú
    var activatingA = el.querySelector("a");
    var btn =
      '<button><span><span class="visuallyhidden">mostrar submenú de “' +
      activatingA.text +
      "”</span></span></button>";
    activatingA.insertAdjacentHTML("afterend", btn);

    // Control de estados del desplegable
    el.querySelector("button").addEventListener("click", function (event) {
      if (this.parentNode.className == "has-submenu") {
        this.parentNode.className = "has-submenu open";
        this.parentNode
          .querySelector("a")
          .setAttribute("aria-expanded", "true");
        this.parentNode
          .querySelector("button")
          .setAttribute("aria-expanded", "true");
      } else {
        this.parentNode.className = "has-submenu";
        this.parentNode
          .querySelector("a")
          .setAttribute("aria-expanded", "false");
        this.parentNode
          .querySelector("button")
          .setAttribute("aria-expanded", "false");
      }
      event.preventDefault();
    });

    // Eventos para abrir/cerrar desplegable
    el.addEventListener("mouseover", function (event) {
      this.className = "has-submenu open";
      clearTimeout(timer);
    });

    el.addEventListener("mouseout", function (event) {
      // Cerrar con retraso para usuarios con discapacidad motriz
      timer = setTimeout(function (event) {
        document.querySelector(".has-submenu.open").className = "has-submenu";
      }, 1000);
    });
  });

  // Gestión de los botones de radio
  var myRadioButton = document.querySelectorAll('div.my-radio > input');

  Array.prototype.forEach.call(myRadioButton, function (el, i) {
    el.addEventListener("click", function () {
      var inputSelected = document.querySelector('div.my-radio > input:checked');

      if (inputSelected.value == "Radio Buttons") {
        console.log(1);
      }

      if (inputSelected.value == "Slider") {
        console.log(2);
      }

      if (inputSelected.value == "Acordeón") {
        console.log(3);
      }
    });
  });
};


