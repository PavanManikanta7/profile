import React from "react";
const Header = () => {
  return (
    <div>
      <a href="/">
        Home
      </a>
      <a href="/About">
        About
      </a>
      <a href="/Contact">
        Contact
      </a>
      <a href="./pdfs/RESUMEP.pdf" download="RESUMEP.pdf">
        <img src="./pdfs/transb.png" alt="Download" style={{height:"30px"}}/>Resume
      </a>
    </div>
  );
};

export default Header;