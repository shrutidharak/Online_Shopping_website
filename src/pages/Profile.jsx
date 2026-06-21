import { useEffect, useState } from "react";
import { getOrders } from "../services/orderService";

function Profile() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const data = await getOrders();
      setOrders(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="page-title">My Orders</h1>

      {orders.length === 0 ? (
        <p>No Orders Found</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              background: "white",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>Order #{order.id}</h3>
            <p>Total Amount: ₹{order.total_amount}</p>
            <p>Status: {order.status}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Profile;