var sha256 = require('js-sha256');

const prototypeHashes = {
    1: '0',
    2: '00',
    3: '000',
    4: '0000',
    5: '00000',
    6: '000000',
    7: '0000000',
    8: '00000000',
    9: '000000000',
    10: '0000000000',
}

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
        if (hashObj.hash.substring(0, number) === prototypeHashes[number]) flag = false;
        hashObj.iterationCounter++;
    }

    var end = Date.now()

    hashObj.executionTime = end - start;

    return hashObj;
}


console.log(findHash(2)); //Inserte un número para encontrar el hash