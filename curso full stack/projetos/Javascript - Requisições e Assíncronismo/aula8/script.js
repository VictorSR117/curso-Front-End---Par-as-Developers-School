//requisição usando a função fetch fetch retorna uma promisse

function loadPost() {
   //fetch().then();
   document.getElementById("posts").innerHTML = "Carregando...";
   fetch("https://jsonplaceholder.typicode.com/posts")
      .then(function (resultado) {
         return resultado.json();
      })
      .then(function (json) {
         montarBlog(json);
      })
      .catch(function (error) {
         console.log("Deu ruim");
      })
}

function montarBlog(lista) {
   let html = "";
   /*for (let i = 0; i < lista.length; i++) {
      
   }*/
   for (let i in lista) {
      html += "<h3>"+lista[i].title+"</h3>"
      html += lista[i].body+"<br/>";
      html += "<hr/>";
   }
   document.getElementById("posts").innerHTML = html;
}