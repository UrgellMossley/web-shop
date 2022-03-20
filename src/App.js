import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TopPicks from "./components/TopPicks";
const App = () => {
  return (
    <>
      <Router>
        <div className="bg-sand font-quickSand overflow-x-hidden flex flex-col min-h-screen h-screen max-w-screen w-screen">
          <Navbar />
          <Header />
          <TopPicks />
          <Routes>
            <Route path="/" />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
