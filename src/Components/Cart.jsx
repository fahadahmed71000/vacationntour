import React from "react";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import S1 from '../assets/s1.png';
import Side from '../assets/side1.png';
 
const Cart = () => {
  // Array of card data
  const cards = [
    {
      id: 1,
      image: c1,
      title: "Calculated Weather",
      description: "Built Wicket longer admire do barton vanity itself do in it."
    },
    {
      id: 2,
      image: c2,
      title: "Best Flights",
      description: "Engrossed listening. Park gate sell they west hard for the."
    },
    {
      id: 3,
      image: c3,
      title: "Local Events",
      description: "Barton vanity itself do in it. Preferred to men it engrossed listening."
    },
    {
      id: 4,
      image: c4,
      title: "Customization",
      description: "We deliver outsourced aviation services for military customers."
    }
  ];

  return (
    <div>
      <div className="text-center pt-32">
        <div className="relative">
          <img
            src={S1}
            alt="Image"
            className="absolute top-0 right-12 hidden md:block"
          />
        </div>
        <div>
          <p className="font-bold text-[#5E6282]">CATEGORY</p>
        </div>
        <h1 className="text-3xl font-bold text-[#14183E]">We Offer Best Services</h1>
      </div>

      {/* Cards Container */}
      <div className="container flex flex-wrap justify-center gap-4 pt-32">
        {/* Map over the cards array */}
        {cards.map((card, i) => (
          <div key={card.id} className="relative w-64 h-72">
            {i === 1 && (
              <img
                src={Side}
                className="hidden sm:block absolute top-56 right-48 object-cover z-0"
                alt="Background"
              />
            )}
            <div
              className="relative flex flex-col items-center bg-white px-2 py-2 rounded-3xl shadow-md w-[223px] h-72 space-x-4 z-10"
            > 
              <img className="w-full h-[120px] object-contain" src={card.image} alt={card.title} />
              <h1 className="pt-4 text-lg font-bold">{card.title}</h1>
              <p className="pt-4 px-1 text-sm text-[#5E6282]">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
