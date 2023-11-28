import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Search.css";
import axios from "axios";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleSearchClick = async () => {
    try {
      if (searchTerm.trim() === "") {
        // Display an error message or prevent the search action
        alert("Hakukenttä ei voi olla tyhjä!");
        return;
      }

      const response = await axios.get(
        `http://localhost:3001/products?search=${searchTerm}`
      );

      console.log("API Response:", response.data)
      setProducts(response.data);
      console.log("set products", products);

      // Navigate to the search results page
      navigate(`/search-results?searchTerm=${searchTerm}`);

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
    </>
  );
};