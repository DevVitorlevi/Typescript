"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cpf_1 = __importDefault(require("./cpf"));
const cnpj_1 = __importDefault(require("./cnpj"));
//instanciar
const PF = new cpf_1.default('Vitor', '774-829-133-00');
const PJ = new cnpj_1.default('Vitor', '98. 980. 476/0001-00');
PF.saldo = 10000;
PF.deposito(2000);
PF.saque(1000);
PJ.deposito(6000);
PJ.saque(3000);
PF.info();
PJ.info();
