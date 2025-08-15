export class Animal {
    constructor(public name: string, private age: number) { }

    getName(): string {
        return this.name
    }
    getAge(): number {
        return this.age
    }

    getFalar(): void { }
}
export class Dog extends Animal {
    public raca: string

    constructor(name: string, age: number, raca: string) {
        super(name, age)
        this.raca = raca
    }

    getFalar(): void {
        console.log('AUUUU')
    }
}

export class Cat extends Animal {
    getFalar(): void {
        console.log('MIAUUU')
    }
}


const Cachorro = new Dog('Jagunço', 1, 'Rato')
const Gato = new Cat('Sol', 0.1)
Cachorro.getFalar()
Gato.getFalar()
