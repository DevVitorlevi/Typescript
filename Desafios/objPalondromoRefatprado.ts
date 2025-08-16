const list: string[] = ['ola', 'ala', 'eve', 'casa', 'ovo']

console.log(list.filter(w => w === w.split('').reverse().join('')))
