import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/PageComponents/Header";
import Navbar from "./components/PageComponents/Navbar";
import TopPicks from "./components/TopPicks";
import CategoriesGrid from "./components/CategoriesGrid";
import SummerSplash from "./components/SummerSplash";
import Footer from "./components/PageComponents/Footer";
const App = () => {
  return (
    <>
      <Router>
        <div className="bg-sand font-quickSand overflow-x-hidden flex flex-col min-h-screen h-screen max-w-screen w-screen">
          <Navbar />
          <Header />
          <TopPicks />
          <CategoriesGrid />
          <SummerSplash />
          <Routes>
            <Route path="/" />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
