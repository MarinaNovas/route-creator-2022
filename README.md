# Тестовое задание на позицию frontend разработчика

### Ответы на теорию по ссылке: https://github.com/MarinaNovas/answers-funbox-questions

This is a simple responsive single page React application in which the user can interactively create a route on a map.

This project is a test exercise for front-end developer position. It is called Route-creator-2022, but it doesn’t create some exist route that you can use in your real life or traveling.   In this application, we just connects points, in a given order, by a polyline.

The main aim of this project is to show one of the possible approaches for interacting the React application with Yandex Maps without using additional libraries (e.g. react-yandex-maps).


### Tech Stack:

- HTML,CSS,SCSS, Material-UI
- React.js (I used a functional approach and hooks)
- Yandex Maps API
- React Testing Library
- Для проекта была использована готовая сборка create-react-app

### Deploy:

**`Deployed here:`** https://route-creator-2022.herokuapp.com/

### Run Locally:
1. Clone the project: **`git clone`** https://github.com/MarinaNovas/route-creator-2022.git
2. Go to the project directory: **`cd router-creator`**
3. Install dependencies: **`npm install`**
4. Start the server: **`npm start`**

### Appearance:
:rocket: General view of the application has a Control Panel, AppBar and Map.

:rocket: You can hide the Control Panel.

:rocket: Application has a responsive design and you can test it on different devices

![Alt-General view of the application:](https://github.com/MarinaNovas/route-creator-2022/blob/master/img/route-creator-sm.jpg "Орк")

### Features:
:heavy_check_mark: Добавить точку маршрута на карте

:heavy_check_mark: Удалить точку маршрута

:heavy_check_mark: Удалить все точки маршрута

:heavy_check_mark: Перемешать/(Тасовать) все адреса

:heavy_check_mark: Переместить отдельный адрес в списке

:heavy_check_mark: Переместить маркер на карте

:heavy_check_mark: Получить информацию о маркере/метке на карте

:heavy_check_mark: Изменить язык

### How to use:
#### - Добавить точку маршрута на карту
В поле ввода пользователь вводит адрес, при нажатии клавиши Enter на десктопе (или ‘+’ на мобильном), введенный адрес отображается в списке адресов, в виде Адресной формы, и на карте появляется маркер, обозначающий новую точку маршрута.

Если количество точек в маршруте> 1-й, то маркеры на карте соединяются между собой прямыми линиями, в порядке, указанном в списке адресов. Полученная таким образом ломаная линия изображает маршрут, где первый адрес в списке – это начало маршрута, а последняя – конец маршрута.
#### - Удалить точку маршрута
В списке адресов на каждой адресной форме (справа вверху) есть кнопка удаления (‘X’). При нажатии этой кнопки выбранная адресная форма удаляется из списка адресов, а на карте пропадает соответствующий маркер. Маршрут на карте автоматические перерисовывается.
#### - Удалить все точки маршрута
На панели управления есть кнопка «Удалить Все» / «Delete All». При её нажатии все адреса из списка и соответствующие им маркеры и линии на карте удаляются.
#### -	Перемешать/(Тасовать) все адреса
На панели управления есть кнопка «Перемешать» / «Shuffle». При её нажатии все адреса в списке перемешиваются в произвольном порядке, а ломаная линия на карте, соединяющая маркеры, перерисовывается в соответствии с новой последовательностью точек.
#### -	Переместить отдельный адрес
Порядок адресов в списке можно изменить перетаскиванием адресных форм на новые позиции. При этом маршрут на карте автоматические перерисовывается.
#### - Переместить маркер на карте
Маркеры, соответствующие точкам маршрута, можно перемещать по карте перетаскиванием. Информация в соответствующей адресной форме автоматически обновляется.
#### - Получить информацию о маркере/метке на карте
При клике на маркер появляется «балун», в котором отображается адрес соответствующей ему точку.
#### - Изменить язык
Приложение поддерживает Русский и Английский языки. Переключатель языка расположен на верхней панели справа.
