type User = {
    name: string,
    role: 'admin' | 'aluno' | 'professor'
}

const user: User = {
    name: 'Vitor',
    role: "admin"
}

console.log(user.name)
console.log(user.role)


type daysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'

let today: daysOfWeek
today = 'Saturday'

console.log(today)

function escolheCor(cor: 'Amarelo' | 'Azul' | 'Vermelho'): string {
    return cor
}

console.log(escolheCor("Amarelo"))

//"Basicamente, um tipo literal em TypeScript é como se fosse uma variável que só pode receber algo específico, ao invés de aceitar qualquer string ou number."

//  Ele restringe os valores possíveis a um conjunto fixo e pré-definido, como "ativo" | "inativo", por exemplo.

// Isso ajuda a:

// evitar erros de digitação,

// limitar opções a apenas valores válidos,

// e deixar o código mais claro e seguro. 

