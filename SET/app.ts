import Car from "./set";

var c1 = new Car ("Relâmpago Marquinhos",1)
var c2 = new Car ("Pálio 2 Portas",2)
var c3 = new Car ("BMW",3)
var c4 = new Car ("Tanque",4)

c1.setNome("UNO")
c1.setTipo("Popular")
c1.setVelo(500)
// Nesta ocasião a alteração de propiedade acontece mudando os valores definidos anteriomente
c1.info()