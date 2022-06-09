async function enviar() {
   
   let arquivo = document.getElementById("arquivo").files[0];//quando for só um arquivo pode por 0

   let body = new FormData();
   body.append("title", "titulo que eu quiser");
   body.append("arquivo", arquivo);

   let req = await fetch("https://www.meusite.com.br/upload", {
      method: "POST",
      body: body,
      headers: {
         "Content-Type": "multipart/form-data"
      }
   });
}