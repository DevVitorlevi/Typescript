export default class Animal {
    private nome?:string

    getnome(){
        return this.nome
    }
    setnome(nome:string){
        this.nome = nome
    }
}