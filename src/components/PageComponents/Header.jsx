/* import {Link} from "react-router-dom";
 */ function Header() {
  return (
    <section className=" grid relative grid-cols-3 grid-rows-3 bg-headerImage lg:bg-none bg-blend-darken bg-cover place-items-center bg-no-repeat h-full min-h-full items-start px-5 lg:px-0">
      <div className="lg:hidden top-0 left-0 bg-black opacity-30 w-full h-full absolute" />
      <article className="hidden lg:brightness-75 lg:block lg:bg-man lg:row-start-1 lg:row-span-3 lg:col-start-1 h-full w-full bg-cover bg-no-repeat bg-center"></article>
      <article className="hidden lg:brightness-75 lg:block lg:row-start-1 lg:row-span-3 lg:col-start-3 lg:bg-headerImage h-full w-full bg-cover bg-no-repeat bg-center"></article>
      <article className="hidden lg:brightness-75 lg:block lg:row-start-1 lg:row-span-3 lg:col-start-2 lg:bg-girl  h-full w-full bg-cover bg-no-repeat bg-center"></article>
      <h2 className="z-10 my-3 row-start-1 col-start-1 col-span-3 py1 uppercase font-bold text-white text-4xl lg:self-center">
        This <span className="animate-pulse lg:text-pink-600">is</span> Street
        Wear
      </h2>
      <button className="z-10 col-start-2 bg-black text-white row-start-3 btn btn-active self-center lg:place-self-center">
        Shop Now
      </button>
    </section>
  );
}

export default Header;
