/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
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
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.data = data;
    
    let thead = document.createElement('thead');
    let trHead = document.createElement('tr');
  
    thead.appendChild(trHead);
    this.el.appendChild(thead);
    this.el.classList.add('pure-table');
    
    for (let key in data[0]) {
      let td = document.createElement('td');
      td.innerHTML = key;
      trHead.appendChild(td);
    }
    
    let td = document.createElement('td');
    trHead.appendChild(td);
    
    let tbody = document.createElement('tbody');
    this.el.appendChild(tbody);    
    
    for (let person of data) {
      let tr = document.createElement('tr');
      for (let param in person) {
        let td = document.createElement('td');
        td.innerHTML = person[param];
        tr.appendChild(td);    
      }
      let td = document.createElement('td');
      let a = document.createElement('a');
      a.innerHTML = 'X';
      a.href = '#delete';
      
      td.appendChild(a);
      tr.appendChild(td);    

      tbody.appendChild(tr);
    } 
	
	
    let buttons = this.el.querySelectorAll('td > a');
    for (let button of buttons) {
      button.onclick = () => {
        button.parentNode.parentNode.remove();
        this.onRemoved(+button.parentNode.parentNode.querySelectorAll('td')[0].innerHTML);
      };
    }
  }

  /**
   * Метод который выщывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {
    alert(`Из таблицы удален пользователь ${id}`);
  }
}

window.ClearedTable = ClearedTable;
