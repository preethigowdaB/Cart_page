import React from "react";
import laptop from "../assests/laptop.jpg";
import headphone from "../assests/headphones.jpg";
import mobile from "../assests/mobile.jpg";

const ProductList = ({ addToCart, addedItems, setShow }) => {
  const Products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      img: laptop,
    },
    {
      id: 2,
      name: "Headphone",
      price: 10000,
      img: headphone,
    },
    {
      id: 3,
      name: "Mobile",
      price: 95000,
      img: mobile,
    },
  ];
  return (
    <div className="d-flex gap-5 p-5">
      {Products?.map((item) => (
        <div key={item.id} className="border p-3 rounded-3">
          <div>
            <img src={item?.img} alt={item?.name} width={180} height={180} />
          </div>
          <div>
            <p className="fs-4 fw-2">{item?.name}</p>
            <h6 className="fs-5">₹ {item?.price}</h6>
          </div>
          {addedItems[item.id] ? (
            <button
              className=" mt-2 py-1 px-3 rounded border border-primary text-primary bg-white"
              onClick={() => setShow(true)}
            >
              Go to Cart
            </button>
          ) : (
            <button
              className="border-0 mt-2 py-1 px-3 rounded bg-primary text-white"
              onClick={() => addToCart(item)}
            >
              Add To Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
