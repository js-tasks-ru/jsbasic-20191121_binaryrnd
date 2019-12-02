/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  let c = 0;
  for (let key in obj) {
    c++;
  }
  if (!c) {
    return true;
  } else {
    return false;
  }
}

const obj = {
  test: true,
};

console.log(isEmpty(obj));
