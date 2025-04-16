const Dados: number[] = [0, 10, 20]

function Media(arr: number[]): number {
    let somadoArr = arr.reduce((acc, val) => acc + val)
    return (somadoArr) / arr.length
}

console.log(Media(Dados))