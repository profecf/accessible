window.onload = function () {
  var menuItems = document.querySelectorAll("li.has-submenu");

  Array.prototype.forEach.call(menuItems, function (el, i) {
    var timer;

    /* Afegir botó per desplegar menú */
    var activatingA = el.querySelector("a");
    var btn =
      '<button><span><span class="visuallyhidden">mostrar submenú de “' +
      activatingA.text +
      "”</span></span></button>";
    activatingA.insertAdjacentHTML("afterend", btn);

    /* Control d'estats del desplegable */
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

    /* Events per obrir/tancar desplegable */
    el.addEventListener("mouseover", function (event) {
      this.className = "has-submenu open";
      clearTimeout(timer);
    });

    el.addEventListener("mouseout", function (event) {
      /* tancar amb retard per usuaris amb discapacitat motriu */
      timer = setTimeout(function (event) {
        document.querySelector(".has-submenu.open").className = "has-submenu";
      }, 1000);
    });
  });
  //**********CAPTURO TODOS LOS BOTONES DE ALERT */
  let botonOnclick = document.getElementById("botonIcono1");
  let botonDobleclick = document.getElementById("botonIcono2");
  let botonMouseenter = document.getElementById("botonIcono3");

  // Evento click
  botonOnclick.addEventListener("click", function () {
    alert("Sale cuando haces click!");
  });

  // Evento dblclick
  botonDobleclick.addEventListener("dblclick", function () {
    alert("Sale cuando haces doble click!");
  });

  // Evento mouseenter
  botonMouseenter.addEventListener("mouseenter", function () {
    alert("Sale cuando el ratón pasa  sobre el botón!");
  });
};
