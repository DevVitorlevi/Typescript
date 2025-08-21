export class Person {
  constructor(
    public name: string,
    public cpf: string,
    public idade: number,
  ) {}
}

const P1 = new Person('Vitor', '088-022-853-90', 17);
console.log(P1);
console.log(P1.cpf);
