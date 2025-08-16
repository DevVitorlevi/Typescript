export class Conta {
    protected saldo: number = 0
    constructor(public number: number, public titular: string) { }

    depositar(valor: number): void {
        if (valor <= 0) {
            return console.log(`R$${valor}: Not possible deposit this value`)
        } else {
            this.saldo += valor
            console.log(`R$${valor}: Amount deposited successfully`)
        }
    }

    sacar(valor: number): void {
        if (this.saldo <= 0 || valor > this.saldo) {
            return console.log(`R$${valor}: Not possible withdraw this value `)
        } else {
            valor -= this.saldo
            console.log(`R$${valor}: Withdrawal made successfully`)
        }
    }

    consultarSaldo(): void {
        console.log(`Your Balance is: ${this.saldo}`)
    }
}