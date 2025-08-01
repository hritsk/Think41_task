import React, { useEffect, useState } from "react";
import { API } from "../api";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <Link
            to={`/products/${product._id}`}
            key={product._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
              textDecoration: "none",
              color: "black",
            }}
          >
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
