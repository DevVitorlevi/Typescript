"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conta_1 = __importDefault(require("./conta"));
const contap_1 = __importDefault(require("./contap"));
console.log("Valor da Conta Padrão", conta_1.default.tarifa(100));
console.log("Valor da Conta Premium", contap_1.default.tarifa(100));
