let d = new Date();

line("retorna o ano atual");
console.log( d.getFullYear() );

line("retorna o mês atual");
console.log( d.getMonth() );//mês no js começa no 0 e vai até o 11

line("retorna o dia da semana");
console.log( d.getDay() );//dias da semana no js vão de 0 a 6 e a semana começa no domingo

line("retorna o dia atual");
console.log( d.getDate() );//dias começam do 1 normal

line("retorna a hora atual");
console.log( d.getHours() );

line("retorna os minutos atuais");
console.log( d.getMinutes() );

line("retorna os segundos atuais");
console.log( d.getSeconds() );

line("retorna os milisegundos atuais");
console.log( d.getMilliseconds() );

line("retorna os milisegundos que se passaram desde 1970(que foi quando começou a contar) até a data atual");
console.log( d.getTime() );

line("retorna a data atual");
console.log( Date.now() ); //let d = new Date(); msm coisa

function line (descricao) {
    console.log("-----------------------------------------"+descricao+"--------------------------------------------------");
}