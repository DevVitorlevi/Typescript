const nome: string = "Joaquim";
const idade: number = 32;
const adulto: boolean = true;
console.log(nome, idade, adulto)
//Objetos 

let pessoa: { nome: string, idade: number, adulto?: boolean } = {
    nome: "Joaquim",
    idade: 32
}
console.log(pessoa.nome)
console.log(pessoa.idade)

//Funções

function soma(a: number, b: number): number {
    return a + b
}
console.log(soma(2, 3))
//Arrays

let ArrayNumber: number[] = [1, 2, 3, 4, 5]
let ArrayString: string[] = ["a", "b", "c"]
let ArrayNumber2: Array<number> = [1, 2, 3, 4, 5]
let ArrayString2: Array<string> = ["a", "b", "c"]

console.log(ArrayNumber)
console.log(ArrayNumber2)
console.log(ArrayString)
console.log(ArrayString2)