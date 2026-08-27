import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import style from './ProductsDetailed.module.css'
import productsData from './products.json'
import { Link } from "react-router-dom";

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
    const formattedPrice = product.price.toLocaleString('tr-TR', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
    return formattedPrice + " TL";
  }


  return (
    <div className={style.container}>
      <div className={style.backToHomepage}>
        <Link to={`/`}>
          <p>Ana Sayfaya Dön</p>
        </Link>
      </div>

      <div className={style.productContentBox}>


        <div className={style.imgBox}>
          <img src={product.imgUrl} alt={product.title} />
        </div>


        <div className={style.productInfoBox}>
          <p className={style.category}>{product.category}</p>
          <p className={style.brand}>{product.brand}</p>
          <p className={style.title}>{product.title}</p>
          <div className={style.specs}>
            {product.layout && <span>{product.layout}</span>}
            {product.accessories && <span>{product.accessories}</span>}
            {product.screenSize && <span>{product.screenSize} {product.category === "Akıllı Saat" ? " mm" : "\""}</span>}
            {product.ram && <span>{product.ram} GB</span>}
            {product.rom && <span>{product.rom} {product.rom >= 1 && product.rom <= 4 ? "TB" : "GB"}</span>}
            {product.connectivity && <span>{product.connectivity}</span>}
            {product.platform && <span>{product.platform}</span>}
            {product.age && <span>{product.category === "Oyun" ? "PEGI " : "+"} {product.age}</span>}
            {product.genre && <span>{product.genre}</span>}
            {product.screenResolution && <span>{product.screenResolution}</span>}
            {product.screenRefreshRate && <span>{product.screenRefreshRate} Hz</span>}
            {product.anc && <span>{product.anc ? "ANC" : null}</span>}
            {product.connectionType && <span>{product.connectionType}</span>}
            {product.screenTechnology && <span>{product.screenTechnology}</span>}
            {product.color && <span>{product.color}</span>}
          </div>

          <div>
            <span className={style.ratingStars}>{addRatingStars()}</span>
            <span className={style.ratingNumber}> {product.rating}</span>
          </div>

          <p className={style.price}>{formatPrice()}</p>

          <div className={style.buttonBox}>
            <button className={style.addToBasketButton} onClick={addToBasket}>Sepete Ekle</button>
            <button className={style.addToFavoritesButton} onClick={addToFavorites}></button>
          </div>

        </div>
      </div>
    </div>
  );

}
export default Product