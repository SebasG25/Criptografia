const isPrime = num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const findPrimeNumbers = numberLimit => {
    var primeNumbers = []

    for (let i = 2; i < numberLimit; i++) {
        if (isPrime(i)) primeNumbers.push(i)
    }

    return primeNumbers
}

const calculatePrimeFactors = number => {
    var factorsOfNumber = findPrimeNumbers(number).filter(primeNumber => number % primeNumber === 0)

    return factorsOfNumber
}

const getRandomNumberByDigits = digits => {
    var randomNumber;

    if (digits === 1) {
        randomNumber = Math.floor(Math.random() * (10 - 1)) + 1;
    } else if (digits === 2) {
        randomNumber = Math.floor(Math.random() * (100 - 10)) + 10;
    } else if (digits === 3) {
        randomNumber = Math.floor(Math.random() * (1000 - 100)) + 100;
    } else if (digits === 4) {
        randomNumber = Math.floor(Math.random() * (10000 - 1000)) + 1000;
    } else if (digits === 5) {
        randomNumber = Math.floor(Math.random() * (100000 - 10000)) + 10000;
    } else if (digits === 6) {
        randomNumber = Math.floor(Math.random() * (1000000 - 100000)) + 100000;
    } else if (digits === 7) {
        randomNumber = Math.floor(Math.random() * (10000000 - 1000000)) + 1000000;
    } else if (digits === 8) {
        randomNumber = Math.floor(Math.random() * (100000000 - 10000000)) + 10000000;
    } else if (digits === 9) {
        randomNumber = Math.floor(Math.random() * (1000000000 - 100000000)) + 100000000;
    } else if (digits === 10) {
        randomNumber = Math.floor(Math.random() * (10000000000 - 1000000000)) + 1000000000;
    } else if (digits === 11) {
        randomNumber = Math.floor(Math.random() * (100000000000 - 10000000000)) + 10000000000;
    } else if (digits === 12) {
        randomNumber = Math.floor(Math.random() * (1000000000000 - 100000000000)) + 100000000000;
    } else
        randomNumber = Math.floor(Math.random() * (10000000000000 - 1000000000000)) + 1000000000000;

    return randomNumber;
}

const main = () => {
    for (let i = 1; i <= 13; i++) {
        var randomNumber = getRandomNumberByDigits(i);
        var start = Date.now()
        var primeFactors = calculatePrimeFactors(randomNumber);
        var end = Date.now()
        var executionTime = end - start;
        console.log(`Tiempo de ejecución : ${executionTime}ms para ${i} digitos con ${primeFactors ? primeFactors : "ningún número"} como factores primos para el número ${randomNumber}`);
    }
}

console.log(main());
