import Carro from "./Veiculo"
import Moto from "./Veiculo"

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