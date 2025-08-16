export class Conta {
    protected saldo: number = 0

    constructor(public number: number, public titular: string) { }

    depositar(valor: number): void {
        if (valor <= 0) {
            console.log(`R$${valor}: Not possible deposit this value`)
        } else {
            this.saldo += valor
            console.log(`R$${valor}: Amount deposited successfully`)
        }
    }

    sacar(valor: number): void {
        if (valor <= 0) {
            console.log(`Invalid withdrawal amount`)
            return
        }

        if (valor > this.saldo) {
            console.log(`R$${valor}: Not possible withdraw this value `)
        } else {
            this.saldo -= valor
            console.log(`R$${valor}: Withdrawal made successfully`)
        }
    }

    consultarSaldo(): void {
        console.log(`Your Balance is: ${this.saldo}`)
    }

    getSaldo(): number {
        return this.saldo
    }
}

export class ContaCorrente extends Conta {
    sacar(valor: number): void {
        if (valor <= 0) {
            console.log(`Invalid withdrawal amount`)
            return
        }

        // Pode ficar até -500
        if (this.saldo - valor < -500) {
            console.log(`R$${valor}: Not possible withdraw, limit exceeded`)
        } else {
            this.saldo -= valor
            console.log(`R$${valor}: Withdrawal made successfully`)
        }
    }
}

export class ContaPoupanca extends Conta {
    rendimento(): void {
        const juros = this.saldo * 0.02
        this.saldo += juros
        console.log(`Interest applied. New Balance: R$${this.saldo}`)
    }
}

export class Banco {
    private contas: Conta[] = []

    adicionarConta(conta: Conta): void {
        this.contas.push(conta)
        console.log(`Account ${conta.number} added to the bank`)
    }

    buscarConta(numero: number): Conta | undefined {
        return this.contas.find(c => c.number === numero)
    }

    listarContas(): void {
        console.log("=== List of Accounts ===")
        this.contas.forEach(c => {
            console.log(`Number: ${c.number}, Holder: ${c.titular}, Balance: ${c.getSaldo()}`)
        })
    }
}
