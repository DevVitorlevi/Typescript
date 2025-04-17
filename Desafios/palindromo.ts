function isPalidromo(word: string): boolean {
    let invertWord: string = word.split('').reverse().join('')
    return invertWord === word ? true : false
}

console.log(isPalidromo('arara'))