import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div
      style={{
        position: "relative",
        background: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow =
          "0 12px 30px rgba(0,0,0,0.18)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 6px 20px rgba(0,0,0,0.12)";
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          background: "#e63946",
          color: "white",
          padding: "5px 10px",
          borderRadius: "5px",
          fontWeight: "bold",
          zIndex: 1,
        }}
      >
        30% OFF
      </div>

      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "280px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "18px" }}>
        <h3
          style={{
            marginBottom: "10px",
            fontSize: "1.3rem",
          }}
        >
          {product.name}

          <span
            style={{
              float: "right",
              cursor: "pointer",
            }}
          >
            ❤️
          </span>
        </h3>

        <div
          style={{
            color: "#f5a623",
            marginBottom: "10px",
          }}
        >
          ⭐⭐⭐⭐⭐
        </div>

        <div
          style={{
            marginBottom: "15px",
          }}
        >
          <span
            style={{
              fontSize: "1.4rem",
              fontWeight: "bold",
            }}
          >
            ₹{product.price}
          </span>

          <span
            style={{
              textDecoration: "line-through",
              color: "#888",
              marginLeft: "10px",
            }}
          >
            ₹{Math.round(product.price * 1.3)}
          </span>
        </div>

        <Link to={`/products/${product.id}`}>
          <button
            style={{
              width: "100%",
              padding: "12px",
              border: "none",
              borderRadius: "8px",
              background: "#111",
              color: "white",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;