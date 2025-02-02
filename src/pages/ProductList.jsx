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
    {
      id: 4,
      name: "Mobile",
      price: 95000,
      img: mobile,
    },
    {
      id: 5,
      name: "Mobile",
      price: 95000,
      img: mobile,
    },
    {
      id: 6,
      name: "Mobile",
      price: 95000,
      img: mobile,
    },
    {
      id: 7,
      name: "Mobile",
      price: 95000,
      img: mobile,
    },
  ];
  return (
    <div className="product-item mt-3 p-md-5 p-3">
      {Products?.map((item) => (
        <div key={item.id} className="border p-3 rounded-3">
          <div className="d-flex justify-content-center p-3">
            <img src={item?.img} alt={item?.name} className="img-dimensions" />
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
