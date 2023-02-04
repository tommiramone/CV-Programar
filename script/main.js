// Llamada al div del boton
btn = document.getElementById("btnUp");

// Creacion y personalizacion del buton dentro del div
crearBtn = document.createElement("button");
crearBtn.innerHTML = "Up";
crearBtn.classList.add("btnSubir");
crearBtn.setAttribute("id", "scroll-btn");
btn.appendChild(crearBtn);

// Funcion que reconoce el recorrido del usuario en la pagina y hace aparecer/desaparecer el boton mediante la clase "show"
const scrollBtnDisplay = function () {
  window.scrollY > window.innerHeight
    ? crearBtn.classList.add("show")
    : crearBtn.classList.remove("show");
};
window.addEventListener("scroll", scrollBtnDisplay);

// Funcion que permite que el boton suba en caso de estar disponible en la pagina web
const scrollWindow = function () {
  if (window.scrollY != 0) {
    setTimeout(function () {
      window.scrollTo(0, window.scrollY - 100);
      scrollWindow();
    }, 100);
  }
};
btn.addEventListener("click", scrollWindow);
