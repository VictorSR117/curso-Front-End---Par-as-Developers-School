let d = new Date();
let d2 = new Date();
let d3 = new Date();
let d4 = new Date();
let d5 = new Date();
let d6 = new Date();
let d7 = new Date();
let d8 = new Date();

line("troca o ano");
d.setFullYear(2024);
console.log( d );//da pra colocar o mes e dia tbm, porém é recomendado colocar só o ano

line("troca o mês");
d2.setMonth(11);//mes começa em 0 no js (11 = dezembro)
console.log( d2 );

line("troca o dia do mês");
d3.setDate(15);
console.log( d3 );

line("troca o dia da semana");
d4.setDate(4);
console.log( d4 );

line("acresenta dias do mês");
d5.setDate( d5.getDate() + 5 );
console.log( d5 );

line("acresenta horas ");
d6.setHours( d6.getHours() + 20 );
//d6.setHours( d6.getHours() - 10 );
console.log( d6 );

/*assim seria tbm se vc quiser trocar o dia, segundo etc. É só colocar ser, pra colcar o valor e dizer quem vc quer q 
receba esse valor, ano, mes, dia etc.*/

function line (descricao) {
    console.log("-----------------------------------------"+descricao+"--------------------------------------------------");
}
function BrokenLine () {
    console.log("\n");
}