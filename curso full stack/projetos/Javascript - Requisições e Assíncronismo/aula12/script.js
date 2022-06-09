function mostrar() {
   let imagem = document.getElementById("imagem").files[0];

   let img = document.createElement("img");
   img.src = URL.createObjectURL(imagem);
   img.width = 200;//define o tamanho da imagem, sem ele ela vem com o tamanho padrão

   document.getElementById("area").appendChild(img); //transforma o objeto em elemento e eçe é mostrado na tela
   //se quisesse mostrar o objeto na tela: .innerHTML = img; 
   //"<img />" se quiser pode criar a imagen direto no html e dps mexer aq
}