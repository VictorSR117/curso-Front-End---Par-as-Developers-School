let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligar:function() {
        console.log('VRUM VRUM');
    },
    acelerar: function() {
        console.log('rhiiiiiiiii')
    }
};

console.log(carro['nome']);/*jeito normal*/
console.log(carro.nome);/*jeito mais usado*/

console.log("modelo: " + carro.modelo)

carro.ligar();
carro.acelerar();

