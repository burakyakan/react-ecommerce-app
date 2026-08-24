import React from "react";
import style from './Filter.module.css'

function Filter({ onCategoryChange }) {

  return (
    <div className={style.filterContainer}>

      <button className={style.categoryButton} onClick={() => onCategoryChange("all")}>Tüm Ürünler</button>
      <button className={style.categoryButton} onClick={() => onCategoryChange("Telefon")}>Telefon</button>
      <button className={style.categoryButton} onClick={() => onCategoryChange("Tablet")}>Tablet</button>
      <button className={style.categoryButton} onClick={() => onCategoryChange("Laptop")}>Laptop</button>
      <button className={style.categoryButton} onClick={() => onCategoryChange("Televizyon")}>Televizyon</button>
      <button className={style.categoryButton} onClick={() => onCategoryChange("Monitör")}>Monitör</button>
      <button className={style.categoryButton} onClick={() => onCategoryChange("Akıllı Saat")}>Akıllı Saat</button>
      <button className={style.categoryButton} onClick={() => onCategoryChange("Kulaklık")}>Kulaklık</button>
      <button className={style.categoryButton} onClick={() => onCategoryChange("Ses")}>Ses</button>
      <button className={style.categoryButton} onClick={() => onCategoryChange("Oyuncu")}>Oyuncu</button>
      <button className={style.categoryButton} onClick={() => onCategoryChange("Oyun Konsolu")}>Oyun Konsolu</button>
      <button className={style.categoryButton} onClick={() => onCategoryChange("Oyun")}>Oyun</button>
      <button className={style.categoryButton} onClick={() => onCategoryChange("Aksesuar")}>Aksesuar</button>


    </div>
  );

}

export default Filter     