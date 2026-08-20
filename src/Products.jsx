import React, { useState, useEffect, useRef } from "react";
import style from './Products.module.css'

function Products(props) {

  function addToBasket() {
    return;
  }

  function addToFavorites() {

  }


  return (
    <div className={style.container}>
      <img src={props.img} alt={props.title} />
      <p className={style.title}>{props.title}</p>
      <p className={style.rating}>{props.rating}</p>
      <p className={style.price}>{props.price}</p>
      <button className={style.addToBasketButton} onClick={addToBasket}>Add to Basket</button>
      <button className={style.addToFavoritesButton} onClick={addToFavorites}>Add to Favorites</button>
      
    </div>
  );

}
export default Products