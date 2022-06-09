let lista = ["ovo", "Farinha", "Corante", "Massa"];
let lista2 = ["ovo", "Farinha", "Corante", "Massa"];
let lista22 = ["ovo", "Farinha", "Corante", "Massa"];
let lista222 = ["ovo", "Farinha", "Corante", "Massa"];
let lista2222 = ["ovo", "Farinha", "Corante", "Massa"];
let lista3 = ["ovo", "Farinha", "Corante", "Massa"];
let lista33 = ["Prato", "Liquidificador", "Forno"];
let reslista3 = [""];
let lista4 = ["ovo", "Farinha", "Corante", "Massa"];
let lista44 = ["ovo", "Farinha", "Corante", "Massa"];
let lista5 = [5, "Farinha", "Corante", 2, "Massa", 5.8];


delete lista[1];
line("deleta um valor do vetor e deixa a posição disponivel para um novo");
console.log(lista);

line("deleta um ou mais valores do vetor a partir de um indice especificado, e de qts valores serão excluidos");
lista.splice(1, 1);
console.log(lista2.splice(1, 1));//mostra o elemento q foi apagado
console.log(lista2);
console.log("\n"); //quebra de linha
lista22.splice(1, 2);
console.log(lista22);
lista222.splice(1);//vai na 1º posição e apaga tudo q vem dps
console.log(lista222);
lista2222.splice(2, 1);
console.log(lista2222);

line("une 2 vetores");
reslista3 = lista3.concat(lista33);
console.log(reslista3);

line("ordena o vetor");
console.log("(ordem alfabética A-Z)");
lista4.sort();
console.log(lista4);
console.log("(ordem alfabética Z-A)");
lista44.sort();//ordena o vetor
lista44.reverse();//inverte o vetor
console.log(lista44);

line("teste com a ordenação de vetor");
console.log(lista5.sort());
console.log(lista5.sort().reverse());


function line (descricao) {
    console.log("-----------------------------------------"+descricao+"--------------------------------------------------");
}