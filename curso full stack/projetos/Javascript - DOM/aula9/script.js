function alterar (titulo) {
    document.getElementById("titulo").innerHTML = titulo
    document.getElementById("teste").value = titulo 
}
alterar("titulo de exemplo");

function somar(x = 5, y) {//os parametros podem receber valores ou ter eles declarados
    let total = x + y;

    document.getElementById("teste").value = total;
}
somar(10, 5);

function subtrair(x, y) {//os parametros podem receber valores ou ter eles declarados
    let total = x - y;
    return total;
}

var result = subtrair(15, 5);

console.log(result);