JSON.stringify({nome: "Victor", idade: 19}); //transforma um objeto em string

JSON.parse('{"nome":"Victor","idade":19}'); //transforma uma string em objeto


let pessoa = {
    nome: "Victor",
    idade: 19,
    algo: null
};

let pessoaString = JSON.stringify(pessoa);

let busca = {input: "vic"};
buscaString = JSON.stringify(busca);

let resultado = {
    lista: [
        "Victor",
        "Vinicius",
        "Vicente"
    ]
};
JSON.stringify(resultado);

let res = '{"lista":["Victor","Vinicius","Vicente"]}';

let resJSON = JSON.parse(res);