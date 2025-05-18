const Nums: number[] = [2, 3, 5, 5, 7, 7, 1, 9, 10, 11];
type obj = {
    [key: number]: number
}
function returnIndexandPar(arr: number[]) {
    let obj: obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && i % 2 === 0) {
            obj[`${i}`] = arr[i];
        }
    }
    return obj;
}

console.log(returnIndexandPar(Nums))
