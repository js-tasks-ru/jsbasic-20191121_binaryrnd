/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
  let newObj = {};

  for (key in obj) {
    if (null == obj[key]) { 
      newObj[key] = null;
      continue;
    }

    if (typeof (obj[key]) == 'object') {
      newObj[key] = {};
      for (let elem in obj[key]) {
        newObj[key][elem] = clone(obj[key][elem]);
      }
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
