import React from "react";
import Link from "next/link";
import * as css from "../../styles/Navbar.module.css"

const Navbar = () => {
  return (
    // <ul>
      <div className={css.navBar}>
        <Link href="/">
          <a>Home</a>
        </Link>
      
      
        <Link href="/about">
          <a>About</a>
        </Link>
      
      
        <Link href="/">
          <a>Places</a>
        </Link>
      
      
        <Link href="/">
          <a>Culture</a>
        </Link>
      
      
        <Link href="/">
          <a>Visit</a>
        </Link>
      
      
        <Link href="/">
          <a>Live</a>
        </Link>
    
    </div>
    // </ul>
  );
};

export default Navbar;
