const nome: string = "Joaquim";
const idade: number = 32;
const adulto: boolean = true;

//Objetos 

let pessoa: { nome: string, idade: number, adulto?: boolean } = {
    nome: "Joaquim",
    idade: 32
}

//Funções

function soma(a: number, b: number): number {
    return a + b
}

//Arrays

let ArrayNumber: number[] = [1, 2, 3, 4, 5]
let ArrayString: string[] = ["a", "b", "c"]
let ArrayNumber2: Array<number> = [1, 2, 3, 4, 5]
let ArrayString2: Array<string> = ["a", "b", "c"]