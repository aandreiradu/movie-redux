import React from "react";
import "./Footer.scss";

const Footer = () => {
  const footerCopyrightYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div>iCINEMA</div>
      <div>@{footerCopyrightYear}, iCINEMA Inc. or its affiliates</div>
    </div>
  );
};

export default Footer;
