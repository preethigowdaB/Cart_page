import React from "react";
import laptop from "../assests/laptop.jpg";
import headphone from "../assests/headphones.jpg";
import mobile from "../assests/mobile.jpg";
import tablet from "../assests/tablet.jpg";
import gamingConsole from "../assests/gaming console.jpg";
import smartTv from "../assests/smartTv.jpg";
import wirelessEarbuds from "../assests/wirelessBud.jpg";
import camera from "../assests/camera.jpg";
import externalHardDrive from "../assests/external hard drive.jpg";
import homeTheater from "../assests/home theatre system.jpg";
import bluetoothSpeaker from "../assests/bluetooth speaker.jpg"
const ProductList = ({ addToCart, addedItems, setShow }) => {
  const Products = [
    {
      "id": 1,
      "name": "Laptop",
      "price": 50000,
      "img": laptop
    },
    {
      "id": 2,
      "name": "Headphone",
      "price": 10000,
      "img": headphone
    },
    {
      "id": 3,
      "name": "Mobile",
      "price": 95000,
      "img": mobile
    },
    
    {
      "id": 4,
      "name": "Tablet",
      "price": 30000,
      "img": tablet
    },
    {
      "id": 6,
      "name": "Gaming Console",
      "price": 45000,
      "img":gamingConsole
    },
    {
      "id": 7,
      "name": "Smart TV",
      "price": 60000,
      "img": smartTv
    },
    {
      "id": 8,
      "name": "Wireless Earbuds",
      "price": 15000,
      "img": wirelessEarbuds
    },
    {
      "id": 9,
      "name": "Camera",
      "price": 55000,
      "img": camera
    },
    {
      "id": 10,
      "name": "Bluetooth Speaker",
      "price": 12000,
      "img": bluetoothSpeaker
    },
    {
      "id": 11,
      "name": "Home Theater System",
      "price": 80000,
      "img": homeTheater
    },
    {
      "id": 12,
      "name": "External Hard Drive",
      "price": 7000,
      "img": externalHardDrive
    },
   
  
   
  ]
  
  return (
    <div className="product-item mt-3 p-md-5 p-3">
      {Products?.map((item) => (
        <div key={item.id} className="border p-3 rounded-3">
          <div className="d-flex justify-content-center p-3">
            <img src={item?.img} alt={item?.name} className="img-dimensions" />
          </div>
          <div>
            <p className="fs-5 fw-bold">{item?.name}</p>
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
