'use strict';


const random = (min, max) => {
  return Math.floor(min + Math.random() * (max - min + 1));
};

const generateKey = (length, possible) => {
  let key = "";
  for (let i = 0; i < length; i++) {
    key += possible[random(0, possible.length - 1)];
  }
  return key;
};

module.exports = { generateKey };
