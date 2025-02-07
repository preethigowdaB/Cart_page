import React from "react";
import laptop from "../assets/laptop.jpg";
import headphone from "../assets/headphones.jpg";
import mobile from "../assets/mobile.jpg";
import tablet from "../assets/tablet.jpg";
import gamingConsole from "../assets/gaming_console.jpg";
import smartTv from "../assets/smartTv.jpg";
import wirelessEarbuds from "../assets/wirelessBud.jpg";
import camera from "../assets/camera.jpg";
import externalHardDrive from "../assets/external_hard_drive.jpg";
import homeTheater from "../assets/home_theatre_system.jpg";
import bluetoothSpeaker from "../assets/bluetooth_speaker.jpg";

const ProductList = ({ addToCart, addedItems, setShow }) => {
  const products = [
    { id: 1, name: "Laptop", price: 50000, img: laptop },
    { id: 2, name: "Headphone", price: 10000, img: headphone },
    { id: 3, name: "Mobile", price: 95000, img: mobile },
    { id: 4, name: "Tablet", price: 30000, img: tablet },
    { id: 6, name: "Gaming Console", price: 45000, img: gamingConsole },
    { id: 7, name: "Smart TV", price: 60000, img: smartTv },
    { id: 8, name: "Wireless Earbuds", price: 15000, img: wirelessEarbuds },
    { id: 9, name: "Camera", price: 55000, img: camera },
    { id: 10, name: "Bluetooth Speaker", price: 12000, img: bluetoothSpeaker },
    { id: 11, name: "Home Theater System", price: 80000, img: homeTheater },
    { id: 12, name: "External Hard Drive", price: 7000, img: externalHardDrive },
  ];

  // const handleAddToCart = (item) => {
  //   addToCart(item);
  // };

  // const handleGoToCart = () => {
  //   setShow(true);
  // };

  return (
    <div className="container">
      <div className="row mt-3 gy-4"> {/* gy-4 for row spacing */}
        {products.map((item) => (
          <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center">
            <div className="border p-3 rounded-3 w-100">
              <div className="d-flex justify-content-center">
                <img src={item.img} alt={item.name} className="img-dimensions" />
              </div>
              <div>
                <p className="fs-5 fw-bold">{item.name}</p>
                <h6 className="fs-5">₹ {item.price}</h6>
              </div>
              {addedItems[item.id] ? (
                <button
                  className="mt-2 py-1 px-3 rounded border border-primary text-primary bg-white"
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
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default ProductList;
