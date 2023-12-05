import "./SearchResult.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { AddCart } from "../components/AddCart";
import MoreInfo from "../components/MoreInfo";

export const SearchResultPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get("searchTerm");
  const [products, setProducts] = useState([]);

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/products?search=${searchTerm}`
        );
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
            <AddCart product={product} key={product.id} />
            <Button className="btn btn-primary btn-md"
                style={{ width: "100%" }}
                variant="primary"
                onClick={() => openModal(product)}
        >Lisätietoa
        </Button>
          </div>
        ))}
      </section>
      {/* Render the modal using MoreInfo */}
      <MoreInfo
        showModal={showModal}
        closeModal={closeModal}
        selectedProduct={selectedProduct}
      />
    </div>
  );
};