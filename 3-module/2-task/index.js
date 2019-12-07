/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let re = /[+-]?[1-9]\d*(\.?\d+)?/;
  let res = [];

  while (str.length > 0) {
    let tmp = str.match(re);
    res.push(tmp[0]);  
    str = str.slice(str.indexOf(tmp[0]) + tmp[0].length);
  }

  return {
    min: Math.min(...res),
    max: Math.max(...res),
  };
}

let str = '25,-1,-234,4,   1000';

console.log(getMinMax(str));