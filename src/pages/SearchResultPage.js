import "./SearchResult.css"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

export const SearchResultPage = () => {
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get("searchTerm");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/products?search=${searchTerm}`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchData();
  }, [searchTerm]); // Include searchTerm in the dependency array to re-fetch when it changes

  console.log("SearchResultPage - Products:", products);

  return (
    <div>
      <section className="search-results">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <h3 className="product-name">{product.productName}</h3>
            <p className="product-price">Hinta: {product.price}€</p>
            <Button
              className="btn btn-primary btn-md"
              style={{ width: "100%" }}
              variant="primary"
            >
              Lisää ostoskoriin
            </Button>
          </div>
        ))}
      </section>
    </div>
  );
};