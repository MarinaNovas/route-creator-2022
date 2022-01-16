# Тестовое задание на позицию frontend разработчика

### Ответы на теорию по ссылке: https://github.com/MarinaNovas/answers-funbox-questions


Это простое адаптивное React приложение, в котором пользователь может интерактивно создавать маршрут на карте.

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

:heavy_check_mark: Перемешать/(Тасовать) все точки

:heavy_check_mark: Переместить отдельную точку в списке

:heavy_check_mark: Переместить маркер на карте

:heavy_check_mark: Получить информацию о маркере/метке на карте

:heavy_check_mark: Изменить язык

### How to use:
#### - Добавить точку маршрута на карту
В поле ввода пользователь вводит Название точки, при нажатии клавиши Enter на десктопе (или ‘+’ на мобильном), Название введенной точки отображается в списке точек, в виде Адресной формы. На карте, в её текущем центре, появляется маркер, обозначающий новую точку маршрута.

Адресная форма - содержит наименование точки и её текущий адрес.

Если количество точек в маршруте > 1-й, то маркеры на карте соединяются между собой прямыми линиями, в порядке, указанном в списке Точек. Полученная таким образом ломаная линия изображает маршрут, где первый адрес в списке – это начало маршрута, а последняя – конец маршрута.
#### - Удалить точку маршрута
В списке точек на каждой Адресной форме (справа вверху) есть кнопка удаления (‘X’). При нажатии этой кнопки выбранная Адресная форма удаляется из списка адресов, а на карте пропадает соответствующий маркер. Маршрут на карте автоматические перерисовывается.
#### - Удалить все точки маршрута
На панели управления есть кнопка «Удалить Все» / «Delete All». При её нажатии все точки из списка и соответствующие им маркеры и линии на карте удаляются.
#### -	Перемешать/(Тасовать) все точки
На панели управления есть кнопка «Перемешать» / «Shuffle». При её нажатии все точки в списке перемешиваются в произвольном порядке, а ломаная линия на карте, соединяющая маркеры, перерисовывается в соответствии с новой последовательностью точек.
#### -	Переместить отдельную точку в списке
Порядок точек в списке можно изменить перетаскиванием Адресных форм на новые позиции. При этом маршрут на карте автоматические перерисовывается.
#### - Переместить маркер на карте
Маркеры, соответствующие точкам маршрута, можно перемещать по карте перетаскиванием. Информация в соответствующей Адресной форме автоматически обновляется.
#### - Получить информацию о маркере/метке на карте
При клике на маркер появляется «балун», в котором отображается наименование точки и её текущий адрес.
#### - Изменить язык
Приложение поддерживает Русский и Английский языки. Переключатель языка расположен на верхней панели справа.
