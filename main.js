// Función para imprimir página.

function imprimirPagina() {
  window.print();
}

// Funcion para ocultar y mostrar página.
document.addEventListener("DOMContentLoaded", function () {
  const desplegarButton = document.getElementById("desplegar");
  const contenedor = document.querySelector(".container2");
  let estaOculto = true;

  desplegarButton.addEventListener("click", () => {
    if (estaOculto) {
      contenedor.style.maxHeight = contenedor.scrollHeight + "px";
      desplegarButton.textContent = "Ocultar CV";
    } else {
      contenedor.style.maxHeight = "0";
      desplegarButton.textContent = "Ver CV";
    }
    estaOculto = !estaOculto;
  });

  // Ajustar la altura máxima después de cargar la página
  setTimeout(() => {
    contenedor.style.maxHeight = "0";
  }, 100);
});



//MANTENER FECHA FOOTER ACTUALIZADA =================================================
let fechaElement = document.getElementById("fecha");
let currentDate = new Date();
let fecha = currentDate.getFullYear();
fechaElement.textContent = fecha;
