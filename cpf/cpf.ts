import Conta from "./conta"
export default class Conta_PF extends Conta{
    private cpf:string
    constructor(titular:string,cpf:string){
        super(titular)
        this.cpf = cpf
    }
    info():void{
        console.log(`Titular: ${this.Titular}`)
        console.log(`Numero Da Conta ${this.GeraNumero()}`)
        console.log(`CPF ${this.cpf}`)
        console.log(`Saldo: ${this.saldo_C} R$`)
        console.log('--------------------------------')
    }
    public deposito(valor: number){
        if(valor >=5000){
            console.log('Valor Do Deposito é Muito Alto')
        }else{
            super.deposito(valor)
        }
    }
    public saque(valor:number){
        super.saque(valor)
    }
}