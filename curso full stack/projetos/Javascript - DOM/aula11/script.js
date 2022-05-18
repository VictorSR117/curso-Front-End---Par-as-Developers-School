document.querySelector(".texto");
/*diz o tamanho exato do elemento em lagura ou altura (incluindo padding, border, skroll bar etc.)*/ 
document.querySelector(".texto").offsetWidth;
document.querySelector(".texto").offsetHeight;

/*diz o tamanho do elemento descontando o scrol bar se tiver e o padding, não conta a borda*/
document.querySelector(".texto").clientWidth;
document.querySelector(".texto").clientHeight;

/*diz o tamanho real do conteudo do seu elemento, conta também padding.*/
document.querySelector(".texto").scrollWidth;
document.querySelector(".texto").scrollHeight;