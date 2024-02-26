import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/indexContext";

const Backet = () => {
  const { basket, setBasket } = useContext(ProductContext);
  const del = (tap) => {
    let res = JSON.parse(localStorage.getItem("basket")) || [];
    console.log(res);
    let resFilter = res.filter((el) => el.id !== tap.id);
    localStorage.setItem("basket", JSON.stringify(resFilter));
    setBasket(resFilter);
  };

  const totalPrice = basket.reduce((acc, el) => {
    return (acc += Number(el.price * el.quantity));
  }, 0);

  /////

  const plus = (data) => {
    let changeBasket = basket.map((el) =>
      el.id === data.id ? { ...el, quantity: el.quantity + 1 } : el
    );
    let res = JSON.parse(localStorage.getItem("basket")) || [];
    localStorage.setItem("basket", JSON.stringify(changeBasket));
    setBasket(changeBasket);
  };

  const minys = (data) => {
    let changeBasket = basket.map((el) =>
      el.id === data.id ? { ...el, quantity: el.quantity - 1 } : el
    );
    let res = JSON.parse(localStorage.getItem("basket")) || [];

    localStorage.setItem("basket", JSON.stringify(changeBasket));
    setBasket(changeBasket);
  };

  ////

  return (
    <div id="basket">
      <div className="container">
        <div className="basket">
          {!basket.length ? (
            <div
              class="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
              role="alert"
            >
              <svg
                class="flex-shrink-0 inline w-4 h-4 me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span class="sr-only">Info</span>
              <div>
                <span class="font-medium">Success alert!</span> Ваша корзина
                пуста
              </div>
            </div>
          ) : (
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left mt-9  rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Nameber
                    </th>
                    <th scope="col" class="px-6 py-3">
                      IMG
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Quantity
                    </th>

                    <th scope="col" class="px-6 py-3 text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {basket.map((el, idx) => (
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-2xl text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {idx + 1}
                      </th>

                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img src={el.url} alt="img" width={80} />
                      </th>
                      <td class="px-6 py-4 text-2xl">{el.name}</td>
                      <td class="px-6 py-4 text-2xl">
                        {el.price * el.quantity} сом
                      </td>
                      <td class="px-6 py-4 text-2xl">{el.quantity}</td>
                      <td class="px-6 py-4 text-2xl text-center">
                        {/* ///// */}

                        {/* <div className="btns"> */}

                        <button className="minys" onClick={() => minys(el)}>
                          -
                        </button>

                        <button className="plus" onClick={() => plus(el)}>
                          +
                        </button>

                        {/* </div> */}

                        {/* /// */}
                        <button
                          onClick={() => del(el)}
                          type="button"
                          class="text-white  bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h1 className="text-white text-3xl">
                Total price: {totalPrice} сом
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Backet;
