var sha256 = require('js-sha256');

console.log(sha256('Message to hash'));

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
    
    while(flag){
        var hash = '0000sdasd223bxsdf24ff';
        hash.substring(0, number) === prototypeHashes[number] ? 
            flag = false : 
            'create a new hash';
    }
    return hash;
}

console.log(findHash(5));