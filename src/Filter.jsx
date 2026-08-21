import React from "react";
import style from './Filter.module.css'

function Filter({ onCategoryChange }) {

  return (
    <div className={style.filterContainer}>

      <button className={style.categoryButton} onClick={() => onCategoryChange("all")}>Tüm Ürünler</button>
      <button className={style.categoryButton} onClick={() => onCategoryChange("Telefon")}>Telefonlar</button>
      <button className={style.categoryButton} onClick={() => onCategoryChange("Tablet")}>Tabletler</button>
      <button className={style.categoryButton} onClick={() => onCategoryChange("Laptop")}>Laptoplar</button>
      <button className={style.categoryButton} onClick={() => onCategoryChange("Akıllı Saat")}>Akıllı Saatler</button>
      <button className={style.categoryButton} onClick={() => onCategoryChange("Kulaklık")}>Kulaklıklar</button>
      <button className={style.categoryButton} onClick={() => onCategoryChange("Konsol")}>Oyun Konsolları</button>
      <button className={style.categoryButton} onClick={() => onCategoryChange("Monitör")}>Monitör</button>
      <button className={style.categoryButton} onClick={() => onCategoryChange("Aksesuar")}>Aksesuar</button>


    </div>
  );

}

export default Filter     