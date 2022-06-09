let lista = ["ovo", "Farinha", "Corante", "Massa",];
let lista2 = ["ovo", "Farinha", "Corante", "Massa",];
let lista3 = ["ovo", "Farinha", "Corante", "Massa",];
let lista4 = ["ovo", "Farinha", "Corante", "Massa",];
let lista5 = ["ovo", "Farinha", "Corante", "Massa",];


line("transforma valores em Strings");
console.log(lista.toString());
//console.log(lista.join(","));

line("transforma vetores em Strings");
console.log(lista.join("-"));

line("encontra a posição de um elemento no vetor");
console.log(lista.indexOf("Corante"));

line("exclui o ultimo elemento do vetor (o ultimo era massa, foi excluido por isso n ta aparecendo)");
lista2.pop();
console.log(lista2);
console.log(lista2.pop());// mostra o elemento que foi excluido

line("exclui o primeiro elemento do vetor (o primeiro era ovo, foi excluido por isso n ta aparecendo)");
lista3.shift();
console.log(lista3);
console.log(lista3.shift());// mostra o elemento que foi excluido

line("adiciona um elemento ao vetor (o ultimo era massa, foi colocado prato e ele se tornou o ultimo)");
lista4.push("prato");
console.log(lista4);
console.log(lista4.push());// mostra a posição em que o novo elemento que foi adicionado

line("adiciona ou altera um elemento a ultima posição do vetor, se não houver espaço ele cria");
lista5[0] = "ovos";
lista5[4] = "liquidificador";
lista5[ lista5.length ] = "cobertura"; 
console.log(lista5);//não muito recomendada, se quiser fazer isso use de preferencia o push


function line (descricao) {
    console.log("-----------------------------------------"+descricao+"--------------------------------------------------");
}