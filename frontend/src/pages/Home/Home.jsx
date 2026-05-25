import { useState } from "react";
import "./Home.css";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Header from "../../components/Header/Header";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";

const Home = () => {
  const [Category, setCategory] = useState("All");
  return (
    <div>
      { <Header /> }
      <ExploreMenu Category={Category} setCategory={setCategory} />
      <FoodDisplay Category={Category}/>
      <AppDownload />
    </div>
  );
};
export default Home;
