function areaTriangle(base: number, heigth: number): string {
    let result = (base * heigth) / 2
    return result.toFixed(2)
}

console.log(areaTriangle(10, 15))