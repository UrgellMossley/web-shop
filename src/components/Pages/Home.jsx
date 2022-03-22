import React from "react";
import Header from "../PageComponents/Header";
import TopPicks from "../TopPicks";
import CategoriesGrid from "../CategoriesGrid";
import SummerSplash from "../SummerSplash";
function Home() {
  return (
    <>
      <Header />
      <TopPicks />
      <CategoriesGrid />
      <SummerSplash />
    </>
  );
}

export default Home;
