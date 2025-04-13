function firstAndLast(arr: [number, string, string]) {
    const first = arr.shift()
    const last = arr.pop()

    return [first, last]
}

console.log(firstAndLast([1, 'olá', 'ka']))