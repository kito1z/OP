'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = ()=>{
    const obj = {name: "Ivan"}
    let obj2 = {name: "Olha"}

    obj.name = "Jhon"
    obj2.name = "Mike"

    console.dir(obj)
    console.dir(obj2)

    obj2 = {name: "Steave"}
    try{
        obj = {name: "Marcus"} //will throw exception
    }catch(e){
        console.error("Can't change const value")
    }
}

module.exports = { fn };
