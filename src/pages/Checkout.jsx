import { placeOrder } from "../services/orderService";

function Checkout() {
  const handleCheckout = async () => {
    try {
      const data = await placeOrder();

      alert(
        `Order Placed Successfully!\nTotal Amount: ₹${data.total_amount}`
      );
    } catch (error) {
      console.error(error);
      alert("Order Failed");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "80px",
      }}
    >
      <h1>Secure Checkout</h1>

      <p
        style={{
          marginTop: "10px",
          marginBottom: "25px",
        }}
      >
        Fast • Safe • Secure Payments
      </p>

      <button
        onClick={handleCheckout}
        style={{
          padding: "15px 35px",
          border: "none",
          borderRadius: "8px",
          background: "#111",
          color: "white",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;