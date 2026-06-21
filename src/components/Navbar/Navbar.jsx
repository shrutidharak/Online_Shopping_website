import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged Out Successfully");
    navigate("/login");
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    transition: "0.3s",
  };

  return (
    <nav
      style={{
        background: "#111",
        color: "white",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "2rem",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          Urban Aura
        </h2>
      </Link>

      {/* Navigation Links */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "25px",
        }}
      >
        <Link to="/" style={linkStyle}>
          Home
        </Link>

        <Link to="/products" style={linkStyle}>
          Products
        </Link>

        <Link to="/cart" style={linkStyle}>
          🛒 Cart
        </Link>

        <Link to="/checkout" style={linkStyle}>
          Checkout
        </Link>

        <Link to="/profile" style={linkStyle}>
          Orders
        </Link>

        {!token ? (
          <>
            <Link to="/login" style={linkStyle}>
              Login
            </Link>

            <Link to="/register" style={linkStyle}>
              Register
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            style={{
              background: "#fff",
              color: "#111",
              border: "none",
              padding: "10px 18px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;