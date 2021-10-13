const isPrime = num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const calculatePrimeFactors = number => {
    var primeArray = [];

    for (let i = 2; i <= number; i++) {
        while(number % i === 0 && isPrime(i)){
            primeArray.push(i)
            number /= i;
        }
    }

    return primeArray;
}

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const getRandomNumberByDigits = digits => {
    let initialValue = '1'
    let zero = '0'
    
    let minValue = parseInt(initialValue.concat(zero.repeat(digits !== 1 ? digits-1 : 0)), 10) 
    let maxValue = parseInt(initialValue.concat(zero.repeat(digits !== 1 ? digits : 0)), 10) 

    return random(minValue, maxValue);
}

const main = () => {
    for (let i = 1; i <= 13; i++) {
        var randomNumber = getRandomNumberByDigits(i);
        var start = Date.now()
        var primeFactors = calculatePrimeFactors(randomNumber); //randomNumber
        var end = Date.now()
        var executionTime = end - start;
        console.log(`Tiempo de ejecución: ${executionTime}ms para ${i} digitos con ${primeFactors.length !== 0 ? `[${primeFactors}]` : 'ningún número'} como factores primos para el número ${randomNumber}`);
    }
}

console.log(main());
