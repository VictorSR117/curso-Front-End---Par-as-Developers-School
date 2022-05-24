let dia = 6;
let diaNome = "";
let diaNomee = "";

switch (dia) {
    case 1:
        diaNome = "segunda-feira"
        break;
    case 2:
        diaNome = "terça-feira"
        break;
    case 3:
        diaNome = "quarta-feira"
        break;
    case 4:
        diaNome = "quinta-feira"
        break;
    case 5:
        diaNome = "sexta-feira"
        break;
    case 6:
        diaNome = "sábado"
        break;
    case 7:
        diaNome = "domingo"
        break;

        default:
        alert("Invalid");
        break;
}
switch (dia) {
    case 6: 
    case 7:
        diaNomee = "final de semana"
        break;
    default:
        diaNome = "dia útil"
        break;
}

document.getElementById("dia").innerHTML = "hoje é " + diaNome;
document.getElementById("diaa").innerHTML = "hoje é " + diaNomee;