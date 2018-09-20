console.log('You are at'+window.location);

//Создайте форму, которая будет по сабмиту рассчитывать синус введенного в input угла. 
//Вам понадобится найти этот метод объекта Math

const form = document.forms[0];
console.log(form);
let ug = document.querySelector('.total');

form.onsubmit=function(e) {
	e.preventDefault();//эта строчка не дает коду пропадать почему-то!
	let pp = Math.sin(form.elements.ugol1.value);
	ug.innerHTML = pp
} 