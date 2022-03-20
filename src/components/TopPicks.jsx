import shirtImg1 from "../assets/img/shirt1.jpg";
import shirtImg2 from "../assets/img/shirt2.jpg";
import shirtImg3 from "../assets/img/shirt3.jpg";
import React from "react";
import CaroselContainer from "./CaroselContainer";
class Product {
  constructor(title, price, img, description) {
    this.price = price;
    this.img = img;
    this.description = description;
    this.title = title;
  }
}

const shirt = new Product(
  "cool shirt",
  59.99,
  `${shirtImg1}`,
  "This is a really nice shirt and I think you should buy it."
);
const shirt2 = new Product(
  "cooler shirt",
  34.99,
  `${shirtImg2}`,
  "This is a really nice shirt and I think you should buy it."
);
const shirt3 = new Product(
  "coolest shirt",
  45.99,
  `${shirtImg3}`,
  "This is a really nice shirt and I think you should buy it."
);
const shirt4 = new Product(
  "coolest shirt",
  45.99,
  `${shirtImg3}`,
  "This is a really nice shirt and I think you should buy it."
);
const shirt5 = new Product(
  "coolest shirt",
  45.99,
  `${shirtImg3}`,
  "This is a really nice shirt and I think you should buy it."
);
const shirt6 = new Product(
  "coolest shirt",
  45.99,
  `${shirtImg3}`,
  "This is a really nice shirt and I think you should buy it."
);
const shirt7 = new Product(
  "coolest shirt",
  45.99,
  `${shirtImg3}`,
  "This is a really nice shirt and I think you should buy it."
);

const shirtArr = [shirt, shirt2, shirt3, shirt4, shirt5, shirt6, shirt7];

function TopPicks() {
  return (
    <section className="py-1 h-screen min-h-screen max-h-screen flex flex-col overflow-hidden justify-center items-center max-w-screen w-screen min-w-screen">
      <h2 className="my-4 py-4 font-bold text-5xl">Top Picks</h2>
      <CaroselContainer child={shirtArr} />
    </section>
  );
}

export default TopPicks;
