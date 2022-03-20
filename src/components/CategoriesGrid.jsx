import React from "react";
import { Link } from "react-router-dom";
import PlusSiize from "../assets/img/plusSize.jpg";
import Menswear from "../assets/img/menswear.jpg";
import LadiesWear from "../assets/img/ladieswear.jpg";

function CategoriesGrid() {
  return (
    <section className="py-5 flex h-screen min-h-screen max-h-screen flex-col items-center">
      <h2 className="text-xl my-2 sm:my-3 sm:text-3xl md:text-4xl md:text-5xl font-bold py-4 px-2">
        We Have Something for <span className="text-pink-600">EVERYONE</span>
      </h2>
      <section className="grid grid-rows-3 md:grid-rows-1 gap-1 grid-cols-1 md:grid-cols-3 h-full w-full py-5 md:px-4">
        <Link
          className="row-span-1 row-start-1 md:row-start-1 md:col-start-1"
          to={`/`}
        >
          <article className="h-full max-h-full relative overflow-hidden">
            <h5 className="absolute top-1/2 text-2xl text-white font-bold z-20 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Plus Size
            </h5>
            <img
              className="z-20 brightness-75 h-full hover:scale-150 transition delay-50 duration-150 max-h-full w-full object-cover"
              src={PlusSiize}
              alt="Plus Size Section"
            />
          </article>
        </Link>
        <Link
          className="row-span-1 row-start-2 md:h-4/5 md:row-start-1 md:col-start-2 relative md:self-center"
          to={`/`}
        >
          <article className="h-full  max-h-full relative overflow-hidden">
            <h5 className="absolute top-1/2 text-2xl text-white font-bold z-20 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Ladies Fashion
            </h5>
            <img
              className="brightness-75 h-full max-h-full hover:scale-150 transition delay-50 duration-150 w-full object-cover"
              src={LadiesWear}
              alt="Plus Size Section"
            />
          </article>
        </Link>
        <Link
          className="row-span-1 row-start-3 md:row-start-1 md:col-start-3"
          to={`/`}
        >
          <article className="h-full max-h-full relative overflow-hidden">
            <h5 className="absolute top-1/2 text-2xl text-white font-bold z-20 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Menswear
            </h5>
            <img
              className="brightness-75 h-full max-h-full hover:scale-150 transition delay-50 duration-150 w-full object-cover"
              src={Menswear}
              alt="Plus Size Section"
            />
          </article>
        </Link>
      </section>
    </section>
  );
}

export default CategoriesGrid;
