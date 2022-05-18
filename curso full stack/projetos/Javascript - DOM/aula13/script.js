document.querySelector(".texto").scrollTop; /*diz qual é a posição da barra de rolagem na posição vertical (documento)*/
document.querySelector(".texto").scrollLeft; /*diz qual é a posição da barra de rolagem na posição horizontal (documento)*/

window.scrollX /*diz qual é a posição da barra de rolagem na posição vertical (janela do browser)*/
window.scrollY /*diz qual é a posição da barra de rolagem na posição horizontal (janela do browser)*/

/*sempre que for window se trata da janela do navegador*/
/*sempre que for document.querySelecto..../GetElementeBYID..... se trata do documento*/

document.querySelector(".texto").scrollTo(0, 0); /*movimenta a barra de rolagem para uma posição determinada*/
window.scrollTo(0, 0); /*movimenta a barra de rolagem para uma posição determinada */

function subirtela() {
    window.scrollTo(0, 0); /*nessa ocasião vai jogar a barra de rolagem para o topo da pagína*/
}

/************************************************Scroll Suave*************************************************************/

function subirtela() {
    window.scrollTo({ /*nessa ocasião vai jogar a barra de rolagem para o topo da pagína*/
        top: 0, //define a posição da barra de rolagem na vertical
        left: 0, //define a posição da barra de rolagem na horizontal
        behavior: 'smooth' /*esse comando diz como vai ser o comportamento da barra de rolagem, podendo ser auto ou smooth*/ /*auto = msm coisa q nada   smooth = suave*/
    }); 
}

/*essa função manipula o botão e faz ele aparecer ou desaparecer de acordo com a barra de rolagem*/
function decidirBotaoScroll () {
    if (window.scrollY == 0) {
        //ocultar o botão
        document.querySelector(".scrollbutton").style.display = "none";
    }
    else {
        //mostrar botão
        document.querySelector(".scrollbutton").style.display = "";
    }
}

/*1º solução: timer*/

setInterval(decidirBotaoScroll, 1000); //tempo sempre em segundos

/*2º solução: evento que monitora o scroll da tela*/

window.addEventListener("scroll", decidirBotaoScroll); //pode execultar uma função ou comando
