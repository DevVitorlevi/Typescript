"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Livro {
    getInfo() {
        return [this.cod, this.title, this.desc, this.autor, this.ano];
        //! Garante que esses atributos nao serão undefined
    }
    setInfo(cod, title, desc, autor, ano) {
        this.cod = cod;
        this.title = title;
        this.desc = desc;
        this.autor = autor;
        this.ano = ano;
    }
}
exports.default = Livro;
