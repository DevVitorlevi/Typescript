const list: string[] = ['ola', 'ala', 'eve', 'casa', 'ovo']

function ReturnjectPalidromo(arr: string[]): objeto {
    let resultObject: objeto = {}

    for (let i = 0; i < arr.length; i++) {

        let original = arr[i]
        let reversed = original.split('').reverse().join('')

        if (original === reversed) {

            resultObject[`Indice do Array ${i}`] = original

        }
    }

    return resultObject
}

console.log(ReturnjectPalidromo(list))
