"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Medias {
    static calcularMedia(a, b, c, d) {
        if (d != undefined) {
            return (a + b + c + d) / 4; //c! para garantir que o c nao sera undefined ou null
        }
        else if (c != undefined) {
            return (a + b + c) / 3;
        }
        else {
            return (a + b) / 2;
        }
    }
}
exports.default = Medias;
