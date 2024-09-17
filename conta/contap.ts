import conta from "./conta"

export default class conta_premium extends conta{
    static tarifa(valor: number):number{
        const desconto:number = valor * 0.2
        return valor - desconto
    }
}