export class Empresa {
    readonly name: string
    protected readonly collaborators: Collaborators[] = []
    protected readonly cnpj: string

    constructor(name: string, cnpj: string) {
        this.name = name
        this.cnpj = cnpj
    }

    addCollaborator(collaborator: Collaborators): void {
        this.collaborators.push(collaborator)
    }

    showCollaborators(): void {
        this.collaborators.forEach(item => {
            console.log(item)
        })
    }
}

export class Poligono extends Empresa {
    constructor() {
        super('Poligono', '11.111.111/0001-11')
    }

    popCollaborator(): Collaborators | null {
        const collaborator = this.collaborators.pop()
        return collaborator ?? null
    }
}

export class Collaborators {
    constructor(
        public readonly name: string,
        public readonly subname: string,
        public age: number
    ) { }
}

// Usando a classe Empresa normalmente
const Empresa1 = new Empresa('Poligono', '11.111.111/0001-11')

const Colab1 = new Collaborators('VT', '69', 17)
const Colab2 = new Collaborators('CR', 'DC', 17)
const Colab3 = new Collaborators('Jota', 'Mutamba', 17)

Empresa1.addCollaborator(Colab1)
Empresa1.addCollaborator(Colab2)
Empresa1.addCollaborator(Colab3)

// Aqui não dá para chamar popCollaborator, pois Empresa não tem
// Se quiser usar pop, crie a instância como Poligono:
const Poligono1 = new Poligono()
Poligono1.addCollaborator(Colab1)
Poligono1.addCollaborator(Colab2)
Poligono1.addCollaborator(Colab3)

console.log('Removendo um colaborador:')
console.log(Poligono1.popCollaborator())

console.log('Colaboradores restantes:')
Poligono1.showCollaborators()
