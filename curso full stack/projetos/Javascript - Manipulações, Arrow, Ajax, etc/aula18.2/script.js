let pessoa = {
    nome: "Victor",
    sobrenome: "lopes",
    idade: 19,
    social: {
        facebook: "victorvidas",
        instagram: {
            url: "@victor",
            seguidores: 20
        }
    }
};

/*
fazendo normal
function pegarNomeCompleto(obj) {

    let nome = obj.nome;
    let sobrenome = obj.sobrenome;

    //jeitos de fazer:

    return `${nome} ${sobrenome}`;
    //return obj.nome+" "+ obj.sobrenome;
}
*/
//fazendo direto no parametro
function pegarNomeCompleto({nome, sobrenome = "Luiz", social:{instagram:{url:instagram}}}) { 
//se n tiver sobrenome ele vai receber Luiz
    return `${nome} ${sobrenome} siga em ${instagram}`;
}

console.log(pegarNomeCompleto(pessoa));