"use strict";
class Veiculo {
    constructor(Nome, cor) {
        this.Nome = Nome;
        this.Cor = cor;
    }
}
class Carro extends Veiculo {
    constructor(Nome, cor) {
        super(Nome, cor);
        this.ligado = true;
        this.velo = 0;
    }
    Freiar() {
        console.log('Freio');
    }
    Acelerar() {
        console.log('acerela');
    }
}
const Car = new Carro('Vermelho', 'Azul');
Car.Freiar();
