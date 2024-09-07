class funcionario{
    thora:number
    tdia:number
    
    constructor(thora:number,tdia:number){
        this.thora=thora
        this.tdia=tdia
    }
    static csalario(thora:number,tdia:number){
        return thora*tdia
    }

}
class gerente extends funcionario{
    constructor(thora:number,tdia:number){
        super(thora,tdia)
    } 
    static csalario(thora:number,tdia:number){
        return (thora*tdia) + (thora*tdia)*0.2
    }
}
console.log(funcionario.csalario(100,10))
console.log(gerente.csalario(100,10))