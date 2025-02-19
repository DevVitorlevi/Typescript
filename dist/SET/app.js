"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const set_1 = __importDefault(require("./set"));
var c1 = new set_1.default("Relâmpago Marquinhos", 1);
var c2 = new set_1.default("Pálio 2 Portas", 2);
var c3 = new set_1.default("BMW", 3);
var c4 = new set_1.default("Tanque", 4);
c1.setNome("UNO");
c1.setTipo("Popular");
c1.setVelo(500);
// Nesta ocasião a alteração de propiedade acontece mudando os valores definidos anteriomente
c1.info();
