type MapCallBack = (item: number) => number

function Map2(array: number[], callback: MapCallBack): number[] {
    let newArray: number[] = []
    for (let i = 0; i < array.length; i++) {
        const item = array[i]

        newArray.push(callback(item))
    }

    return newArray
}

const Numbers: number[] = [2, 4, 6]
const NumbersMapped: number[] = Map2(Numbers, item => item ** 2)

console.log(Numbers)
console.log(NumbersMapped)  