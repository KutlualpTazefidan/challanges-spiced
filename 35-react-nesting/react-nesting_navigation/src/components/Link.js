import React from "react";

function Link({ navigationLink, children }) {
  return (
    <a className="navigation__link" href={navigationLink}>
      {children}
    </a>
  );
}

export default Link;
