const Numeros: number[] = [10, 20, 30, 40, 50]

function SomaArr(arr: number[]): number {

    let soma = arr.reduce((acc, val) => acc + val)
    return soma
}


console.log(SomaArr(Numeros))
