let nome = "Victor Luiz Lopes da Silva";
let nomeComEspaçoInutil = "                  Victor    ";
let nomeSemAlteracao = nome;
let numeros = "1,2,3,4,5,6,7,8,9,10";
let receitaCocada = "leite condensado;coco ralado;manteiga;açucar" 
let receitaBolo = "ovo;massa;corante;farinha;açucar" 

line("jeito normal");
console.log(nomeSemAlteracao);

line("alteração de um valor");
console.log(nome.replace("Silva", "Gonçalves"));

line("deixa uma String com letras maiusculas");
console.log(nome.toUpperCase());

line("deixa uma String com letras minusculas");
console.log(nome.toLowerCase());

line("concatena um valor com a sua String");
console.log(nome.concat(" Monstro de guerra"));
//console.log(nome + " Monstro de Guerra"); da pra ver q essa funçaõ concat é meio inutil, ja q da pra fazer a msm coisa desse jeito

line("tira os espaços em branco que são desnecessários");
console.log(nomeComEspaçoInutil.length); //mostra qual o tamanho da String (qts coisas tem dentro)
console.log(nomeComEspaçoInutil.trim()); //mostra só o conteudo sem espaços em branco
console.log(nomeComEspaçoInutil.trim().length);

line("encontra um caractere em uma determinada posição");
console.log(nome.charAt(3));
//console.log(nome[3]); faz a msm coisa tbm, foi emplementado a aprtir do ecma script. 3 jeitos diferentes de fazer a msm coisa só escolher kkkkk
//console.log(nome.substr(3, 1)); faz a msm coisa

line("em um determinado caractere, divide a String e a transforma em um Vetor");
console.log(nome.split(" "));
console.log(numeros.split(","));

line("receitas");
console.log(receitaCocada.split(";"));
console.log(receitaBolo.split(";"));

function line (descricao) {
    console.log("-----------------------------------------"+descricao+"--------------------------------------------------");
}