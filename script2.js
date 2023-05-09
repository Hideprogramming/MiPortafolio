/*efecto*/
//Inicio
const loadText = document.getElementById('loading-text');
const bg = document.querySelector('.bg');
let cajamenu = document.getElementById("menu");

let load = 0;

let int = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int);
    if (load === 100) {
      cajamenu.innerHTML = `<nav class="" id="nav">
      <ul>
          <li><a href="./home.html">Home</a></li>
          <li><a href="./info.html">Information</a></li>
          <li><a href="./proyectos.html">Proyects</a></li>
          <li><a href="./contacto.html">Contact</a></li>
          </ul>
      <button class="icon" id="toggle">
          <div class="line line1"></div>
          <div class="line line2"></div>
      </button>
  </nav>`;
      //Barra de Navegacion
      const toggle = document.getElementById('toggle');
      const nav = document.getElementById('nav');

      toggle.addEventListener('click', () => nav.classList.toggle('active'));

    }
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

  if (load === 100) {
    loadText.innerText = " ";
  }
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
//FIN DE INICIO

//RELOJ
const tiempo = document.getElementById('tiempo'),
fecha = document.getElementById('fecha');

function digitalClock(){
    let f = new Date(),
    dia = f.getDate(),
    mes = f.getMonth() + 1,
    anio = f.getFullYear(),
    diaSemana = f.getDay();

    dia = ('0' + dia).slice(-2);
    mes = ('0' + mes).slice(-2)

    let timeString = f.toLocaleTimeString();
    tiempo.innerHTML = timeString;

    let semana = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let showSemana = (semana[diaSemana]);
    fecha.innerHTML = `${anio}-${mes}-${dia} ${showSemana}`
}
setInterval(() => {
    digitalClock()
}, 1000);
//FIN DE RELOJ

//SCROLL
ScrollReveal().reveal('.titulo', { delay: 500});
ScrollReveal().reveal('.social', { delay: 500});
ScrollReveal().reveal('.footer-links', { delay: 500});
//FIN DE SCROLL

//MUSICA AMBIENTAL
function playAudio() {
  document.getElementById("audio").play()
}