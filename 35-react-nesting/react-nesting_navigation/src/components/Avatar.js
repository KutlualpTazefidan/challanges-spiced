import React from "react";
import Image from "./Image";
import avatar from "../img/avatar.jpg";

function Avatar() {
  return (
    <button
      type="button"
      onClick={() => console.log("I could toggle a profile!")}
      aria-label="toggle profile"
    >
      <Image imageSrc={avatar} imageAlt={"avatar"} />
    </button>
  );
}

export default Avatar;
