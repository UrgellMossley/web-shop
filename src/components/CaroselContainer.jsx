import {
  FaShoppingCart,
  FaChevronCircleLeft,
  FaChevronCircleRight,
} from "react-icons/fa";
import PropTypes from "prop-types";

function CaroselContainer({ child }) {
  return (
    <section className="flex px-1 flex-col h-4/5">
      <article className="w-full carousel ">
        {child.map((item, index) => {
          return (
            <div
              key={index}
              id={index}
              className="relative grid grid-rows-4 carousel-item w-full min-w-full self-center h-full"
            >
              <a
                className="hidden xs:block absolute bottom-1/2 left-32 text-3xl text-black"
                href={index === 0 ? `#${child.length - 1}` : `#${index - 1}`}
              >
                <FaChevronCircleLeft className="bg-white rounded-full" />
              </a>
              <a
                className="absolute hidden xs:block bottom-1/2 right-32 text-3xl text-black"
                href={index === child.length - 1 ? `#${0}` : `#${index + 1}`}
              >
                <FaChevronCircleRight className="bg-white rounded-full" />
              </a>
              <img
                className="sm:object-cover row-start-1 row-span-3 object-cover row-start-1 h-full w-full lg:h-full lg:w-full"
                src={item.img}
                alt="shirt"
              />
              <div className="row-start-4 justify-center bg-black flex">
                <section className="grid grid-cols-6 justify-between w-full items-center">
                  <small className="text-xl px-4 col-start-1 text-white">{`£${item.price}`}</small>
                  <div className="text-xl px-4 col-start-4 md:col-start-5 flex justify-around col-span-4 md:col-span-2">
                    <button>
                      <FaShoppingCart className="text-white text-2xl" />
                    </button>
                    <button className="btn btn-sm md:btn-lg text-white text-2xl btn-active btn-primary">
                      Buy Now
                    </button>
                  </div>
                </section>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
}

CaroselContainer.propTypes = {
  child: PropTypes.arrayOf(PropTypes.object),
};

export default CaroselContainer;
