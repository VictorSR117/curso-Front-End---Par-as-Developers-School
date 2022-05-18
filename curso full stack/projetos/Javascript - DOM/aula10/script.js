function trocarImagen (filename, estadoKratos) {
    document.querySelector('.imagen').setAttribute('src', '/aula10/img/' + filename);
    document.querySelector('.imagen').setAttribute('data-espartano', estadoKratos);
}
function pegarEstado() {
    let kratoss = document.querySelector('.imagen').getAttribute('data-espartano');
    alert("O estado atual de kratos é: " + kratoss)
}