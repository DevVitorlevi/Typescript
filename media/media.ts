export default class Medias {

    static calcularMedia(a: number, b: number): number;
    static calcularMedia(a: number, b: number, c: number): number;
    static calcularMedia(a: number, b: number, c: number, d: number): number;


static calcularMedia(a: number, b: number, c?: number, d?: number): number { //c? e d? indica parametros opcionais
    if (d != undefined) {
    
    return (a + b + c! + d) / 4;//c! para garantir que o c nao sera undefined ou null
    } else if (c != undefined) {
    
    return (a + b + c) / 3;
    } else {
    
    return (a + b) / 2;
    }
}
}

