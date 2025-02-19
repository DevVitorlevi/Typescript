"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const produto_1 = __importDefault(require("./produto"));
const P1 = new produto_1.default();
P1.setinfo(1, "Farinha", 800, 4.59);
console.log(P1.getinfo());
