﻿Учебный проект, посвященный созданию сервера API с помощью Node.js, а так же был подключен фреймворк для разработки серверного кода - Express.
   Демо-версия:
 https://github.com/MarussiaZhiganova/project_12
   Версия: 0.0.1
   Краткая информация о проекте.
ПО для выполнения работы:  
<li>   Git   <li>   Express   <li>   NPM-пакеты

 Инструкция по запуску:  
<li>  
точка входа: app.js  
<li>  
команда npm app.js запускает сервер на `localhost:3000`и загружается фронтенд проекта Mesto
<li>  
в ответ на запрос `GET localhost:3000/users` сервер вернёт JSON-объект из файла users.json;
<li>  
в ответ на запрос `GET localhost:3000/cards` сервер вернёт JSON-объект из файла cards.json;
<li>  
в ответ на запрос `GET localhost:3000/users/8340d0ec33270a25f2413b69`, сервер вернёт JSON-объект пользователя с переданным после `/users` идентификатором.
