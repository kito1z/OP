'use strict';

const methods = (iface) => {
  let result = []
  for (const key in iface){
    const value = iface[key]
    if(typeof value !== "function") continue
    result.push([key,value.length])
  }
  return result
};

module.exports = { methods };
