"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Veiculo_1 = __importDefault(require("./Veiculo"));
const Veiculo_2 = __importDefault(require("./Veiculo"));
const Car = new Veiculo_1.default("Siena", "Preto");
Car.Acelerar();
Car.Acelerar();
Car.Acelerar();
Car.Freiar();
Car.Info();
//
const Mt = new Veiculo_2.default('Bros', 'Vermelha');
const Mt1 = new Veiculo_2.default('Titan 160', 'Vermelha');
Mt.Freiar();
Mt.Acelerar();
Mt.Info();
//
Mt1.Freiar();
Mt1.Acelerar();
Mt1.Info();
