type U = {
  readonly id: number;
  name: string;
  idade: number;
};

const uer: U = {
  id: 1,
  name: 'Vitor',
  idade: 16,
};

console.log(Object.keys(uer));
//Basicamente irá guardar em um array suas chaves(propiedades)
