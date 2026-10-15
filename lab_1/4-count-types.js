'use strict';

const countTypesInArray = arr => {
    let counter = {};
    for (const element of arr){
        const type = typeof element;
        if(type in counter) counter[type]++;
        else counter[type] = 1;
    }
    return counter;
}

const countTypesInArrayOld = arr=>{
    let counter = {
        boolean: 0,
        string: 0,
        number: 0,
        undefined: 0,
        object: 0,
        function: 0,
        unknown: 0
    }
    for (const element of arr){
        const type = typeof element;
        if(type in counter){
            counter[type]++;
        }else{
            counter.unknown++;
        }
    }
    return counter;
};

module.exports = { countTypesInArray };
