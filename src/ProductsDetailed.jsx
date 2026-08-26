import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import style from './ProductsDetailed.module.css'
import productsData from './products.json'

function Product() {

  const { id } = useParams();
  const product = productsData.find(item => item.id === Number(id));

  if (!product) {
    return <p>Ürün bulunamadı.</p>;
  }

  const [isClicked, setClicked] = useState(false);

  function addToBasket() {
    return;
  }

  function addToFavorites() {

  }

  function addRatingStars() {
    const r = product.rating;

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


  return (
    <div className={style.container}>
      <h1>BURASI DETAILED SAYFASI</h1>
      <div className={style.backToHomepage}>
        <p>Ana Sayfaya Dön</p>
      </div>
      <div className={style.imgBox}>
        <img src={product.imgUrl} alt={product.title} />
      </div>
      
      <p className={style.brand}>{product.brand}</p>
      <p className={style.title}>{product.title}</p>
      <div>
        <span>{product.ram} GB • {product.rom} GB • {product.color}</span>
      </div>
      <div>
        <span className={style.ratingStars}>{product.rating}</span>
        <span> {product.rating}</span>
      </div>

      <p className={style.price}>{product.price.toLocaleString('tr-TR', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })} TL</p>
      <button className={style.addToBasketButton} onClick={addToBasket}>Add to Basket</button>
      <button className={style.addToFavoritesButton} onClick={addToFavorites}>Add to Favorites</button>
    </div>
  );

}
export default Product