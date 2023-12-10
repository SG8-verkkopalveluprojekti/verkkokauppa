import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const ProductReviewForm = () => {
  const [review, setReview] = useState({
    feedback: "", // Assuming you only want to send feedback
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReview({
      ...review,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/palaute', { feedback: review.feedback })
      .then((resp) => {
        alert('Palaute lisätty onnistuneesti');
      })
      .catch((err) => alert('Jotain meni pieleen'));
    console.log("Review submitted:", review);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="feedback">
        <Form.Label><h4>Tuote palaute</h4></Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="feedback"
          value={review.feedback}
          onChange={handleInputChange}
          placeholder="Kirjoita palaute"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Lisää palaute
      </Button>
    </Form>
  );
};

export default ProductReviewForm;
