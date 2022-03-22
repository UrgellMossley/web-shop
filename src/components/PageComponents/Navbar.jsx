import { NavLink } from "react-router-dom";
import { Spiral as Hamburger } from "hamburger-react";
import Icon from "../../assets/img/navigator.png";
import {
  FaCartPlus,
  FaHome,
  FaQuestion,
  FaShoppingBasket,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";

import { useState } from "react";
function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <nav className="navbar sticky top-0 z-50 w-screen bg-pebble shadow-lg py-2">
        <section className="navbar-start">
          <NavLink to="/">
            <button>
              <img
                className="h-1/3 w-1/3 max-h-32 max-w-32"
                src={Icon}
                alt="my image"
              />
            </button>
          </NavLink>
        </section>
        <section className="flex md:hidden  pr-3 justify-end navbar-end">
          <Hamburger toggled={isOpen} toggle={handleClick} size={30} />
        </section>
        <section className="hidden md:flex navbar-end pr-10">
          <ul className="  flex flex-row justify-end w-1/2 h-1/2 min-w-1/2">
            <li className="ml-5 text-black font-bold border-b-3 border-white">
              <FaHome className="text-3xl" />
            </li>
            <li className="ml-5 text-black font-bold border-b-3 border-white">
              <FaUser className="text-3xl" />
            </li>
            <li className="ml-5 text-black font-bold border-b-3 border-white">
              <NavLink to="/cart">
                <FaShoppingBasket className="text-3xl" />
              </NavLink>
            </li>
            <li className="ml-5 text-black font-bold border-b-3 border-white">
              <NavLink to="/about">
                <FaQuestion className="text-3xl" />
              </NavLink>
            </li>
          </ul>
        </section>
      </nav>
      <section
        className={`${
          isOpen ? ` translate-x-0` : `-translate-x-full `
        } transition-transform ease-in delay-75 duration 200 fixed  bottom-0 z-20 opacity-70 flex flex-col justify-center w-full h-full  bg-black`}
      >
        <ul className="flex flex-col justify-between items-center  h-1/2">
          <li className="text-white border-b-3 border-white">Home</li>
          <li className="text-white border-b-3 border-white">Profile</li>
          <li className="text-white border-b-3 border-white">Cart</li>
          <li className="text-white border-b-3 border-white">About</li>
        </ul>
      </section>
    </>
  );
}

export default Navbar;
