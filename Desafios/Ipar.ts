const Nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function returnIndexandPar(arr: number[]) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0 && i % 2 == 0) {
            result.push(arr[i])

        }
    }
    return result
}

console.log(returnIndexandPar(Nums))