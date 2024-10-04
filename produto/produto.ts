export default class Produto{
    private cod?:number
    private nome?:string
    private quant?:number
    private preco?:number

    setinfo(cod:number,nome:string,quant:number,preco:number):void{
        this.cod = cod
        this.nome! = nome
        this.quant! = quant
        this.preco! = preco
    }

    getinfo():[number,string,number,number]{
        return[this.cod!,this.nome!,this.quant!,this.preco!]
    }
}