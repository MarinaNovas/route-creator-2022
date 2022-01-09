
import { createContext } from 'react';

export const languages = ['ru', 'en'];

export const content = {
  ru: {
    buttonShuffle: 'Перемешать',
    buttonDeleteAll: 'Удалить все',
    inputPlaceholder: 'Введите адрес...',
    dialogWindowTitle: 'Информация о приложении',
    description: `
    <div>
      <h3>Description:</h3>
      <p>
      Это простое адаптивное React приложение, в котором пользователь может интерактивно создавать маршрут на карте.
      </p>
      <p>
      Этот проект представляет собой тестовое задание на позицию front-end разработчика. Приложение называется Route-creator-2022, но оно не создает каких-либо существующих маршрутов, которые можно использовать для путешествий в реальной жизни. В этом приложении мы просто соединяем точки ломаной линией, в заданном Пользователем порядке.
      </p>
      <p>
      Основная цель этого проекта - показать один из возможных подходов взаимодействия приложения React с Yandex.Maps  API без использования дополнительных библиотек (например, react-yandex-maps). 
      </p>
    </div>

    <div>
      <h3>Tech Stack:</h3>
      <ul>
        <li>HTML,CSS,SCSS, Material-UI</li>
        <li>React.js <i>(Использовался функциональный подход и хуки)</i></li>
        <li>Yandex Maps API</li>
        <li>React Testing Library</li>
      </ul>
    </div>

    <div>
      <h3>Features:</h3>
      <ul>
        <li>Добавить точку маршрута</li>
        <li>Удалить точку маршрута</li>
        <li>Удалить все точки маршрута</li>
        <li>Перемешать/(Тасовать) все адреса</li>
        <li>Переместить отдельный адрес в списке</li>
        <li>Переместить маркер на карте</li>
        <li>Получить информацию о маркере/метке на карте</li>
        <li>Изменить язык</li>
      </ul>
    </div>
    `
  },
  en: {
    buttonShuffle: 'Shuffle',
    buttonDeleteAll: 'Delete All',
    inputPlaceholder: 'Enter address...',
    dialogWindowTitle: 'Information about this application',
    description: `
    <div>
    <h3>Description:</h3>
      <p>
      This is a simple responsive single page React application in which the user can interactively create a route on a map.
      </p>
      <p>
      This project is a test exercise for front-end developer position. It is called Route-creator-2022, but it doesn’t create some exist route that you can use in your real life or traveling.   In this application, we just connects points, in a given order, by a polyline.
      </p>
      <p>
      The main aim of this project is to show one of the possible approaches for interacting the React application with Yandex Maps without using additional libraries (e.g. react-yandex-maps) and of course, I hope to draw the attention of a potential employer <span>&#128521</span>.
      </p>
    </div>
    <div>
      <h3>Tech Stack:</h3>
      <ul>
        <li>HTML,CSS,SCSS, Material-UI</li>
        <li>React.js <i>(I used a functional approach and hooks)</i></li>
        <li>Yandex Maps API</li>
        <li>React Testing Library</li>
      </ul>
    </div>
    
    <div>
    <h3>Features:</h3>
    <ul>
      <li>Add a route point to map</li>
      <li>Delete a route point</li>
      <li>Delete all route points</li>
      <li>Shuffle all addresses</li>
      <li>Move a single address in the list</li>
      <li>Move a marker on the map</li>
      <li>Get information about a marker(place mark) on the map</li>
      <li>Change the language</li>
    </ul>
  </div>
    `
  }
};


export const LanguageContext = createContext(languages[0]);



