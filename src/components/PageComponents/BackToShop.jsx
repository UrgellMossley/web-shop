import React from "react";
import { Link } from "react-router-dom";

function BackToShop() {
  return (
    <Link className="flex justify-center mt-2 py-4" to="/">
      <button className="btn w-2/3 bg-black w-full text-white text-lg btn-primary active:bg-black">
        back to Shop
      </button>
    </Link>
  );
}

export default BackToShop;
