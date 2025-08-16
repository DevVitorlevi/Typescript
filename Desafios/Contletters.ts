function countletters(char: string, sentece: string): number {
  let count = 0;
  for (let i = 0; i < sentece.length; i++) {
    if (char === sentece.charAt(i)) {
      count++;
    }
  }
  return count;
}

console.log(countletters('C', 'Csa'));

//O método charAt() retorna o caractere especificado a partir de uma string.
