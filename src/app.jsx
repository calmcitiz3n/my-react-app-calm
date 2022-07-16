//Файл компеллируется на JS автоматически (но в старых версиях требуется делать импорт react'a)
import React, { useEffect } from "react";
import { RestaurantPage } from "./pages/RestaurantsPage/RestaurantsPage";
import { restaurants } from "./constans/fixtures";
export const App = () => {
  return <RestaurantPage restaurants={restaurants} />;
};

// export const App = () => {
//   useEffect(() => {}, [])
//   useEffect(() => {}, [])
//   useEffect(() => {}, [])
//   useEffect(() => {}, [])  //Композиция хуков
//     return (
//  <react.Fragment>  Если нужно вернуть несколько элементов, то оборачиваем их в <react.Fragment></react.Fragment>
//    <div>App</div>; //Возвращает JSX (React-Элемент div с children'ом), при рендере преобразуется в DOM-el, каждый корневой элемент может вернуть один компонент, но у него могут быть дочерние элементы
//    <div>App</div>
//  </react.Fragment>

// };

// class App extends PureComponent {
//     componentWillUnmount() { Методы жизненного цикла (заключают в себе логику (наследования), на замену пришли хуки в функциях)
//
//}
//
//     render() {
//         return <div>App</div>
//     }
// } Компонент на классах

//Компонент - это композиция элементов и других компонентов, + логика отображения и различных side-эффектов и всё это конфигурируется различными пропсами(пишется с большой буквы)
//Виды компонентов :
//1. На классах
//2. На функциях (используют часто с помощью хуков)
//Элемент - это единица, которая будет отражена в реальном DOM'е(пишется с маленькой буквы)
