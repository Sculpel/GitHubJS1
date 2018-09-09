//Напишите скрипт, который:
//Вызовет prompt с вопросом “Какой будет фон у страницы?” и заменит на введенный цвет фон body
//﻿Вызовет prompt с вопросом “Какой будет цвет текста на странице?” и заменит цвет текста у всего .page на введенный
//﻿Вызовет prompt с вопросом “Как зовут человека, который вас вдохновляет” и вставит введенное имя в span с классом name
//﻿Вызовет prompt с вопросом “Введите адрес картинки” и подставит введенную картинку в тег img, изменив текущий атрибут
//﻿Вызовет prompt с вопросом “Введите текст страницы” и вставит введенный текст в блок .shortBio
//﻿Присвоит класс animated к элементу с классом shortBio, так чтобы анимация границы заработала, а текущие стили параграфа сохранились


<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css"> 

  </head>

  <body>
    <div class="page">
      let cvet = prompt('Какой ты хочешь цвет?');
    page.style['background-color'] = cvet;

      <header class="header">
        <h1>The person who inspires me is: <span class="name"></span></h1>
      </header>
      <main class="content">
        <div class="imageBlock">
          <img src="https://thumbs.dreamstime.com/b/unknown-businessman-avatar-profile-picture-black-white-illustration-35616527.jpg">
          <p class="shortBio">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur eius fugiat incidunt consectetur blanditiis excepturi dolorum quia rerum atque minima. Quos repudiandae tempore quia odit quibusdam iusto iste mollitia ipsum?</p>
        </div>
      </main>
    </div>
  </body>

</html>