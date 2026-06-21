import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";
import { getProducts } from "../services/productService";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const [searchParams] = useSearchParams();

  const categoryFromUrl =
    searchParams.get("category") || "All";

  const [category, setCategory] =
    useState(categoryFromUrl);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setCategory(categoryFromUrl);
  }, [categoryFromUrl]);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredProducts = products.filter(
    (product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    }
  );

  return (
    <div className="container">
      <h1 className="page-title">
        Our Products
      </h1>

      <input
        type="text"
        placeholder="🔍 Search Products..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        style={{
          width: "100%",
          maxWidth: "600px",
          display: "block",
          margin: "0 auto 25px",
          padding: "15px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          fontSize: "16px",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        {[
          "All",
          "Men",
          "Women",
          "Ethnic",
          "Footwear",
        ].map((item) => (
          <button
            key={item}
            onClick={() =>
              setCategory(item)
            }
            style={{
              padding: "10px 18px",
              borderRadius: "25px",
              border: "none",
              cursor: "pointer",
              background:
                category === item
                  ? "#111"
                  : "#ddd",
              color:
                category === item
                  ? "white"
                  : "black",
            }}
          >
            {item}
          </button>
        ))}
      </div>

      <p
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        {filteredProducts.length}
        {" "}Products Found
      </p>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(
            (product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            )
          )
        ) : (
          <h2
            style={{
              textAlign: "center",
              width: "100%",
            }}
          >
            No Products Found
          </h2>
        )}
      </div>
    </div>
  );
}

export default Products;