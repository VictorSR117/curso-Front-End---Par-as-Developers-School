//loop normal
let texto = "";
const N = 10;

for (let i = 1; i <= N; i++) {
    texto = texto + i + "<br/>"; // texto += i + "<br/>"
}

document.getElementById("demo").innerHTML = texto;

//loop com array

let carros = [ "ferrari", "fusca", "Lamborguinni", "koenesseg", "porche"]; 

let html = "<ul>"

for (let i in carros) {
    html += "<li>"+ carros[i] + "</li>";
}

html += "</ul>";

document.getElementById("demoo").innerHTML = html;