/*Aray (vetor) em js*/

let carros = ["Palio", "Uno", "Corola", "Ferrari"]; //forma atual

/*let carros = [ //jeito atual de maneira mais espacada
    "Palio",
    "Uno",
    "Corola",
    "Ferrari",
    function () {
        console.log("teste 1 2 3");
    }
];*/

//let carross = new Aray("Palio", "Uno", "Corola", "Ferrari"); //forma antiga
/*
carros[4]();

console.log(carros);
console.log(carros[0]);
*/

let ingredientes = [
    ["uva", "pera", "maca",],
    ["arroz", "macarrão"]
];
console.log(ingredientes); /*mostra tudo que ta no vetor (outros 2 vetores)*/
console.log(ingredientes[1]); /*mostra o 2º vetor dentro do vetor principal (vetor de massas)*/
console.log(ingredientes[1][0]);/*mostra o que ta na primeira posição do 2º vetor que está dentro do vetor principal (1ºposição do 
    vetor massas)*/

/*no js da pra colocar vetores dentro de vetores, funções dentro de vetores, variaveis, objetos, textos e o melhor tudo junto
sem ter que declarar tipo*/