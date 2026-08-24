import React, { useState, useEffect, useRef } from "react";
import style from './Product.module.css'
import { Route } from "react-router-dom";

function Product(props) {

  const [isClicked, setClicked] = useState(false);

  function addToBasket() {
    return;
  }

  function addToFavorites() {

  }

  function addRatingStars() {
    const r = props.rating;

    if (r >= 5.0) return "★★★★★";
    if (r >= 4.5) return "★★★★⯪";
    if (r >= 4.0) return "★★★★☆";
    if (r >= 3.5) return "★★⯪☆☆";
    if (r >= 3.0) return "★★★☆☆";
    if (r >= 2.5) return "★★⯪☆☆";
    if (r >= 2.0) return "★★☆☆☆";
    if (r >= 1.5) return "★⯪☆☆☆";
    if (r >= 1.0) return "★☆☆☆☆";
    if (r >= 0.5) return "⯪☆☆☆☆";

    return "☆☆☆☆☆";

  }

  function formatPrice() {
    const formattedPrice = props.price.toLocaleString('tr-TR', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
    return formattedPrice + " TL";
  }
/* TODO: Eğer kategori saatse mm yazdır, yoksa inç. İki farklı değişkene gerek yok, birleştir */

  return (
    <div className={style.container}>
      <img src={props.imgUrl} alt={props.title} />
      <p className={style.brand}>{props.brand}</p>
      <p className={style.title}>{props.title}</p>
      <div className={style.specs}>
        {props.screenSize && <span>{props.screenSize} {props.category === "Akıllı Saat" ? " mm" : "\""}</span>}
        {props.ram && <span>{props.ram} GB</span>}
        {props.rom && <span>{props.rom} {props.rom >= 1 && props.rom <= 4 ? "TB" : "GB"}</span>}
        {props.connectivity && <span>{props.connectivity}</span>}
        {props.platform && <span>{props.platform}</span>}
        {props.age && <span>{props.category === "Oyun" ? "PEGI " : "+"} {props.age}</span>}
        {props.genre && <span>{props.genre}</span>}
        {props.screenResolution && <span>{props.screenResolution}</span>}
        {props.screenRefreshRate && <span>{props.screenRefreshRate} Hz</span>}
        {props.anc && <span>{props.anc ? "ANC" : null}</span>}
        {props.connectionType && <span>{props.connectionType}</span>}
        {props.screenTechnology && <span>{props.screenTechnology}</span>}
        {props.color && <span>{props.color}</span>}
      </div>
      <div>
        <span className={style.ratingStars}>{addRatingStars()}</span>
        <span> {props.rating}</span>
      </div>

      <p className={style.price}>{formatPrice()}</p>
      <button className={style.addToBasketButton} onClick={addToBasket}>Add to Basket</button>
      <button className={style.addToFavoritesButton} onClick={addToFavorites}>Add to Favorites</button>
    </div>
  );

}
export default Product