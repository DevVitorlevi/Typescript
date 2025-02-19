"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const funcionario_1 = __importDefault(require("./funcionario"));
const gerente_1 = __importDefault(require("./gerente"));
console.log(funcionario_1.default.csalario(100, 10));
console.log(gerente_1.default.csalario(100, 10));
