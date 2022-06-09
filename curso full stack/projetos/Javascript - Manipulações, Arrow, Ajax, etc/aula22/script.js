function adicionar(...numeros) {
    console.log(numeros);
}
adicionar(5, 6, 7, 8, 9, 10, "Pedro");

function adicionarNomes(nomes, ...novosNomes) {
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ];
    return novoConjunto;
}

let nomes = ["Victor", "Luiz"];

let outros = adicionarNomes(nomes, "Rodrigo", "Pedro", "Roger");

console.log(outros);