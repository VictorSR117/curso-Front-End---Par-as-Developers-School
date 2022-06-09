let timer
function rodar() {
    timer = setTimeout(function () { //execulta uma função depois de um determinado intevalo de tempo, OBS:tempo sempre em Ms
        document.querySelector(".demo").innerHTML = "rodo";
    }, 2000);
}
/*function rodar() {
    setTimeout(function () { //execulta uma função depois de um determinado intevalo de tempo, OBS:tempo sempre em Ms
        document.querySelector(".demo").innerHTML = "rodo"
    }, 2000);
}*/

function Parar() {
    clearTimeout(timer);
}