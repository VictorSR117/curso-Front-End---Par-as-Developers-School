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
    },
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`   
    }
}

/*jeito normal: 
let {facebook, instagram} = pessoa.social;//pega um objeto dentro de outro

/*jeito diferente, pegando multiplos atributos
let {nome, idade, social:{ instagram }} = pessoa; //no objeto pessoa tem um objeto social com os valores facebook e instagram

/*pra pegar um elemento dentro de um objeto tem que primeiro especifica onde ele ta e depois pega, como os exemplos acima*/

//let {nome, idade, social:{instagram:{ url:instagram, seguidores }}} = pessoa;
let {nome, idade, social:{instagram}} = pessoa;

console.log(nome, idade, instagram);
