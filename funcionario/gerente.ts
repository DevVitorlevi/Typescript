import funcionario from "./funcionario";
export default class gerente extends funcionario{
    static csalario(thora:number,tdia:number):number{
        return (thora*tdia) + (thora*tdia)*0.2
    }
}