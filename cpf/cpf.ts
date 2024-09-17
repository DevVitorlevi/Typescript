class Conta{
    protected Numero:number
    protected Titular:string
    protected saldo_C:number
    constructor(titular:string){
        this.Numero = this.GeraNumero()
        this.Titular =titular
        this.saldo_C = 0
    }
    protected GeraNumero():number{
        return Math.floor(Math.random()*1000)+1
    }
    get saldo():number{
        return this.saldo_C
    } 
    set saldo(saldo_C:number){
        this.saldo_C = saldo_C
    }
    protected deposito(valor:number){
        if(valor <0){
            console.log('valor Inválido')
            return
        }
        this.saldo_C+=valor
    }
    protected saque(valor:number){

        if(valor <= this.saldo_C){
            if(valor <0){
            console.log('valor Inválido')
            return
        }
            this.saldo_C-=valor
        }else{
            console.log('Impossivel Sacar')
        }
    }
}
class Conta_PF extends Conta{
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
class Conta_PJ extends Conta{
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
//instanciar
const PF = new Conta_PF('Vitor','774-829-133-00')
const PJ = new Conta_PJ('Vitor','98. 980. 476/0001-00')

PF.saldo=10000
PF.deposito(2000)
PF.saque(1000)
PJ.deposito(6000)
PJ.saque(3000)
PF.info()
PJ.info()

//Public: Acesso em qualque local
//Private: Acesso somente na Sua Classe
//Protected: propia classe e classe filho