let lista = [45, 4, 9, 16, 25];
let lista2 = [];
let lista3 = [];
let lista4 = [];


line("percorre o vetor e faz alguma ação");
lista2 = lista.map(function(item) { //vai percorrer o vetor item por item rodando essa função
    return item * 2;
});
/*
for (let i in lista) { //faz a msm coisa
    lista2.push(lista[i] * 2);
}*/
console.log("lista normal");
console.log(lista);
console.log("lista dobrada");
console.log(lista2);

line("filtra o vetor pegando somente os números menores que 20");
lista3 = lista.filter(function(item) {
    if (item < 20) { //se fosse (item > 20) ele pegaria 45 e 25
        return true;
    }
    else {
        return false;
    }
});
console.log(lista3);

line("compara 2 vetores e diz se os valores deles são iguais");
lista4 = lista.every(function(item) {
    if (item > 20) { 
        return true;
    }
    else {
        return false;
    }
});
console.log(lista4);

line("compara 2 vetores e diz se alguns dos valores deles são iguais");
lista4 = lista.some(function(item) {
    /*if (item > 20) { 
        return true;
    }
    else {
        return false;
    }*/
    return (item > 20)? true : false;//faz a msm coisa q o if acima
});
console.log(lista4);

function line (descricao) {
    console.log("-----------------------------------------"+descricao+"--------------------------------------------------");
}