abstract class Veiculo {
    Nome:string
    Cor:string
    constructor(Nome:string,cor:string) {
        this.Nome=Nome
        this.Cor=cor 
    }
    abstract Freiar(): any
    abstract Acelerar():any

}
class Carro extends Veiculo{
    ligado:boolean
    velo:number
    constructor(Nome:string,cor:string){
        super(Nome,cor)
        this.ligado =true
        this.velo=0
    }
    Freiar() {
        console.log('Freio')
    }
    Acelerar(){
        console.log('acerela')
    }
}
const Car = new Carro('Vermelho','Azul')
Car.Freiar()