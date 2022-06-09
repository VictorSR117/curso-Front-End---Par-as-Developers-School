let novoValor = 0;

line("calculando o valor de PI");
console.log( novoValor = Math.PI );

line("arredondando um valor");
console.log( novoValor = Math.round(3.95) );//segue a regra de arredondamento matematica (if x >= 0.5 = +) (if x<=0.4 = -)

line("arredondando um valor");
console.log( novoValor = Math.round(3.45) );//segue a regra de arredondamento matematica (if x >= 0.5 = +) (if x<=0.4 = -)

line("arredondando um valor para baixo");
console.log( novoValor = Math.floor(4.85) );

line("arredondando um valor para cima");
console.log( novoValor = Math.ceil(4.25) );

line("retorna um número absoluto");
console.log( novoValor = Math.abs(-9.156844) );

line("retorna o menor número");
console.log( novoValor = Math.min(5, 9 , 8 , 10, 66, 88 ,999) );

line("retorna o maior número");
console.log( novoValor = Math.max(500, 2, 5, 5, 8 ,94, 77, 44) );

line("retorna um número aleatório");
console.log( novoValor = Math.floor(Math.random() * 100)); //o random sozinho retorna um número entre 0 e 1, combinado com
//ai vc multiplica ele pelo valor máximo do intervalo de numero aleátório q vc quer e nivela por baixo pra nunca passar desse valor
//ele vai chegar até o 99 no máximo (é igual aquele esquema q o Cris ensino pra preencher valores em C)
//é só colocar o número q vc quer + 1
function line (descricao) {
    console.log("-----------------------------------------"+descricao+"--------------------------------------------------");
}
function BrokenLine () {
    console.log("\n");
}