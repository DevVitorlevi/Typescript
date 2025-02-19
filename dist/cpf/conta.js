"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    constructor(titular) {
        this.Numero = this.GeraNumero();
        this.Titular = titular;
        this.saldo_C = 0;
    }
    GeraNumero() {
        return Math.floor(Math.random() * 1000) + 1;
    }
    get saldo() {
        return this.saldo_C;
    }
    set saldo(saldo_C) {
        this.saldo_C = saldo_C;
    }
    deposito(valor) {
        if (valor < 0) {
            console.log('valor Inválido');
            return;
        }
        this.saldo_C += valor;
    }
    saque(valor) {
        if (valor <= this.saldo_C) {
            if (valor < 0) {
                console.log('valor Inválido');
                return;
            }
            this.saldo_C -= valor;
        }
        else {
            console.log('Impossivel Sacar');
        }
    }
}
exports.default = Conta;
class Conta_PF extends Conta {
    constructor(titular, cpf) {
        super(titular);
        this.cpf = cpf;
    }
    info() {
        console.log(`Titular: ${this.Titular}`);
        console.log(`Numero Da Conta ${this.GeraNumero()}`);
        console.log(`CPF ${this.cpf}`);
        console.log(`Saldo: ${this.saldo_C} R$`);
        console.log('--------------------------------');
    }
    deposito(valor) {
        if (valor >= 5000) {
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
class Conta_PJ extends Conta {
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
//instanciar
//Public: Acesso em qualque local
//Private: Acesso somente na Sua Classe
//Protected: propia classe e classe filho
