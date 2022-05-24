function menuToggle() {
    let menuArea = document.getElementById("menu-area");

    if (menuArea.classList.contains("menu-opened")== true) {
        menuArea.classList.remove("menu-opened");
    }
    else {
        menuArea.classList.add("menu-opened");
    }

    /********************************************************jeito alternativo********************************************************/

    if (menuArea.style.width == "200px") {
        menuArea.style.width = "0px";
    }
    else {
        menuArea.style.width = "200px";
    }
}

/*minha solução

function abreFechamenu() {
    if (document.getElementById("menu-area").style.width == "0px") {
        document.getElementById("menu-area").style.width = "200px";    
    }
    else {
        document.getElementById("menu-area").style.width = "0px";
    }
}

*/