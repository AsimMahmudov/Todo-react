import React, { useContext } from "react";
import { ProductContext } from "../../context/indexContext";
import "../style/Product.css";

const Product = () => {
  const { productAll, setBasket, basket } = useContext(ProductContext);
  const addToBasket = (data) => {
    let findProduct = basket.find((el) => el.id === data.id);
    if (!findProduct) {
      let res = JSON.parse(localStorage.getItem("basket")) || [];
      data.quantity = 1;
      res.push(data);
      localStorage.setItem("basket", JSON.stringify(res));
      setBasket((prev) => [...prev, data]);
    } else {
      let changeBasket = basket.map((el) =>
        el.id === data.id ? { ...el, quantity: el.quantity + 1 } : el
      );
      let res = JSON.parse(localStorage.getItem("basket")) || [];

      localStorage.setItem("basket", JSON.stringify(changeBasket));
      setBasket(changeBasket);
    }
  };
  console.log(basket, "Basket");
  return (
    <div id="pr">
      <div className="container">
        <div className="pr">
          {productAll.map((el) => (
            <div className="card">
              <img src={el.url} alt="" />
              <h2>{el.name}</h2>

              <h3>{el.price} сом</h3>

              <button onClick={() => addToBasket(el)} className="edit">
                Basket
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
