import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import './Feedback.css';

export const Feedback = () => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = () => {
    if (!email || !nickname) {
      setErrorMessage("Sähköposti ja nimimerkki ovat pakollisia!");
      setSuccessMessage("");
      return;
    }

    setSuccessMessage("Palautteesi on lähetetty onnistuneesti!");

    setEmail("");
    setNickname("");
    setFeedback("");
    setRating(null);
    setHover(null);
    setErrorMessage("");
  };

  return (
    <div className="feedback">
      <h2>Jätä meille asiakaspalautetta:</h2>

      <h3>Sähköpostiosoite:</h3>
      <input
        type="email"
        placeholder="email"
        style={{ width: "400px" }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br></br>

      <h3>Lisää nimimerkki:</h3>
      <input
        placeholder="nickname"
        style={{ width: "400px" }}
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <br></br>
      <h3>Palaute:</h3>
      <textarea
        type="text"
        placeholder="write here..."
        style={{ height: "120px", width: "400px" }}
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />
      <br></br>

      <div className="stars-container">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />
          <FaRegStar
            className='star'
            size={25}
            color={currentRating <= (hover || rating) ? "#33b868" : "#e4e5e9"}
            onMouseEnter={() => setHover(currentRating)}
            onMouseLeave={() => setHover(null)}
          />
          </label>
          );
        })}
      </div>

      <button onClick={handleSubmit}>Lähetä palautetta</button>
      
       
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
}

