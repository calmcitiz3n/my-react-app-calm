import { Layout } from "../../components/Layout/Layout"; //Импортируем пользовательские компоненты в {...}
import { Restaurant } from "../../components/Restaurant/Restaurant";
import { Tabs } from "../../components/Tabs/Tabs";
import Styles from "./styles.module.css"; // А стили просто
//Добавляем разные компоненты на эту страницу
export const RestaurantPage = ({ restaurants }) => {
  return (
    <Layout>
      <div className={Styles.container}>
        <Tabs />
        <Restaurant restaurant={restaurants[0]} />
      </div>
    </Layout>
  );
};
