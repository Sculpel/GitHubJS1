console.log('You are at'+window.location);
//Помните скрипт про покупки яблок и хлеба? 
//Теперь перепишите его в виде функции под названием haveEnough
//В качестве аргументов используйте все входные параметры этого скрипта, перечислив их в скобках через запятую
//Функция должна возвращать “Вам хватает денег на покупки” (если хватает) или “Вам не хватает денег”, если не хватает
a = prompt('Сколько у вас с собой денег?')
b = prompt('Сколько вы купили яблок')
v = prompt('Батонов хлеба')
b1 = prompt('цена яблока')
b2 = b1*b
v1 = prompt('цена батона')
v2 = v1*v


let haveEnough = (sum_1,sum_2) => sum_1+sum_2;


c = haveEnough(b2,v2);

switch(a>=c){
	case true:
	console.log('Вам хватает денег на покупки');
	break;
	case false:
	console.log('Вам не хватает денег');
	break;

}