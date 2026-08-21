import React, { useState } from 'react';
import Product from './Products';
import productsData from './products.json'
import style from './Home.module.css'
import Filter from './Filter';


function Home() {

  const [category, setCategory] = useState("all");

  function handleCategoryChange(newCategory) {
    setCategory(newCategory);

  }

  const filteredProducts = category === "all" ? productsData : productsData.filter(item => item.category === category);





  return (

    <div>
      <div className={style.filterRow}>
        <Filter onCategoryChange={handleCategoryChange}></Filter>
      </div>

      <h2 className={style.categoryTitle}>{category === "all" ? "Tüm Ürünler" : `${category}`}</h2>

      <div className={style.home}>
        {
          filteredProducts.map(({ id, brand, title, imgUrl, price, ram, rom, color, rating, screenSize, screenResolution, screenRefreshRate, anc, connectionType, watchSize, connectivity }) => (
            <Product key={id} brand={brand} title={title} imgUrl={imgUrl} price={price}
              ram={ram} rom={rom} color={color} rating={rating} screenSize={screenSize} screenResolution={screenResolution}
              screenRefreshRate={screenRefreshRate} anc={anc} connectionType={connectionType} watchSize={watchSize} connectivity={connectivity}></Product>
          ))
        }
      </div>
    </div>






  );

}

export default Home