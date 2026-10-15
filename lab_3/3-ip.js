'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const ipBytes = ip.split(".").map(byte => parseInt(byte));
  return ipBytes.reduce((acc, byte, i)=>{
    const shift = 8*(3-i)
    return acc+(byte<<shift)
  }, 0)
};

module.exports = { ipToInt };
