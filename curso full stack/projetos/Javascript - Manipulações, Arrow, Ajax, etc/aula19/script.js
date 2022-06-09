let info = [ "Victor Luiz", "Victor", "Luiz", "@victor" ];

//let [ nomeCompleto, nome, sobreNome, instagram ] = info; //por se tratar de um vetor, tem que seguir a ordem em que ele é criado
//console.log(nomeCompleto, nome, sobreNome, instagram);

let [ nomeCompleto, , , instagram ] = info; //caso vc queira não pegar todos os itens, é só não colocar valor neles
console.log(nomeCompleto, instagram);

/*até da pra simplesmente criar o nome e ignorar, mais ainda vai ocupar espaço na memória, por isso usamos a 2º maneira
quando queremos ignorar algun elemento*/

//ja cria e desconstroi
let [nome, sobrenome, idade = 19] = ["Victor", "Luiz"];
console.log(nome, sobrenome, idade);

//ja cria e desconstroi usando função
function criar() {
    return [1,2,3];
}
let [a, b, c] = criar();
console.log(a, b, c);
/*let [a, b, c] = numeros;
let numeros = criar();
faz a msm coisa
*/
