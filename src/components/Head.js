import React from "react";

export const Head = () => {
  return (
    <div>
      <section className="head" style={{ backgroundColor: "#333" }}>
        <div className="container d_flex">
          <div className="left-column">
            <i className="fa fa-phone"></i>
            <label>+358 44 000 000</label>
            <i className="fa fa-envelope"></i>
            <label>example@example.com</label>
          </div>
          <div className="right row RText"></div>
          <label>Need Help?</label>
          <label>Need Help?</label>
          <span>🏴‍☠️</span>
          <label htmlFor="">FI</label>
          <span>🏁</span>
          <label htmlFor="">EUR</label>
        </div>
      </section>
    </div>
  );
};
