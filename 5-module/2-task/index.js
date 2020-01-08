/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  /**
   * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');
  
  let thead = document.createElement('thead');
  let trHead = document.createElement('tr');
  
  thead.appendChild(trHead);
  this.el.appendChild(thead);
  
  for (let key in items[0]) {
    let td = document.createElement('td');
    td.innerHTML = key;
    trHead.appendChild(td);
  }
  
  let tbody = document.createElement('tbody');
  this.el.appendChild(tbody);
  
  for (let person of items) {
    let tr = document.createElement('tr');
    //alert(person.name);
    for (let param in person) {
      let td = document.createElement('td');
      td.innerHTML = person[param];
      tr.appendChild(td);    
    }
    tbody.appendChild(tr);
  } 

  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {
    let rows = this.el.rows;
    let arr = [];
      
    switch (column) {
    case 0:
      arr = Array.from(rows).slice(1).sort((a, b) => (a.cells[column].innerHTML > b.cells[column].innerHTML));
      break;
    case 2:
      arr = Array.from(rows).slice(1).sort((a, b) => (a.cells[column].innerHTML - b.cells[column].innerHTML));
      break;
    }
      
    if (desc == true) {
      arr.reverse();
    }   	      
    tbody.append(...arr);
  };
  
}
