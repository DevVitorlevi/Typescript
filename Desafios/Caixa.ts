type Produto = {
  name: string;
  category: string;
  price: number;
};

type SumValues = (Itens: Produto[]) => number;

const Carrinho: Produto[] = [
  {
    name: 'Geladeira',
    category: 'Eletrodomésticos',
    price: 2800,
  },
  { name: 'Tv', category: 'Eletrodomésticos', price: 1300 },
];

const CheckOut: SumValues = (itens) => {
  return itens.map((itens) => itens.price).reduce((acc, val) => acc + val);
};

console.log(CheckOut(Carrinho));
