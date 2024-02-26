import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import "../style/Header.css";
import { ProductContext } from "../../context/indexContext";

const Header = () => {
  const { basket } = useContext(ProductContext);
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="image">
            <div className="logo">
              <h1>M14</h1>
            </div>
          </div>
          <div className="nav-links">
            <NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/addProduct"}>AddProduct</NavLink>
            <NavLink to={"/product"}>Product</NavLink>
            <NavLink to={"/backet"}>
              Backet{" "}
              {!basket.length ? null : (
                <h4 className="ttt">{!basket.length ? "" : basket.length}</h4>
              )}
            </NavLink>
          </div>
          <div className="search">
            <input type="text" placeholder="search..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
