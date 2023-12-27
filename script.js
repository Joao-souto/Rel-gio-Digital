const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const body = document.body;

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

    if (hr >= 6 && hr <= 17) {
        body.style.backgroundImage = 'url("IMG/dia.jpg")'; 
    }

    if (hr > 17 && min >= 30 && hr < 19) {
        body.style.backgroundImage = 'url("IMG/fimTarde.jpg")'; 
    }

    if (hr >= 19 || hr <= 5) {
        body.style.backgroundImage = 'url("IMG/noite.jpg")'; 
    }

}, 1000); 
