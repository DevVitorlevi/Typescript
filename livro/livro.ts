export default class Livro{
    private cod?:number
    private title?:string
    private desc?:string
    private autor?:string
    private ano?:number

    getInfo():[number,string,string,string,number]{
        return [this.cod!,this.title!,this.desc!,this.autor!,this.ano!]
        //! Garante que esses atributos nao serão undefined
    }

    setInfo(cod:number,title:string,desc:string,autor:string,ano:number){

        this.cod = cod
        this.title = title
        this.desc = desc
        this.autor = autor
        this.ano = ano 

    }
}