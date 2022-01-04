"use strict";
var contador = 0;
const contadorVista = document.getElementById("contar");

/* function añadir() {
    contador++;
    contadorVista.innerHTML = contador;
};

function sustraer() {
    contador--;
    contadorVista.innerHTML = contador;
};

function reiniciar() {
    contador = 0;
    contadorVista.innerHTML = contador;
}; */

function editar(opcion) {
  switch (opcion) {
    case "añadir":
      contador++;
      break;
    case "sustraer":
      contador--;
      break;
    case "reiniciar":
      contador = 0;
      break;
    case "memoria":
      let contadorMemoria = localStorage.getItem("contador");
      contadorMemoria = parseInt(contadorMemoria);
      if (contadorMemoria && typeof contadorMemoria === "number") {
        contador = contadorMemoria;
      }
      break;
  }
  localStorage.setItem("contador", contador);
  contadorVista.innerHTML = contador;
}
