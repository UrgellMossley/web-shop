import React from "react";
import { Link } from "react-router-dom";
import tshirt from "../assets/img/tshirt.jpg";
import nightwear from "../assets/img/nightwear.jpg";
import shorts from "../assets/img/shorts.jpg";
import accessories from "../assets/img/accessories.jpg";
import Jumpers from "../assets/img/headerImg2.jpg";

function SummerSplash() {
  return (
    <section className="py-5 mt-5">
      <h2 className="font-bold text-center text-3xl py-5 sm:text-4xl md:text-5xl">
        Summer Collection
      </h2>
      <p className="text-center text-xl sm:text-2xl pt-2 pb-5">
        We're Ready for <span className="text-pink-600">SUMMER</span>, are YOU?
      </p>
      <section className="grid gap-2 sm:gap-5 grid-cols-2 grid-rows-4 border-black border-1 sm:h-200 sm:px-10">
        <Link
          to={`/`}
          className="col-start-1 row-start-1 relative overflow-hidden"
        >
          <h5 className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl sm:text-2xl">
            T-Shirts
          </h5>
          <img
            className="z-20 brightness-75 h-full hover:scale-150 transition delay-50 duration-150 max-h-full w-full object-cover"
            src={tshirt}
            alt="T-shirt Section"
          />
        </Link>
        <Link
          to={`/`}
          className="col-start-2 row-span-2 row-start-1 relative overflow-hidden"
        >
          <h5 className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl sm:text-2xl">
            PARTY
          </h5>
          <img
            className="z-20 brightness-75 h-full hover:scale-150 transition delay-50 duration-150 max-h-full w-full object-cover"
            src={nightwear}
            alt="Party Section"
          />
        </Link>
        <Link
          to={`/`}
          className="col-start-1 col-span-1 relative overflow-hidden"
        >
          <h5 className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl sm:text-2xl">
            Accessories
          </h5>
          <img
            className="z-20 brightness-75 h-full hover:scale-150 transition delay-50 duration-150 max-h-full w-full object-cover"
            src={accessories}
            alt="Plus Size Section"
          />
        </Link>
        <Link
          to={`/`}
          className="col-start-1  col-span-2 relative overflow-hidden"
        >
          <h5 className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl sm:text-2xl">
            Shorts
          </h5>
          <img
            className="z-20 brightness-75 h-full hover:scale-150 transition delay-50 duration-150 max-h-full w-full object-cover"
            src={shorts}
            alt="Plus Size Section"
          />
        </Link>
        <Link
          to={`/`}
          className="col-start-1  col-span-2 row-start relative overflow-hidden"
        >
          <h5 className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl sm:text-2xl">
            Jumpers
          </h5>
          <img
            className="z-20 brightness-75 h-full hover:scale-150 transition delay-50 duration-150 max-h-full w-full object-cover"
            src={Jumpers}
            alt="Plus Size Section"
          />
        </Link>
      </section>
    </section>
  );
}

export default SummerSplash;
