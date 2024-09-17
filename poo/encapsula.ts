class Computador{
    private id:number
    public nome:string
    private ram:number
    private cpu:number
    private ligado:boolean

    constructor(nome:string,ram:number,cpu:number){
        this.nome = nome
        this.ram = ram
        this.cpu = cpu
        this.ligado=true
        this.id =0 

    }
    info():void{
        console.log(`Nome:${this.nome}`)
        console.log(`Ram:${this.ram}`)
        console.log(`Cpu:${this.cpu}`)
        console.log(`Ligado:${this.ligado?'Sim':'Não'}`)
        console.log('---------------------------')
    }
    ligando():void{
        this.ligado=true
    }
    desligando():void{
        this.ligado=false
    }
}

//istanciar
const comp1 = new Computador('Ryzen',16,100)

comp1.info()
comp1.ligando()