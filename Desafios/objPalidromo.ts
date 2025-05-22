const tring: string[] = ['ola', 'ala', 'eve', 'casa', 'ovo']
type objeto = { [key: string]: string }

function ReturnObjectPalidromo(arr: string[]): objeto {
    let resultObject: objeto = {}
    let arrayInvert: string[] = []

    for (let i = 0; i < arr.length; i++) {

        let wordinvert = arr[i].split('').reverse().join('')
        arrayInvert.push(wordinvert)

        for (let j = 0; j < arrayInvert.length; j++) {
            if (arrayInvert[j] === arr[i]) {

                resultObject[`Indice do Array${i}`] = arrayInvert[j]
            }
        }
    }
    return resultObject
}

console.log(ReturnObjectPalidromo(tring))

