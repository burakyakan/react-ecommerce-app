import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from './ProductsDetailed.module.css'
import productsData from './products.json'
import { Link } from "react-router-dom";
import Filter from './Filter';

function ProductsDetailed({ globalSearchTerm, setGlobalSearchTerm }) {

  const { id } = useParams();
  const navigate = useNavigate();
  const product = productsData.find(item => item.id === Number(id));

  function handleCategoryChange(newCategory) {
    sessionStorage.setItem("f_category", newCategory);
    sessionStorage.setItem("f_search", "");
    sessionStorage.setItem("f_brand", "");
    sessionStorage.setItem("f_color", "");
    sessionStorage.setItem("f_rating", "");
    sessionStorage.setItem("f_sortType", "");
    navigate('/');
  }

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
    <div>
      <div className={style.filterRow}>
        <Filter onCategoryChange={handleCategoryChange}></Filter>
      </div>



      <div className={style.container}>
        <div className={style.breadCrumb}>
          <nav>
            <ol>
              <li>
                <button onClick={() => navigate('/', { state: { keepPosition: true } })}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3d4047" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                </button>
              </li>
              <li>
                <button onClick={() => {
                  sessionStorage.setItem("f_category", product.category);
                  sessionStorage.setItem("f_search", "");
                  sessionStorage.setItem("f_brand", "");
                  sessionStorage.setItem("f_color", "");
                  sessionStorage.setItem("f_rating", "");
                  sessionStorage.setItem("f_sortType", "");
                  if (setGlobalSearchTerm) setGlobalSearchTerm("");
                  navigate('/');
                }}>{product.category}</button>
              </li>
              <li>
                <button onClick={() => {
                  sessionStorage.setItem("f_category", product.category);
                  sessionStorage.setItem("f_search", "");
                  sessionStorage.setItem("f_brand", "");
                  sessionStorage.setItem("f_color", "");
                  sessionStorage.setItem("f_rating", "");
                  sessionStorage.setItem("f_sortType", "");
                  setGlobalSearchTerm(product.category === "Oyun" ? `${product.platform} ${product.category}` : `${product.brand} ${product.category}`);
                  navigate('/');
                }}>{product.category === "Oyun" ? `${product.platform} ${product.category}` : `${product.brand} ${product.category}`}</button>
              </li>
              <li>
                <button aria-current="page" onClick={() => { setGlobalSearchTerm(product.category === "Oyun" ? product.title : `${product.brand} ${product.title}`); navigate('/'); }}>{product.category === "Oyun" ? product.title : `${product.brand} ${product.title}`}</button>
              </li>
            </ol>
          </nav>
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

            <div className={style.descriptionBox}>
              <p>{product.description}</p>
            </div>

          </div>
        </div>
      </div>


    </div>


  );

}
export default ProductsDetailed