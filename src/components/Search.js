import React from "react";
import { Link } from "react-router-dom";
import "./Search.css";

export const Search = () => {
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Etsi tuotteita"></input>
            <span style={{width:'auto', padding:'0.6px'}}>Kaikki tuotteet</span>
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
