let n = 10.65165411;
let n2 = 20;
let num = "25";
let numdec = "25.5874";
let res = "R$" + n.toFixed(2);

line("transforma valores em Strings");
console.log(n2.toString());

line("define quantas casas mostrar depois da ,");
console.log(res);

line("transforma uma String em numero inteiro");
console.log(parseInt(num) + 5);

line("transforma uma String em numero decimal");
console.log(parseFloat(numdec) + 5);

function line (descricao) {
    console.log("-----------------------------------------"+descricao+"--------------------------------------------------");
}