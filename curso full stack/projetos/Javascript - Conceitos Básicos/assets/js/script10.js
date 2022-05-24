let html = "";

let c = 0;

while (c < 10) {
    html += "Número: "+c+"<br/>";    
    c++;
}

for (let c = 1; c <= 10; c++) {
    html += "Número: "+c+"<br/>";
}

/*while (true) {
   não sei pq mais tem gente q faz esse loop infinito 
}*/

document.getElementById("demo").innerHTML = html;