import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/PageComponents/Navbar";
import Cart from "./components/Pages/Cart";
import Footer from "./components/PageComponents/Footer";
import Home from "./components/Pages/Home";
const App = () => {
  return (
    <>
      <Router>
        <div className="bg-sand font-quickSand overflow-x-hidden flex flex-col min-h-screen h-screen max-w-screen w-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" />
            <Route path="/profile/:id" />
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
