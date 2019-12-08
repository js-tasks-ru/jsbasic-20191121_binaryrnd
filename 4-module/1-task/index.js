/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let newUl = document.createElement('ul');
  for (let i = 0; i < friends.length; i++) {
    let newLi = document.createElement('li');
    newLi.textContent = `${friends[i].firstName} ${friends[i].lastName}`;
    newUl.appendChild(newLi);
  }	
  return newUl;
}
