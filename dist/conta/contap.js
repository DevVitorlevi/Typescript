"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conta_1 = __importDefault(require("./conta"));
class conta_premium extends conta_1.default {
    static tarifa(valor) {
        const desconto = valor * 0.2;
        return valor - desconto;
    }
}
exports.default = conta_premium;
