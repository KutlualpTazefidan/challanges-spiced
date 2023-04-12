import React from "react";
import Image from "./Image";
import logo from "../img/logo.jpg";

function Logo() {
  return (
    <a href="#">
      <Image imageSrc={logo} imageAlt={"logo"} />
    </a>
  );
}

export default Logo;
