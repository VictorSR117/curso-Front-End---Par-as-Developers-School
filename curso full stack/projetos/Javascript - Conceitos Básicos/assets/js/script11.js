document.querySelector("#titulo").innerHTML = "Mudei o titulo";
document.querySelector("body").style.background = "#ccc";

let lista = document.querySelectorAll("li");

for (let i in lista) {
    lista[i].style.color = "#ff0000";
}

//o queryselector pega um elemento só 
//o query selectorall pega varios elementos
//com queryselector da pra pegar um elemento pelo nome da tag, id, class ou seja ele é uma jumção de todos os get elements
//juntos em um só comando

//o queryselector retorna o elemento
//o queryselectorall retorna um Array com os elementos
//por conta disso quando usamos o queryselectorall temos que percorer o vetor até a posição que queremos para atribuir valores
//enquanto no queryselector podemos atribuir os valores diretamente
//acima tem 2 exemplos citando os queryselectors e como funciona cada um