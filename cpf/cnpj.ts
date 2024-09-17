import Conta from "./conta"
export default class Conta_PJ extends Conta{
    private cnpj:string
    constructor(titular:string,cnpj:string){
        super(titular)
        this.cnpj = cnpj
    }
        info():void{
        console.log(`Titular: ${this.Titular}`)
        console.log(`Numero Da Conta ${this.GeraNumero()}`)
        console.log(`CNPJ ${this.cnpj}`)
        console.log(`Saldo: ${this.saldo_C} R$`)
        console.log('----------------------------')
    }
    public deposito(valor: number) {
        if(valor >=10000){
            console.log('Valor Do Deposito é Muito Alto')
        }else{
            super.deposito(valor)
        }
    }
    public saque(valor:number){
        super.saque(valor)
    }
    
}