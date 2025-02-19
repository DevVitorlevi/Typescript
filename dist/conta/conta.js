"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class conta {
    static tarifa(valor) {
        return valor;
    }
}
exports.default = conta;
class conta_padrao extends conta {
}
class conta_premium extends conta {
    static tarifa(valor) {
        const desconto = valor * 0.2;
        return valor - desconto;
    }
}
