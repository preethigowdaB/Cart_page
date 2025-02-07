import { useState } from "react";
import "./App.css";
import CartIcon from "./assets/cart.jpg";
import ProductList from "./pages/ProductList";
import CartPage from "./pages/cartPage";

function App() {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const [addedItems, setAddedItems] = useState({});

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    setAddedItems((prev) => ({ ...prev, [item.id]: true }));
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === itemId);
      if (existingItem.quantity > 1) {
        return prevCart.map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
      return prevCart.filter((cartItem) => cartItem.id !== itemId);
    });

    setAddedItems((prev) => {
      const updatedItems = { ...prev };
      delete updatedItems[itemId]; // Remove from addedItems if quantity is 0
      return updatedItems;
    });
  };

  return (
    <div className="App">
      <nav className="container">
        <div className="d-flex justify-content-between">
          <h4 onClick={() => setShow(false)} style={{cursor:"pointer"}}>Products</h4>
          <div
            style={{ position: "relative", cursor: "pointer" }}
            onClick={() => setShow(true)}
          >
            <img src={CartIcon} alt="Cart" width={30} />
            {cart.length > 0 && (
              <sup
                style={{
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                  marginLeft: "-5px",
                }}
              >
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </sup>
            )}
          </div>
        </div>
      </nav>

      <div>
        {show ? (
          <CartPage
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ) : (
          <ProductList
            addToCart={addToCart}
            addedItems={addedItems}
            setShow={setShow}
          />
        )}
      </div>
    </div>
  );
}

export default App;
