let telefone = "54465";

line("faz com que obrigatóriamente um elemento tenha um tamanho minimo e preenche esse elemento com valores até chegar no tamanho solicitado (no final do elemento)")
console.log( telefone.padEnd(9, "*") );

line("faz com que obrigatóriamente um elemento tenha um tamanho minimo e preenche esse elemento com valores até chegar no tamanho solicitado (no começo do elemento)")
console.log( telefone.padStart(9, "*") );

//exemplo de utilização

let cartao = "1234123412341234";

let LastDigits = cartao.slice(-4);

let cartaoMascarado = LastDigits.padStart(16, "*");

console.log("Este é o seu cartão ?", cartaoMascarado);



function line (descricao) {
    console.log("-----------------------------------------"+descricao+"--------------------------------------------------");
}