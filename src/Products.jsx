import React, { useState, useEffect, useRef } from "react";
import style from './Product.module.css'

function Product(props) {

  function addToBasket() {
    return;
  }

  function addToFavorites() {

  }

  function formatPrice(){
    const formattedPrice = props.price.toLocaleString('tr-TR', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
    return formattedPrice + " TL";
  }


  return (
    <div className={style.container}>
      <img src={props.imgUrl} alt={props.title} />
      <p className={style.brand}>{props.brand}</p>
      <p className={style.title}>{props.title}</p>
      <div>
        <span>{props.ram} GB • {props.rom} GB • {props.color}</span>
      </div>
      <div>
        <span className={style.rating}>{props.ratingStars}</span>
        <span> {props.ratingNumber}</span>
      </div>
      
      <p className={style.price}>{formatPrice()}</p>
      <button className={style.addToBasketButton} onClick={addToBasket}>Add to Basket</button>
      <button className={style.addToFavoritesButton} onClick={addToFavorites}>Add to Favorites</button>
      
    </div>
  );

}
export default Product