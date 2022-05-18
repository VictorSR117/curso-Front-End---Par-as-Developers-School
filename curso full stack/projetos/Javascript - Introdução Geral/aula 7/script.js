var nome = "Victor";
let nome = "Victor";
const nome = "Victor";

console.log( window.nome ); /*com o var a variavel funciona no código todo e em toda parte*/ 

if (nome === "Victor") {
    let num = 5; /*com o let a variavel funciona só onde foi criada, neste caso ela morre quando o if acabar*/
    console.log( num );
    console.log(nome);
}

console.log(nome); /*const é uma constante. Valor que não muda a menos que vc mexa na delcaração*/