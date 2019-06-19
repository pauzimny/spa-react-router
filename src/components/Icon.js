import React from "react";
import "../styles/Icon.css";

const Icon = ({ icon, url, alt }) => {
  return (
    <li className="icon">
      <a
        style={{ fontSize: "30px" }}
        className="icon__link"
        href={url}
        alt={alt}
      >
        {icon}
      </a>
    </li>
  );
};

export default Icon;
