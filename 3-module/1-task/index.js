/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  filtered = data.filter(elem => elem.age <= age);
  let res = '';
  filtered.map(elem => res += elem.name + ', ' + elem.balance + '\n');
  return res.trim();
}
