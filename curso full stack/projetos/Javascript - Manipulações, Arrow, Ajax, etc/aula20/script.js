/*
função tradicional
function somar(x, y) {
    return x + y;
}
*/

/*
variavel que recebe uma função
let somar = function(x, y) {
    return x + y;
}
*/

/*
função no formato Arrow function:
com {}:
let somar = (x, y) => { //o uso das {} é opcional neste tipo de função
    return x + y;
}

sem {}:
let somar = (x, y) => x+y; //o que vem depois da => serve como um return
*/

let somar = (x, y) => x+y;

let letrasNoNome = (nome) => nome.length;

let LetrasNoNome = nome => {
    let numero = nome.length;
    return numero;
}

//let letrasNoNome = (nome) => nome.length; quando a função só tem um parametro o () se torna opcional
//let letrasNoNome = () => nome.length; quando a função não tem parametros (ou tem mais q 2) é obrigatório colocar o ()

console.log( letrasNoNome("Victor") );