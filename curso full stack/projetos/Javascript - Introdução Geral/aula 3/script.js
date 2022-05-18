/*formas de mostrar dados*/
/* 1*/
/* ele troca o texto q tava no h1 e coloca esse q a gente mando*/
document.getElementById("titulo").innerHTML = "salveee ";
/* 2*/
/*ele simplesmente escreve algo na tela (parece com o printf) só que ele meio que cria um elemento
então ele tem que tar dentro do html pra dar bom, se n ele vai roda sozinho e só dps vai aparecer o html*/
document.write("Hello Word");

/*esses jeitos são atravaés do documento, agr as outra é através da janela*/
/*3 da um alert pela janela do navegador*/
window.alert("pizza é melhor que lasanha");
/*ou (tanto faz esse é só um atalho)*/
alert("pizza é melhor que lasanha");

/*4 usando o console*/ 

console.log("o que eu eescrever aq vai aparecer no console do navegadorr");