import Conta_PF from "./cpf"
import Conta_PJ from "./cnpj"


//instanciar
const PF = new Conta_PF('Vitor','774-829-133-00')
const PJ = new Conta_PJ('Vitor','98. 980. 476/0001-00')

PF.saldo=10000
PF.deposito(2000)
PF.saque(1000)
PJ.deposito(6000)
PJ.saque(3000)
PF.info()
PJ.info()