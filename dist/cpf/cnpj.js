"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conta_1 = __importDefault(require("./conta"));
class Conta_PJ extends conta_1.default {
    constructor(titular, cnpj) {
        super(titular);
        this.cnpj = cnpj;
    }
    info() {
        console.log(`Titular: ${this.Titular}`);
        console.log(`Numero Da Conta ${this.GeraNumero()}`);
        console.log(`CNPJ ${this.cnpj}`);
        console.log(`Saldo: ${this.saldo_C} R$`);
        console.log('----------------------------');
    }
    deposito(valor) {
        if (valor >= 10000) {
            console.log('Valor Do Deposito é Muito Alto');
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        super.saque(valor);
    }
}
exports.default = Conta_PJ;
