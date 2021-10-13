var sha256 = require('js-sha256');

const findHash = number => {
    var flag = true;

    var hashObj = {
        hash: '',
        iterationCounter: 0,
        executionTime: 0,
    }

    var start = Date.now()
    
    while(flag){
        hashObj.hash = sha256(Math.random() + '');
        if (hashObj.hash.substring(0, number) === '0'.repeat(number)) flag = false;
        hashObj.iterationCounter++;
    }

    var end = Date.now()

    hashObj.executionTime = end - start;

    return hashObj;
}


console.log(findHash(1)); //Inserte un número para encontrar el hash