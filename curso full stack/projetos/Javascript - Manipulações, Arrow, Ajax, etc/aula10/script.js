let d = new Date();
let d2 = new Date(2022, 0 , 1, 12, 30, 12); // recebe até 7 parametros, sendo tudo referente a data OBS: o mês começa do 0 
//ano , mes, dia, hora, minuto, segundo,
let d3 = new Date("2022-01-01 15:42:17"); //nesse caso o mês é normal
let d4 = new Date(2022, 2);
let d5 = new Date(0);
let d6 = new Date(12315646);
let d7 = new Date(-12315646);

line("retorna as informações gerais de data");
console.log(d);

line("retorna as informações de data somente");
console.log( d.toDateString() );

line("retorna as informações de data e fuso-horário");
console.log( d.toUTCString() );

line("retorna as informações de data e hora que definimos");
console.log(d2);

line("retorna as informações de data e hora que definimos (jeito 2)");
console.log(d3);

line("retorna as informações de data e hora que definimos (só mes e ano)"); //que é o minimo praq poder funcionar, o restante é opcional
console.log(d4);

line("data em que a linguagem começa a contar os milissegundos");
console.log( d5.toUTCString() );
console.log(d5);
line("data a partir de milissegundos");
console.log(d6);//além do ano ele tbm aceito os milisegundos como primeiro parametro
/*como os milisegundos começaram a ser contados a partir de 1970 se quisermos contabiliza-los em uma data anterior a essa
precisamois informar os milisegundos de maneira negativa*/
line("data a partir de milissegundos ocasião(antes de 1970)");
console.log(d7);

function line (descricao) {
    console.log("-----------------------------------------"+descricao+"--------------------------------------------------");
}