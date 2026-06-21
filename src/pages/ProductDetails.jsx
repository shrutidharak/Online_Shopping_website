import { addToCart } from "../services/cartService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productService";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const data = await getProductById(id);
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddToCart = async () => {
    try {
      await addToCart(product.id);
      alert("Product Added To Cart");
    } catch (error) {
      console.error(error);
      alert("Failed To Add Product");
    }
  };

  if (!product) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        Loading...
      </h2>
    );
  }

  return (
    <div
      className="container"
      style={{
        padding: "50px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "50px",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: "15px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            }}
          />
        </div>

        {/* Product Information */}
        <div
          style={{
            maxWidth: "500px",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              marginBottom: "15px",
            }}
          >
            {product.name}
          </h1>

          <div
            style={{
              color: "#f5a623",
              marginBottom: "15px",
              fontSize: "1.1rem",
            }}
          >
            ⭐⭐⭐⭐⭐ (4.8 Rating)
          </div>

          <h2
            style={{
              color: "#111",
              marginBottom: "20px",
            }}
          >
            ₹{product.price}
          </h2>

          <p
            style={{
              lineHeight: "1.8",
              color: "#555",
              marginBottom: "20px",
            }}
          >
            Premium quality fashion designed for comfort,
            elegance, and modern style. Perfect for everyday
            wear and special occasions.
          </p>

          <ul
            style={{
              marginBottom: "25px",
              lineHeight: "2",
              color: "#444",
            }}
          >
            <li>Premium Quality Fabric</li>
            <li>Easy Returns</li>
            <li>Free Delivery</li>
            <li>Secure Payments</li>
          </ul>

          <button
            onClick={handleAddToCart}
            style={{
              padding: "15px 35px",
              border: "none",
              borderRadius: "8px",
              background: "#111",
              color: "white",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;