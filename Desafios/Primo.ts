function isPrime(num: number): boolean {
    if (num <= 1) {
        return false;
    }
    // Checa divisores de 2 até a raiz quadrada do número
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function findPrimes(numbers: number[]): number[] {
    return numbers.filter(isPrime);
}

const myNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 17, 20];
const primeNumbers: number[] = findPrimes(myNumbers);

console.log("Números primos encontrados:", primeNumbers);