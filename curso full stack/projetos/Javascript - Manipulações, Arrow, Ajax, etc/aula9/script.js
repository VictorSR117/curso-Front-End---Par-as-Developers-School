let lista = [45, 4, 9, 16, 25];
let lista2 = [];
let listausuarios = [ {id: 1, name:"Victor", sobrenome:"Luiz"}, {id: 2, name:"Luiz", sobrenome:"Henrrique"}, {id: 3, name:"Roberto", sobrenome:"Gomes"} ];


line("procura o item no Array e retorna o mesmo se ele for encontrado");
lista2 = lista.find(function(item){ //quando queremos o própio valor
    return (item == 16) ? true : false;
});
console.log(lista2);

line("procura o item no Array e retorna o mesmo se ele for encontrado");
let pessoa = listausuarios.find(function(item){
    return (item.id == 2) ? true : false;
    //return (item.sobrenome == "Gomes") ? true : false;
});
console.log(pessoa);

line("procura a posição do item no Array e retorna o mesmo se ele for encontrado");
lista2 = lista.findIndex(function(item){ // quando queremos a posição do valor
    return (item == 16) ? true : false;
});
console.log(lista2);

function line (descricao) {
    console.log("-----------------------------------------"+descricao+"--------------------------------------------------");
}