type ID = number
type Status = 'Ativo' | 'Inativo'

type Usuario = {
    id: ID,
    name: string,
    status: Status
}

function exibirUser(user: Usuario) {
    console.log(`${user.id} ${user.name} ${user.status}`)
}

const User1: Usuario = {
    id: 1,
    name: 'Vitor',
    status: "Ativo"
}

exibirUser(User1)

//Basicamente, o alias no TypeScript é parecido com os literais no sentido de definir tipos, mas em vez de limitar uma variável a valores específicos, a ideia aqui é criar um tipo com um nome próprio. Isso deixa o código mais organizado, fácil de entender e reutilizável.

