import React, { useEffect } from "react";
import { ProductContext } from "./indexContext";
import { useState } from "react";

const RootContext = ({ children }) => {
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPraice] = useState("");
  const [productAll, setProductAll] = useState([]);
  const [basket, setBasket] = useState([]);
  const getProduct = () => {
    let res = JSON.parse(localStorage.getItem("product")) || [];
    setProductAll(res);
  };

  const getBasket = () => {
    let res = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(res);
  };

  useEffect(() => {
    getProduct();
    getBasket();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productUrl,
        productName,
        productPrice,
        productAll,
        basket,
        setBasket,
        setProductAll,
        setProductName,
        setProductUrl,
        setProductPraice,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default RootContext;
