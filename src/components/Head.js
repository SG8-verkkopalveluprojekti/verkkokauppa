import React from "react";
import { useCurrency } from './CurrencyContext';
import Button from 'react-bootstrap/Button';


export const Head = () => {
  const { selectedCurrency, toggleCurrency } = useCurrency();

  return (
    <div>
      <section className="head" style={{ backgroundColor: "#333" }}>
        <div className="container d_flex">
          <div className="left-column" style={{marginTop:"3px"}}>
            <i className="fa fa-phone"></i>
            <label>+358 44 000 000</label>
            <i className="fa fa-envelope"></i>
            <label>myynti@nettikaubba.com</label>
          </div>         
          <div>
          <Button style={{ marginTop:"0px"}} variant="outline-light" size="sm" onClick={toggleCurrency}>({selectedCurrency.toUpperCase()})</Button>
          </div>
        </div>
      </section>
    </div>
  );
};
