import { useEffect, useState } from "react";
import {
  getCart,
  updateCart,
  removeFromCart,
} from "../services/cartService";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const data = await getCart();
      setCartItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  const increaseQty = async (item) => {
    await updateCart(
      item.product_id,
      item.quantity + 1
    );

    fetchCart();
  };

  const decreaseQty = async (item) => {
    if (item.quantity <= 1) return;

    await updateCart(
      item.product_id,
      item.quantity - 1
    );

    fetchCart();
  };

  const removeItem = async (item) => {
    await removeFromCart(item.product_id);

    fetchCart();
  };

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <h1 className="page-title">
        🛒 Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <h2
          style={{
            textAlign: "center",
          }}
        >
          Your Cart Is Empty
        </h2>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.cart_id}
              style={{
                background: "white",
                padding: "20px",
                marginBottom: "20px",
                borderRadius: "15px",
                boxShadow:
                  "0 4px 15px rgba(0,0,0,0.1)",
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <div style={{ flex: 1 }}>
                <h3>{item.name}</h3>

                <p>
                  ₹{item.price}
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <button
                    onClick={() =>
                      decreaseQty(item)
                    }
                  >
                    -
                  </button>

                  <strong>
                    {item.quantity}
                  </strong>

                  <button
                    onClick={() =>
                      increaseQty(item)
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <h3>
                  ₹
                  {item.price *
                    item.quantity}
                </h3>

                <button
                  onClick={() =>
                    removeItem(item)
                  }
                  style={{
                    marginTop: "10px",
                    background:
                      "#e63946",
                    color: "white",
                    border: "none",
                    padding:
                      "8px 12px",
                    borderRadius:
                      "6px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div
            style={{
              background: "#111",
              color: "white",
              padding: "30px",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            <h2>Total Amount</h2>

            <h1>
              ₹{totalAmount}
            </h1>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;