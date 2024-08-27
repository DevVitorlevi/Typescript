abstract class Veiculo {
    Nome:string
    Cor:string
    constructor(Nome:string,cor:string) {
        this.Nome=Nome
        this.Cor=cor 
    }
    abstract Info():any
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
        this.velo-=10
    }
    Acelerar(){
        this.velo+=20
    }
    Info(){

    }
}
const Car = new Carro('Vermelho','Azul')
Car.Freiar()
Car.Freiar()
Car.Freiar()
Car.Acelerar()
Car.Acelerar()
Car.Info()  