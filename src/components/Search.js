import React from "react";
import { Link } from "react-router-dom";
import "./Search.css";
import axios from "axios";
import { useState } from "react";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearchClick = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/products?search=${searchTerm}`
      );
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="search-box f_flex">
            <input
              type="text"
              placeholder="Etsi tuotteita"
              value={searchTerm}
              onKeyDown={handleKeyDown}
              onChange={(e) => setSearchTerm(e.target.value)}
            ></input>
            <button
              className="searchButton"
              type="button"
              onClick={handleSearchClick}
            >
              <i className="fa fa-search"></i>
            </button>
          </div>

          <div className="cart-icon f_flex width">
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>0</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="search-results">
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.productName}</h3>
            <p>Hinta: {product.price}</p>
          </div>
        ))}
      </section>
    </>
  );
};
