"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const funcionario_1 = __importDefault(require("./funcionario"));
class gerente extends funcionario_1.default {
    static csalario(thora, tdia) {
        return (thora * tdia) + (thora * tdia) * 0.2;
    }
}
exports.default = gerente;
