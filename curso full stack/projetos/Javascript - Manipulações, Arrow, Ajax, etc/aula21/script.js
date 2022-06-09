let numeros = [1, 2, 3, 4];

let outros = [...numeros, 5, 6, 7, 8]; //adiciona um ou mais valores a um outro vetor 

console.log(outros);

let info = {
    nome: "Victor",
    sobrenome: "Luiz",
    idade: 19
};

let novaInfo = { //adiciona um ou mais valores a um outro objeto
    ...info,
    cidade: "São Paulo",
    estado: "São Paulo",
    pais: "Brasil"
};

console.log(novaInfo);

function adicionarInfo(infoo) { //adiciona um ou mais valores através de uma função
    let novasInfo = {
        ...infoo,
        status: 0,
        token: "rgsgsrhgdhdh",
        dataCadastro: "....."
    };
    return novasInfo;
}

adicionarInfo({nome: "Victor", sobrenome: "Luiz"});