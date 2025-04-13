function simboloMais(quant: number): string {
    let result = ''

    for (let i = 0; i < quant; i++) {
        result += '+'
    }

    return result
}

console.log(simboloMais(3))