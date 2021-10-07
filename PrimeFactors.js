const esPrimo = (num) => {

    for (let i = 2; i <= num - 1; i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}

const findPrimeNumbers = (numberLimit) => {
    var primeNumbers = []

    for (let i = 2; i <= numberLimit; i++) {
        if (esPrimo(i)) primeNumbers.push(i)
    }

    return primeNumbers
}

const calculatePrimeFactors = (number) => {
    var factorsOfNumber = findPrimeNumbers(number).filter((primeNumber) => number % primeNumber === 0)

    return factorsOfNumber
}



console.log(calculatePrimeFactors(4512));
