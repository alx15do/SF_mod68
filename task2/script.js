const consoleLog = document.querySelector('#consoleLog');
consoleLog.onclick = function() {
	alert('Служит для вывода информации в консоль');
}

const elem1 = document.querySelector('#alert');
elem1.onclick = function() {
	alert('Служит для вывода инфорамции в alert');
}

const elem2 = document.querySelector('#prompt');
elem2.onclick = function() {
	alert('Служит для вывода инфорамции в prompt');
}
