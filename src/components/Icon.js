import React from "react";
import "../styles/Icon.css";

const Icon = ({ icon, url, alt }) => {
  return (
    <li className="icon">
      <a className="icon__link" href={url} alt={alt}>
        {icon}
      </a>
    </li>
  );
};

export default Icon;
