var hora = 18;


if (hora < 12 ) {
    console.log("bom dia"); 
}
else if (hora >= 12 && hora < 18 ) {
    console.log("boa tarde");
}
else if (hora <= 23) {
    console.log("boa noite");
}
if (hora == 12 || hora == 18) {
    console.log("se ta na hora do rush (famoso horário de Pico)");
}