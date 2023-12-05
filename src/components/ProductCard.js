import React from "react";
import { Card, Button } from "react-bootstrap";
import { AddCart } from "./AddCart";

const ProductCard = ({ product, openModal }) => {
  return (
    <Card
      key={product.id}
      className="col-3"
      style={{
        width: "250px",
        backgroundColor: "grey",
        marginTop: "30px",
        margin: "10px",
      }}
    >
      <Card.Img
        variant="top"
        src={
          product.imageUrl ||
          "https://ic.jimms.fi/product/4/0/251749-ig800gg.jpg"
        }
        style={{ height: "15rem", marginTop: "5px", padding: "15px" }}
      />
      <Card.Body>
        <Card.Title>{product.productName}</Card.Title>
        <Card.Text></Card.Text>
        <Card.Text style={{ fontSize: "25px" }}>
          {product.price + "€" || "ei hintaa"}
        </Card.Text>
        <AddCart product={product} key={product.id} />
        <Button className="btn btn-primary btn-md"
                style={{ width: "100%" }}
                variant="primary"
                onClick={() => openModal(product)}
        >Lisätietoa
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;