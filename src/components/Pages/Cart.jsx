import React from "react";
import { FaEllipsisH } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartItems from "../CartItems";
import pic from "../../assets/img/shirt1.jpg";
function Cart() {
  const arr = [
    {
      name: "t-shirt",
      price: 34.99,
      description: "This is a nice shirt",
      img: pic,
    },
    {
      name: "t-shirt",
      price: 34.99,
      description: "This is a nice shirt",
      img: pic,
    },
    {
      name: "t-shirt",
      price: 34.99,
      description: "This is a nice shirt",
      img: pic,
    },
    {
      name: "t-shirt",
      price: 34.99,
      description: "This is a nice shirt",
      img: pic,
    },
    {
      name: "t-shirt",
      price: 34.99,
      description: "This is a nice shirt",
      img: pic,
    },
    {
      name: "t-shirt",
      price: 34.99,
      description: "This is a nice shirt",
      img: pic,
    },
  ];
  return (
    <section className="min-h-fit h-fit flex-col">
      <section className="flex justify-between w-4/5">
        {" "}
        <h1 className="text-left text-4xl py-4 my-2 pl-10 font-bold">
          Your Cart
        </h1>
        <button>
          <FaEllipsisH className="text-4xl" />
        </button>
      </section>
      <section className="w-full h-1/5 px-4 border-black border-1">
        <article className="card bg-pink-50 shadow-xl w-full">
          <div className="card-body">
            <h3 className="pt-2 text-4xl font-bold">Are you new here?</h3>
            <p className="text-2xl py-3">
              Click{" "}
              <Link className="text-pink-600 underline" to="/login">
                here{" "}
              </Link>
              to register, or
              <Link className="text-pink-600 underline" to="/login">
                {" "}
                login
              </Link>
            </p>
          </div>
        </article>
        <CartItems itemList={arr} />
      </section>
    </section>
  );
}

export default Cart;
