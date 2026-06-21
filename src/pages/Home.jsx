import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          height: "85vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.45)",
            padding: "40px",
            borderRadius: "15px",
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              marginBottom: "20px",
            }}
          >
            Urban Aura
          </h1>

          <p
            style={{
              fontSize: "1.3rem",
              marginBottom: "20px",
            }}
          >
            Premium Fashion For Every Style
          </p>

          <Link to="/products">
            <button
              style={{
                padding: "15px 30px",
                fontSize: "1rem",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                background: "#111",
                color: "white",
              }}
            >
              Shop Now
            </button>
          </Link>
        </div>
      </section>

  {/* Categories */}
<section
  style={{
    padding: "60px 20px",
    textAlign: "center",
    background: "#fff",
  }}
>
  <h2
    style={{
      marginBottom: "40px",
      fontSize: "2rem",
    }}
  >
    Shop By Category
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit,minmax(250px,1fr))",
      gap: "25px",
      maxWidth: "1200px",
      margin: "auto",
    }}
  >
    <Link
      to="/products"
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          cursor: "pointer",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
          alt="Men"
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
          }}
        />
        <h3 style={{ padding: "15px" }}>
          Men's Collection
        </h3>
      </div>
    </Link>

    <Link
      to="/products"
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          cursor: "pointer",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80"
          alt="Women"
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
          }}
        />
        <h3 style={{ padding: "15px" }}>
          Women's Collection
        </h3>
      </div>
    </Link>

    <Link
      to="/products"
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          cursor: "pointer",
        }}
      >
        <img
          src="https://images.pexels.com/photos/9558616/pexels-photo-9558616.jpeg"
          alt="Ethnic"
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
          }}
        />
        <h3 style={{ padding: "15px" }}>
          Ethnic Collection
        </h3>
      </div>
    </Link>

    <Link
      to="/products"
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          cursor: "pointer",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
          alt="Footwear"
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
          }}
        />
        <h3 style={{ padding: "15px" }}>
          Footwear Collection
        </h3>
      </div>
    </Link>
  </div>
</section>

      {/* Featured Collections */}
      <section
        style={{
          padding: "60px 20px",
          background: "#f5f5f5",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2rem",
          }}
        >
          Featured Collections
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
              alt=""
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "15px" }}>
              <h3>Urban Essentials</h3>
            </div>
          </div>
          </div>

          <div
            style={{
              background: "white",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
              alt=""
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "15px" }}>
              <h3>Luxury Women's Wear</h3>
            </div>
          </div>

          <Link
  to="/products"
  style={{
    textDecoration: "none",
    color: "inherit",
  }}
>
  <div
    style={{
      background: "white",
      borderRadius: "15px",
      overflow: "hidden",
      cursor: "pointer",
    }}
  >
    <img
      src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg"
      alt="Royal Ethnic Collection"
      style={{
        width: "100%",
        height: "250px",
        objectFit: "cover",
      }}
    />

    <div style={{ padding: "15px" }}>
      <h3>Royal Ethnic Collection</h3>
    </div>
  </div>
</Link>
      </section>

      {/* Trending Now */}
      <section
        style={{
          padding: "60px 20px",
          background: "#fff",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2rem",
          }}
        >
          🔥 Trending Now
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          <div style={{ background: "#f8f8f8", padding: "20px", borderRadius: "15px", textAlign: "center" }}>
            <h3>Royal Silk Saree</h3>
            <p>Trending Ethnic Wear</p>
          </div>

          <div style={{ background: "#f8f8f8", padding: "20px", borderRadius: "15px", textAlign: "center" }}>
            <h3>Oversized Hoodie</h3>
            <p>Street Fashion</p>
          </div>

          <div style={{ background: "#f8f8f8", padding: "20px", borderRadius: "15px", textAlign: "center" }}>
            <h3>Designer Handbag</h3>
            <p>Women's Collection</p>
          </div>

          <div style={{ background: "#f8f8f8", padding: "20px", borderRadius: "15px", textAlign: "center" }}>
            <h3>Premium Sneakers</h3>
            <p>Footwear Collection</p>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section
        style={{
          padding: "60px 20px",
          background: "#f5f5f5",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            marginBottom: "40px",
            fontSize: "2rem",
          }}
        >
          Featured Brands
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          <div>Nike</div>
          <div>Puma</div>
          <div>Adidas</div>
          <div>Urban Aura</div>
        </div>
      </section>

      {/* Offer Section */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
          background: "#111",
          color: "white",
        }}
      >
        <h2>Summer Fashion Sale</h2>

        <p
          style={{
            marginTop: "15px",
            fontSize: "1.1rem",
          }}
        >
          Get up to 50% OFF on selected collections
        </p>
      </section>
    </>
  );
}

export default Home;