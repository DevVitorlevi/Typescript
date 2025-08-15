export class Empresa {
    readonly name: string
    private readonly collaborators: Collaborators[] = []
    protected readonly cnpj: string

    constructor(name: string, cnpj: string) {
        this.name = name
        this.cnpj = cnpj
    }

    addCollaborator(collaborator: Collaborators): void {
        this.collaborators.push(collaborator)
    }

    showCollaborators(): void {
        this.collaborators.map(item => {
            console.log(item)
        })
    }

}

export class Collaborators {
    constructor(public readonly name: string, public readonly subname: string, public age: number) { }
}


const Empresa1 = new Empresa('Poligono', '11.111.111/0001-11')

const Colab = new Collaborators('VT', '69', 17)
const Colab2 = new Collaborators('CR', 'DC', 17)
const Colab3 = new Collaborators('Jota', 'Mutamba', 17)

Empresa1.addCollaborator(Colab)
Empresa1.addCollaborator(Colab2)
Empresa1.addCollaborator(Colab3)
console.log(Empresa1)
Empresa1.showCollaborators()