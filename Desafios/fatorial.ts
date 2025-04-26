function Fat(num: number): number {
    let result: number = 1

    for (let i = num; i >= 1; i--) {
        result *= i
    }

    return result
}

console.log(Fat(4))