function sortNumber(num: number) {
    let numcompare = Math.floor(Math.random() * 10) + 1
    if (num === numcompare) {
        return console.log(`Parabens! O Numero Sorteado foi: ${numcompare}`)
    }

    return console.log(`Que Pena O Numero Sorteado Foi:$ s{numcompare}`)
}

sortNumber(5)