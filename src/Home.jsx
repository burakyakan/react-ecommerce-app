import React, { useMemo, useState } from 'react';
import Product from './Products';
import productsData from './products.json'
import style from './Home.module.css'
import Filter from './Filter';


function Home() {

  const [category, setCategory] = useState("all");
  const [sortType, setSortType] = useState("");


  function handleCategoryChange(newCategory) {
    setCategory(newCategory);

  }

  const filteredProducts = category === "all" ? productsData : productsData.filter(item => item.category === category);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sortType === "priceAsc") return a.price - b.price;
      if (sortType === "priceDesc") return b.price - a.price;
      if (sortType === "ratingDesc") return b.rating - a.rating;
      if (sortType === "ratingAsc") return a.rating - b.rating;
      if (sortType === "alphAZ") return a.title.localeCompare(b.title);
      if (sortType === "alphZA") return b.title.localeCompare(a.title);
      if (sortType === "idDesc") return b.id - a.id;
      if (sortType === "idAsc") return a.id - b.id;
      if (sortType === "random") return Math.random() - 0.5;
      return 0;
    }
    );
  }, [filteredProducts, sortType]);



  return (

    <div >
      <div className={style.filterRow}>
        <Filter onCategoryChange={handleCategoryChange}></Filter>
      </div>


      <h2 className={style.categoryTitle}>{category === "all" ? "Tüm Ürünler" : `${category}`}</h2>
      <h3 className={style.productCount}>{filteredProducts.length} Ürün Bulundu</h3>

      <div>
        <select className={style.sortSelect} value={sortType} onChange={(e) => setSortType(e.target.value)}>
          <div className={style.sortSelectOptions}>
            <option value="">Önerilen</option>
            <option value="priceAsc">Fiyat: Düşükten Yükseğe</option>
            <option value="priceDesc">Fiyat: Yüksekten Düşüğe</option>
            <option value="ratingDesc">Puan: Yüksekten Düşüğe</option>
            <option value="ratingAsc">Puan: Düşükten Yükseğe</option>
            <option value="alphAZ">Alfabetik: A'dan Z'ye</option>
            <option value="alphZA">Alfabetik: Z'den A'ya</option>
            <option value="idDesc">Eklenme Sırası: Yeniden Eskiye</option>
            <option value="idAsc">Eklenme Sırası: Eskiden Yeniye</option>
            <option value="random">Rastgele</option>
          </div>

        </select>
      </div>

      <div className={style.home}>
        {
          sortedProducts.map(({ id, category, brand, title, imgUrl, price, ram, rom, color, rating, screenSize, screenResolution, screenRefreshRate, anc,
            connectionType, watchSize, connectivity, screenTechnology, platform, age, genre }) => (

            <Product key={id} category={category} brand={brand} title={title} imgUrl={imgUrl} price={price}
              ram={ram} rom={rom} color={color} rating={rating} screenSize={screenSize} screenResolution={screenResolution}
              screenRefreshRate={screenRefreshRate} anc={anc} connectionType={connectionType} watchSize={watchSize}
              connectivity={connectivity} screenTechnology={screenTechnology} platform={platform} age={age} genre={genre}></Product>
          ))
        }
      </div>
    </div>






  );

}

export default Home