const elem = document.querySelector('a.link');

elem.addEventListener('click', 
  (event) => {
    event.preventDefault();
    const userText = prompt('Введите наименование ссылки');
	elem.textContent = userText;
	elem.classList.add('changed');
	console.log('Текст ссылки изменён на', userText);    
});

// второй вариант
/* 
const elem = document.querySelector('a');

elem.onclick = function() {
	const userText = prompt('Введите наименование ссылки');
	elem.textContent = userText;
	console.log('Текст ссылки изменён на', userText);
}
*/

