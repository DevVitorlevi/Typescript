const Strings: string[] = ['Java', 'Python', 'JavaScript']

function FindWord(word: string, arr: string[]): string[] {
    const result: string[] = []
    const lowerWord = word.toLowerCase()//colocando a palavra totalmente em minusculo
    arr.forEach(item => {
        if (item.toLowerCase().includes(lowerWord)) {
            result.push(item)
        }
    })
    return result
}

console.log(FindWord('PY', Strings))
