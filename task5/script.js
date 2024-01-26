/*
Для изменения текста в текстовом блоке используйте свойство textContent.
Для получения текста из input и очистки значения в input используйте свойство value.
Пустая строка в JS обозначается как две кавычки — "" или ''.
Для сброса поведения кнопки отправки формы используйте preventDefault().
*/


const elem = document.querySelector('#inputForm');
const out = document.querySelector('#duplicateField > span');
const elSubm = document.querySelector('#submitForm');
//document.querySelector('#duplicateField').value = String.fromCharCode(event.charCode);


elem.addEventListener('keyup', (event) => { 

	out.classList.add('active');
	out.textContent  = elem.value;
	
	if (out.textContent=="") {
		out.classList.remove('active');
	}


});


elSubm.addEventListener('click', () => {
	// console.log('Обработчик кнопки');
	
	if (event.which === 1) {
		event.preventDefault();
		let consTxt = console.log("Вывод в консоль после нажатия левой кнопки: "+out.textContent);
		out.classList.remove('active');
		out.textContent = "";
		elem.value = "";	
	}
});

