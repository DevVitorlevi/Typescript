"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_1 = __importDefault(require("./get"));
var c1 = new get_1.default("Relâmpago Marquinhos", 1);
var c2 = new get_1.default("Pálio 2 Portas", 2);
var c3 = new get_1.default("BMW", 3);
var c4 = new get_1.default("Tanque", 4);
console.log(c1.getInfo());
