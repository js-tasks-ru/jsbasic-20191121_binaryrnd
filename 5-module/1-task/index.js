/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let trs = table.getElementsByTagName('tr');
  for (let tr of trs) {
    if (tr.children[1].innerHTML < 18) {
      tr.style.textDecoration = 'line-through';
    }
					
    switch (tr.children[2].innerHTML) {
    case 'm':
      tr.classList.add('male');
      break;
    case 'f':
      tr.classList.add('female');
      break;
    }
					
    if (tr.children[3].hasAttribute('data-available')) {
      switch (tr.children[3].dataset.available) {
      case 'true':
        tr.classList.add('available');
        break;
      case 'false':
        tr.classList.add('unavailable');
        break;
      }
    } else {
      tr.hidden = true;
    }
				
  }
}