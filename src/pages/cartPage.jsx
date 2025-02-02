import React from "react";
import "../App.css"; 

const CartPage = ({ cart, addToCart, removeFromCart }) => {
  return (
    <div className="cart-container">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Items</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center">
                  <p>Your cart is empty.</p>
                </td>
              </tr>
            ) : (
              cart.map((item) => (
                <tr key={item.id} className="border p-3 rounded-3">
                  <td className="item-info">
                    <img src={item.img} alt={item.name} className="cart-img" />
                    <p className="fs-6 fw-bold">{item.name}</p>
                  </td>
                  <td>
                    <h6 className="fs-6">₹ {item.price}</h6>
                  </td>
                  <td>
                    <div className="quantity-controls">
                      <button
                        className="btn btn-danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        className="btn btn-success"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>
                    <h6 className="fs-6">₹ {item.price * item.quantity}</h6>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <h5 className="total-price">
        Total Price: ₹{" "}
        {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
      </h5>
    </div>
  );
};

export default CartPage;
