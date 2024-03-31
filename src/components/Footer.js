import React, { useState } from "react";
import "../styles/FooterStyles.css";

function Footer() {
  return (
    <div className="footer">
      <h4>
        <span>Total tasks: </span> <span>|</span>
        <span>Completed tasks:</span>
      </h4>
    </div>
  );
}

export default Footer;
