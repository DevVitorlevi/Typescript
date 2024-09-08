class conta{
    static tarifa(valor:number):number{
        return valor
    }
}
class conta_padrao extends conta{

}
class conta_premium extends conta{
    static tarifa(valor: number):number{
        const desconto = valor * 0.2
        return valor - desconto
    }
}

console.log("Valor da Conta Padrão", conta_padrao.tarifa(100))
console.log("Valor da Conta Premium", conta_premium.tarifa(100))