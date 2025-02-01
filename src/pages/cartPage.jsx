import React from "react";

const CartPage = ({ cart, addToCart, removeFromCart }) => {
  return (
    <div>
        <hr/>
      <h5>Cart Page</h5>
      <div className="d-flex gap-5 p-5">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="border p-3 rounded-3">
              <div>
                <img src={item.img} alt={item.name} width={120} height={120} />
              </div>
              <div>
                <p className="fs-4 fw-2">{item.name}</p>
                <h6 className="fs-5">₹ {item.price * item.quantity}</h6>
              </div>
              <div className="d-flex align-items-center">
                <button
                  className="border-0 mt-2 py-1 px-3 rounded bg-danger text-white"
                  onClick={() => removeFromCart(item.id)}
                >
                  -
                </button>
                <button className="border-0 mt-2 py-1 px-3  bg-white">
                  {item.quantity}
                </button>
                <button
                  className="border-0 mt-2 py-1 px-3 rounded bg-success text-white"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <hr />
      <h5>
        Total Price: ₹{" "}
        {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
      </h5>
    </div>
  );
};

export default CartPage;
