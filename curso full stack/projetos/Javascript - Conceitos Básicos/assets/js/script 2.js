function digitou(evento) {
    console.log(evento);
    console.log('apertou o botão');

    if (evento.keyCode == 13 && evento.ctrlKey == true) { //13 é o código Binário (Accsi) para o botão enter
        let texto = document.getElementById("campo").value;
        console.log(texto);
    }
}
function digitou2(evento) {
    console.log(evento);
    console.log('soltou o botão');

    if (evento.keyCode == 13 && evento.ctrlKey == true) { //13 é o código Binário (Accsi) para o botão enter
        let texto = document.getElementById("campo").value;
        console.log(texto);
    }
}
function digitou3(evento) {
    console.log(evento);
    console.log('segurou o botão');

    if (evento.keyCode == 13 && evento.ctrlKey == true) { //13 é o código Binário (Accsi) para o botão enter
        let texto = document.getElementById("campo").value;
        console.log(texto);
    }
}
/*em desenvolvimento profissional o parametro evento seria trocado por e, para economizar código*/