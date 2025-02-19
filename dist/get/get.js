"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(cnome, ctipo) {
        this.nome = cnome;
        if (ctipo === 1) {
            this.tipo = "Esportivo";
            this.vel = 300;
        }
        else if (ctipo === 2) {
            this.tipo = "Popular";
            this.vel = 160;
        }
        else if (ctipo === 3) {
            this.tipo = "Picapes";
            this.vel = 110;
        }
        else if (ctipo === 4) {
            this.tipo = "SUV";
            this.vel = 180;
        }
        else {
            this.tipo = "Militar";
            this.vel = 100;
        }
    }
    getInfo() {
        return [this.nome, this.tipo, this.vel];
    }
}
exports.default = Car;
