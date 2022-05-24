let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligado: false,
    ligar:function() {
        this.ligado = true;
        console.log('ligando o '+ this.modelo);
        console.log('VRUM VRUM');
    },
    acelerar: function() {
        if (this.ligado == true) {
            console.log('rhiiiiiiiii');
        }
        else {
            console.log(this.nome+" "+ this.modelo+'está desligado desligado')
        }
    }
};

let carros = [
    {nome:"fiat", modelo:"palio"},
    {nome:"fiat", modelo:"uno"},
    {nome:"toyota", modelo:"corola"},
    {nome:"ferrari", modelo:"f12"},
];

console.log(carros);
console.log(carros[2]);
console.log(carros[2].modelo);