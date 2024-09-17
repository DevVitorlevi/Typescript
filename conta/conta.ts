export default class conta{
    static tarifa(valor:number):number{
        return valor
    }
}
class conta_padrao extends conta{
}
class conta_premium extends conta{
    static tarifa(valor: number):number{
        const desconto:number = valor * 0.2
        return valor - desconto
    }
}

