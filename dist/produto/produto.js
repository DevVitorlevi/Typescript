"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    setinfo(cod, nome, quant, preco) {
        this.cod = cod;
        this.nome = nome;
        this.quant = quant;
        this.preco = preco;
    }
    getinfo() {
        return [this.cod, this.nome, this.quant, this.preco];
    }
}
exports.default = Produto;
