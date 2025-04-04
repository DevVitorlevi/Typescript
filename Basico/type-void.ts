function semretorno(...agrs: string[]): void {
    console.log(...agrs.join(' '))
}
semretorno('Vitor', 'Levi')
//Void significa que uma function não terá retorno, é semanticamente é importante dixar explixito, mas o ts entende se for implicito