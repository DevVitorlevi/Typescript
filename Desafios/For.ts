function repeat(element: string | number, quant: number) {
    let result = []

    for (let i = 0; i < quant; i++) {
        result.push(element)
    }

    return result
}

console.log(repeat(1, 3))
console.log(repeat('TS é bom D+', 3))

