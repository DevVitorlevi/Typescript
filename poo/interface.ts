interface curso{
    readonly nome:string
    readonly desc:string
    aulas:number
    maxalunos?:number
}
//? atributo opcional

let curso1:curso ={
    nome:'TypeScript',
    desc:'Curso TypeScript',
    aulas:100,
    maxalunos:50
}
let curso2:curso ={
    nome:'JavaScript',
    desc:'Curso JavaScript',
    aulas:150,
    maxalunos:80
}
let curso3:curso={
    nome:'Python',
    desc:'Curso Python',
    aulas:150,
}

console.log(curso1)

console.log(curso2)

console.log(curso3)
