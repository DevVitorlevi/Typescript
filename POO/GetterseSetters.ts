export class Person {
    constructor(public name: string, private _cpf: string, private _idade: number) {
    }

    set cpf(cpf: string) {
        this._cpf = cpf
    }

    get cpf(): string {
        return this._cpf
    }

    set idade(idade: number) {
        this._idade = idade
    }

    get idade(): number {
        return this._idade
    }
}

const P1 = new Person('Vitor', '088-022-853-90', 17)
P1.cpf = '12345678-99'
P1.idade = 20
console.log(P1)
console.log(P1.cpf)
