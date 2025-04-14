const arr: number[] = [20, 21, 22, 23, 24]

function Filtrar(arr: number[]) {
    let arrImpar: number[] = []
    let arrPar: number[] = []

    let SomaImpar: number = 0
    let SomaPar: number = 0

    arr.map((num: number) => {
        if (num % 2 == 0) {
            arrPar.push(num)
            SomaPar = arrPar.reduce((acc, val) => acc + val)
        }
        else {
            arrImpar.push(num)
            SomaImpar = arrImpar.reduce((acc, val) => acc + val)
        }
    })

    return console.log(`Numeros Impares: ${arrImpar.join()} e a Soma deles é: ${SomaImpar}; Numeros Pares: ${arrPar.join()} e a soma deles é: ${SomaPar}`)
}

Filtrar(arr)

