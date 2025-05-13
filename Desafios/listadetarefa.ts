type ItemLista = {
    nome:string,
    quant:number
}

function adicionarItem(arr:ItemLista[],item:ItemLista):ItemLista[]{
    arr.push(item)
    return arr
}

let Lista:ItemLista[] = [
    {
        nome:'Arroz Branco',
        quant:2
    }
]

const novoProduto:ItemLista = {
    nome:'Item',
    quant:1
}

Lista = adicionarItem(Lista,novoProduto)

console.log(Lista)