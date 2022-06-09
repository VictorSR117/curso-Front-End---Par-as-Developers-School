///criando a promisse
function pegarTemperatura() {
   return new Promise(function(resolve, reject) {
      console.log("pegando temperatura..."); 

      setTimeout(function() {
         resolve("40 na sombra");
      }, 2000)
   });
}

//usando a promisse
console.log("código antes");

let temp = pegarTemperatura();

console.log("código durante");

temp.then(function(resultado) {
   console.log("temperatura: " + resultado);
});
temp.catch(function(error) {
   console.log("putz, deu ruim");
});

console.log("código depois");