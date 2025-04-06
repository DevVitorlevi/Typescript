type StatusPedido = 'Pendente' | 'Aprovado' | 'Cancelado'

type Pedido = {
    readonly id: number,
    cliente: string,
    status: StatusPedido
}

type ProcessarPedido = (pedido: Pedido) => string

const processarPedido: ProcessarPedido = (pedido) => {
    switch (pedido.status) {
        case "Pendente":
            return "Aguardando Aprovação"
            break
        case "Aprovado":
            return "Pedido Aprovado"
            break
        case "Cancelado":
            return 'Pedido Cancelado'
    }
}

const Cliente: Pedido = {
    id: 1,
    cliente: 'Vitor',
    status: 'Aprovado'
}

console.log(`Olá ${Cliente.cliente} seu pedido está ${processarPedido(Cliente)}`)
