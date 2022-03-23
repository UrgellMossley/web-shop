import React from "react";
import { FaTrash } from "react-icons/fa";

function CartItemComponent({ itemList }) {
  return (
    <div>
      <h2 className="pt-2 mt-1 text-xl">Ready to Checkout</h2>

      {itemList.map((item, index) => {
        return (
          <>
            {" "}
            <article
              key={index}
              className="flex justify-evenly   items-center py-2 my-1 border-t-2 pt-2 border-black mt-4 border-solid"
            >
              <FaTrash className="text-2xl text-red-600 pr-1" />

              <img
                src={item.img}
                alt="preview of cart item"
                className="max-h-10 rounded-full h-10 w-10"
              />
              <section className="flex flex-col justify-around ">
                <h5 className="font-bold text-lg">{item.name}</h5>
                <p>{item.description}</p>
              </section>
              <p>{item.price}</p>
            </article>
          </>
        );
      })}
    </div>
  );
}

export default CartItemComponent;
