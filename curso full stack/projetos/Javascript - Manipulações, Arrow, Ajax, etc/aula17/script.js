let pessoa = {
    nome: "Victor",
    sobrenome: "lopes",
    idade: 19,
    social: {
        facebook: "victorvidas",
        instagram: "victorvidas"
    },
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`   
    }
}

let {nome:PessoaNome, sobrenome, idade} = pessoa; //vai no objeto especificado e pega os valores solicitados, e salva uma cópia deles em variaveis
//let {nome:PessoaNome, sobrenome, idade} = pessoa; se você quiser mudar o nome dessa variavel que será criada é só colocar esse nome depois de um:
console.log(PessoaNome, sobrenome, idade, altura = 1.90);
//se por um acaso a variavel vier sem valor, ou se não existir, vc pode definir um valor padrão pra ela colocando o simbolo de =

/*
faz a msm coisa:
let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade;
let instagram = pessoa.social.instagram;


*/
//console.log(pessoa.nomeCompleto());