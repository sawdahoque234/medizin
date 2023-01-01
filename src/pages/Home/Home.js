import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import DailyDeals from "./DailyDeals";

const Home = () => {
  return (
    <div>
      <Banner />
      <DailyDeals />
      <Categories />
    </div>
  );
};

export default Home;
