// função callback
function alertar() {
   console.log('opa, deu bom meu parçeiro ?');
}

let nome = "Victor";
setTimeout(alertar, 2000);
let sobrenome = "Luiz";
console.log("nome completo: " + nome + " " + sobrenome);
