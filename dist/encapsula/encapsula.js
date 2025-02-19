"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Computador {
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = true;
        this.id = 0;
    }
    info() {
        console.log(`Nome:${this.nome}`);
        console.log(`Ram:${this.ram}`);
        console.log(`Cpu:${this.cpu}`);
        console.log(`Ligado:${this.ligado ? 'Sim' : 'Não'}`);
        console.log('---------------------------');
    }
    ligando() {
        this.ligado = true;
    }
    desligando() {
        this.ligado = false;
    }
}
exports.default = Computador;
