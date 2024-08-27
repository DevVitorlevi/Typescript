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
    Ligar() {
        this.ligado = true;
    }
    Desligado() {
        this.ligado = false;
    }
    Freiar() {
        if (this.ligado == true) {
            this.velo -= 10;
        }
    }
    Acelerar() {
        if (this.ligado == true) {
            this.velo += 20;
        }
    }
    Info() {
        console.log(`Nome: ${this.Nome}`);
        console.log(`Cor: ${this.Cor}`);
        console.log(`Ligado: ${(this.ligado) ? 'Sim' : 'Não'}`);
        console.log(`Velocidade: ${this.velo}`);
    }
}
class Moto extends Carro {
    constructor(Nome, cor) {
        super(Nome, cor);
        this.Nome = Nome;
        this.Cor = cor;
    }
}
const Mt = new Moto('Bros', 'Vermelha');
Mt.Freiar();
Mt.Acelerar();
Mt.Info();
