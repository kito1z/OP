//Скалярні типи та посилання
{
    function inc(n){
        return n + 1;
    }
    const a = 5;
    const b = inc(a);
    console.dir({a, b});

    function incDir(num){
        num.n++;
    }

    const obj = {n: 5};
    incDir(obj);
    console.dir(obj);
}

//Підрахунок елементів різних типів у масиві.
{
    const arr = [true, 'hello', -2.3, 5, "Program", 's', 12, undefined, -200, {key: "value"}, false, -3.5, false, 'word', null, undefined, ()=>console.log('Hello')];
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
    console.dir(counter, {maxArrayLength: null});

    //Динамічно
    counter = {};
    for (const element of arr){
        const type = typeof element;
        if(type in counter) counter[type]++;
        else counter[type] = 1;
    }
    console.dir(counter, {maxArrayLength: null});
}