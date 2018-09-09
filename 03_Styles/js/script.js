console.log('You are at'+window.location);


//Напишите скрипт, который:

//1. ﻿Вызовет prompt с вопросом “Какой будет фон у страницы?” и заменит на введенный цвет фон body
const body = document.body
console.log(body);
console.log(body.style);
//body.style.backgroundColor = "green" 
//Так мы пишем если обращаемся через js к объекту

let quest = prompt('What color?')
body.style['background-color'] = quest //это строка, поэтому если присваиваем значение то пишем в кавычках, а промпт уже сам возвращает строку поэтому без кавычек
//а так пишем если обращаемся к свойству css 

//let text_color = prompt("Какой цвет текста?")
//body.style.color = text_color

//const Kalor = document.getElementsByClassName('page');
//console.log(Kalor); 
//Kalor.color = "red";


//2. ﻿Вызовет prompt с вопросом “Какой будет цвет текста на странице?” и заменит цвет текста у всего .page на введенный
const Kolor = document.querySelector('.page');
console.log(Kolor.style);
let text_color = prompt('Какой цвет текста?')
Kolor.style.color = text_color;
//let quest2 = prompt('цвет текста');
//Kolor.stylcolor = quest2;


//3. Вызовет prompt с вопросом “Как зовут человека, который вас вдохновляет” и вставит введенное имя в span с классом name
const Kogo = document.querySelector('.name'); //Выбираем один! элемент а не множество!Тогда можно работать с его html кодом
console.log(Kogo);
let im = prompt('Имя сестра!')
Kogo.innerText = im;

//4. ﻿Вызовет prompt с вопросом “Введите адрес картинки” и подставит введенную картинку в тег img, изменив текущий атрибут
const byTag = document.querySelector('img');
console.log(byTag);
let foto = prompt('вставить картинку');
byTag.src = foto;

//5. Вызовет prompt с вопросом “Введите текст страницы” и вставит введенный текст в блок .shortBio

const Text_main = document.querySelector('.shortBio');
console.log(Text_main);
let new_text = prompt('введите текст страницы');
Text_main.innerHTML = new_text;//можно использовать innerText, а можно innerHTML

//6. ﻿Присвоит класс animated к элементу с классом shortBio, так чтобы анимация границы заработала, а текущие стили параграфа сохранились

Text_main.className += ' animated';









