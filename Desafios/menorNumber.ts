const nume: number[] = [10, 11, -1, -10]

function MenorNumber(arr: number[]): number {
    let menor = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < menor) {
            menor = arr[i]
        }
    }
    return menor
}

console.log(MenorNumber(nume))