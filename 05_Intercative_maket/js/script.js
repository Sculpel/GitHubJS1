/*Ваша задача
1. ﻿Написать такой JS, который по нажатию на кнопку с классом .request изменит стиль блока .popup на строку flex
2. ﻿По нажатию на элемент с классом closePopup — изменит стиль .popup обратно на ‘none’
3. ﻿По нажатию на элемент .openMenu изменит свойство left у элемента .menu на значение 0
4. ﻿По нажатию на элемент .closeMenu — изменит свойство left у .menu обратно на строку ‘-50vw’*/


//const button1 = document.getElementsByClassName('.request');  Селектор по классу опять не работает!!
//console.log(button1);

//1. ﻿Написать такой JS, который по нажатию на кнопку с классом .request изменит стиль блока .popup на строку flex
const button = document.querySelector('.request');
//console.log(button);

const popup = document.querySelector('.popup')
//console.log(popup);

button.addEventListener('click',function(){
	popup.style.display = 'flex';
})

//2. ﻿По нажатию на элемент с классом closePopup — изменит стиль .popup обратно на ‘none’
const closepopup = document.querySelector('.closePopup')

closepopup.addEventListener('click',function(){
	popup.style.display = 'none';
})

//3. ﻿По нажатию на элемент .openMenu изменит свойство left у элемента .menu на значение 0
const openMenu = document.querySelector('.openMenu')
const menu = document.querySelector('.menu')

openMenu.addEventListener('click',function(){
	menu.style.left = 0; 
})
//4. По нажатию на элемент .closeMenu — изменит свойство left у .menu обратно на строку ‘-50vw’*/
const closeMenu = document.querySelector('.closeMenu')

closeMenu.addEventListener('click', function(){
	menu.style.left = '-50vw';
})





