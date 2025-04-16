function RemoverVogais(word: string) {
    const vogais = ['a', 'e', 'i', 'o', 'u']
    let lowerWord = word.toLowerCase()
    vogais.forEach(item => lowerWord = lowerWord.replace(item, ''))

    return word
}

console.log(RemoverVogais('Ola'))