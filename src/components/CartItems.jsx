import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function CartItems({ props }) {
  const returnToShop = (
    <div className="py-2 mt-2 flex flex-col items-center">
      <h3 className="text-center py-2 font-bold text-2xl">
        {" "}
        No Items Selected..
      </h3>
      <p className="font-bold text-lg text-center pb-1 my-2">
        Let's Do Something About That...
      </p>
      <Link className="w-2/3" to="/">
        <button className="btn bg-black w-full text-white text-lg btn-primary active:bg-black">
          back to Shop
        </button>
      </Link>
    </div>
  );

  return (
    <div>
      {props.length > 0
        ? props.map((item) => {
            return item.name;
          })
        : returnToShop}
    </div>
  );
}

CartItems.propTypes = {
  props: PropTypes.array.isRequired,
};

export default CartItems;
