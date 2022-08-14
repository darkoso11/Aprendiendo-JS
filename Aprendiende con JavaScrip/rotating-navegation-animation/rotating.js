const open = document.getElementById("open");
const close = document.getElementById("close");
const menu = document.getElementById("menu");
const contenido = document.getElementById("contenido");
const nav = document.getElementById('nav')

open.addEventListener("click", () => {
  menu.classList.add("rotate-menu");
  contenido.classList.add("rotate-contenido");
});

close.addEventListener("click", () => {
  menu.classList.remove("rotate-menu");
  contenido.classList.remove("rotate-contenido");
});

nav.addEventListener( "click", () => {
  
} 

)