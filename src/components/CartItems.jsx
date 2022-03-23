import React from "react";
import PropTypes from "prop-types";
import BackToShop from "./PageComponents/BackToShop";
import CartItemComponent from "./CartItemComponent";
function CartItems({ itemList }) {
  //element to be displayed if there are no items in the cart
  const returnToShop = (
    <div className="py-2 mt-2 flex flex-col items-center">
      <h3 className="text-center py-2 font-bold text-2xl">
        {" "}
        No Items Selected..
      </h3>
      <p className="font-bold text-lg text-center pb-1 my-2">
        Let's Do Something About That...
      </p>
    </div>
  );
  //if the user has items loop through tha arr and append each one to the DOM, if not then display a message calling the user back to the shop
  return (
    <div className="mt-1">
      {itemList.length > 0 ? (
        <CartItemComponent itemList={itemList} />
      ) : (
        returnToShop
      )}
      {/* btn component which is a link back to main page conditional styling depending on if there are items or not */}

      <BackToShop className={`w-1/4`} />
    </div>
  );
}

CartItems.propTypes = {
  itemList: PropTypes.arrayOf(Object).isRequired,
};

export default CartItems;
