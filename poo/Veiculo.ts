abstract class Veiculo {
    Nome:string
    Cor:string
    constructor(Nome:string,cor:string) {
        this.Nome=Nome
        this.Cor=cor 
    }
    abstract Freiar():void
    abstract Acelerar():void

}
class Carro extends Veiculo{
    ligado:boolean
    velo:number
    constructor(Nome:string,cor:string){
        super(Nome,cor)
        this.ligado =true
        this.velo=0
    }
    Ligar(){
        this.ligado =true
    }
    Desligado(){
        this.ligado=false
    }
    Freiar() {
        if(this.ligado == true){
        this.velo -=10
    }  
    }
    Acelerar(){
        if(this.ligado == true){
            this.velo +=20
    }
    }
    Info(){
        console.log(`Nome: ${this.Nome}`)
        console.log(`Cor: ${this.Cor}`)
        console.log(`Ligado: ${(this.ligado)? 'Sim' : 'Não'}`)
        console.log(`Velocidade: ${this.velo} KM/H`)
        console.log('--------------------------------')
    }
}
class Moto extends Carro{}

const Car = new Carro("Siena","Preto")
Car.Acelerar()
Car.Acelerar()
Car.Acelerar()
Car.Freiar()
Car.Info()
//
const Mt = new Moto('Bros','Vermelha')
const Mt1 = new Moto('Titan 160','Vermelha')
Mt.Freiar()
Mt.Acelerar()
Mt.Info()
//
Mt1.Freiar()
Mt1.Acelerar()
Mt1.Info()