enum Cores {
    Roxo = 'Roxo',
    Verde = 0,
    Azul,
    Vermelho = 202,
}

function escolhaACor(cor: Cores): void {
    console.log(Cores[cor])
}

escolhaACor(Cores.Vermelho)