"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const livro_1 = __importDefault(require("./livro"));
const Book_1 = new livro_1.default();
const Book_2 = new livro_1.default();
const Book_3 = new livro_1.default();
const Book_4 = new livro_1.default();
const Book_5 = new livro_1.default();
Book_1.setInfo(69, 'A Volta de Quem Não Foram', 'xxxxx', 'xxxxx', 1900);
Book_2.setInfo(79, 'Corrida Dos Alejados', 'xxxxx', 'xxxxx', 1200);
Book_3.setInfo(39, 'Água Seca', 'xxxxx', 'xxxxx', 1721);
Book_4.setInfo(365, 'As Rodovias Do Mar', 'xxxxx', 'xxxxx', 2021);
Book_5.setInfo(335, 'Pescadores do Deserto', 'xxxxx', 'xxxxx', 2022);
console.log(Book_1.getInfo());
console.log(Book_2.getInfo());
console.log(Book_3.getInfo());
console.log(Book_4.getInfo());
console.log(Book_5.getInfo());
