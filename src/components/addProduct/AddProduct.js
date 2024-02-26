import React, { useContext } from "react";
import "../style/AddProduct.css";
import { ProductContext } from "../../context/indexContext";

const AddProduct = () => {
  const {
    productUrl,
    productName,
    productPrice,
    productAll,
    setProductAll,
    setProductName,
    setProductUrl,
    setProductPraice,
  } = useContext(ProductContext);

  const addToProduct = () => {
    if (productUrl === "" || productName === "" || productPrice === "") {
      alert("Заполните пустые ячейки");
    } else if (productAll.find((el) => el.name === productName)) {
      alert("Такой элемент уже существует");
    } else {
      let newProduct = {
        id: productAll.length ? productAll[productAll.length - 1].id + 1 : 1,
        url: productUrl,
        name: productName,
        price: productPrice,
      };
      let resultLocal = JSON.parse(localStorage.getItem("product")) || [];
      resultLocal.push(newProduct);
      localStorage.setItem("product", JSON.stringify(resultLocal));
      setProductAll(resultLocal);
      setProductName("");
      setProductPraice("");
      setProductUrl("");
    }
  };

  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setProductUrl(reader.result);
    reader.readAsDataURL(file);
  };

  console.log(productAll);
  return (
    <div>
      <div className="container">
        <div className="addPro">
          <input
            className="fileInput"
            onChange={(e) => onChange(e)}
            type="file"
            placeholder="product Url(...)"
          />
          <input
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            type="text"
            placeholder="product Name"
          />
          <input
            value={productPrice}
            onChange={(e) => setProductPraice(e.target.value)}
            type="text"
            placeholder="product Price"
          />
          <button onClick={() => addToProduct()}>add</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
