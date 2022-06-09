let nome = "Victor Luiz Lopes da Silva";
let resultado = "";

console.log(nome.indexOf("Lopes"));

if (nome.indexOf("Lopes") > -1) {
    resultado = "encontrado";
}
else {
    resultado = "não encontrado";
}
console.log(resultado);
