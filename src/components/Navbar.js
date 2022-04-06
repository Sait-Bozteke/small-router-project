import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">Home</Link>
      <NavLink to="/about" className={({isActive})=>isActive ? styles.activeStyle:undefined}
      >About</NavLink>
      <Link to="/products">Products</Link>
    </div>
  );
};

export default Navbar;
