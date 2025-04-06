type Pessoa = {
    name: string,
    nascimento: number
}

type CalcularIdade = (anoAtual: number, Pessoa: Pessoa) => number

const calcularIdade: CalcularIdade = (anoAtual, Pessoa) => {
    return anoAtual - Pessoa.nascimento
}


const Pessoa1: Pessoa = {
    name: 'Vitor',
    nascimento: 2008
}


console.log(`O ${Pessoa1.name} nasceu em ${Pessoa1.nascimento} sua idade é: ${calcularIdade(2025, Pessoa1)} `)