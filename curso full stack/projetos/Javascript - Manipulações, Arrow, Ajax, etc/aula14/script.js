let timer;

function Comecar() {
    timer = setInterval(ShowTime, 1000);
}

function Parar() {
    clearInterval(timer);
}

function ShowTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = h+":"+m+":"+s;

    document.querySelector(".demo").innerHTML = txt;
}

//execulta uma função a cada x em x milisegundos
//let timer = setInterval(ShowTime, 1000);*/
