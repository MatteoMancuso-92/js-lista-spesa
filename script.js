const arrList = [
	'pomodori',
	'funghi',
	'latte',
	'carne',
	'caffè',
	'peperoni',
	'biscotti',
	'salmone',
	'pasta',
];

const eleList = document.querySelector('#list');

// soluzione con il ciclo for
for (let i = 0; i < arrList.length; i++) {
	console.log(arrList[i]);
	eleList.innerHTML += `<li>${arrList[i]}</li>`;
}

// soluzione con il ciclo while
let i = 0;
while (i < arrList.length) {
	console.log(arrList[i]);
	eleList.innerHTML += `<li>${arrList[i]}</li>`;
	i++;
}