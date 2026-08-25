import React, { useMemo, useState } from 'react';
import Product from './Products';
import productsData from './products.json'
import style from './Home.module.css'
import Filter from './Filter';


function Home() {

  const [category, setCategory] = useState("all");
  const [sortType, setSortType] = useState("");
  const [inCategorySearchTerm, setInCategorySearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedRating, setSelectedRating] = useState("");


  function handleCategoryChange(newCategory) {
    setCategory(newCategory);
    setInCategorySearchTerm("");
    setSelectedBrand("");
    setSelectedColor("");
    setSelectedRating("");
    setSortType("");
  }

  const categoryFilteredProducts = category === "all" ? productsData : productsData.filter(item => item.category === category);

  const searchFilteredProducts = categoryFilteredProducts.filter(item => {
    const searchTerm = inCategorySearchTerm.toLowerCase().trim().split(/\s+/);

    if (searchTerm.length === 0 || searchTerm[0] === "") return true;

    const productValues = [item.title, item.brand, item.color, item.ram, item.age, item.anc, item.category, item.connectionType, 
      item.connectivity, item.genre, item.platform, item.rom, item.screenRefreshRate, item.screenResolution, item.screenSize, item.screenTechnology]
      .map(valid => String(valid ?? '').toLowerCase());

      return searchTerm.every(word => 
      productValues.some(attribute => attribute.includes(word))
    );
  });

  const filteredProducts = searchFilteredProducts.filter(item => {
    const matchesBrand = !selectedBrand || item.brand === selectedBrand;
    const matchesColor = !selectedColor || item.color === selectedColor;
    const matchesRating = !selectedRating ||
      (selectedRating === "5" && item.rating === 5) ||
      (selectedRating === "4.5plus" && item.rating >= 4.5) ||
      (selectedRating === "4plus" && item.rating >= 4) ||
      (selectedRating === "3.5plus" && item.rating >= 3.5) ||
      (selectedRating === "3plus" && item.rating >= 3);

    return matchesBrand && matchesColor && matchesRating;
  });





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

    <div>
      <div className={style.filterRow}>
        <Filter onCategoryChange={handleCategoryChange}></Filter>
      </div>


      <h2 className={style.categoryTitle}>{category === "all" ? "Tüm Ürünler" : `${category}`}</h2>
      <h3 className={style.productCount}>{filteredProducts.length} Ürün Bulundu</h3>

      <div className={style.productBar}>
        <div>
          <select className={style.brandSelect} value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
            <option value="">Marka</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
          </select>
        </div>

        <div>
          <select className={style.colorSelect} value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
            <option value="">Renk</option>
            <option value="Beyaz">Beyaz</option>
            <option value="Siyah">Siyah</option>
          </select>
        </div>

        <div>
          <select className={style.ratingSelect} value={selectedRating} onChange={(e) => setSelectedRating(e.target.value)}>
            <option value="">Puan</option>
            <option value="5">5 ★</option>
            <option value="4.5plus">4.5 ★ ve Üzeri</option>
            <option value="4plus">4 ★ ve Üzeri</option>
            <option value="3.5plus">3.5 ★ ve Üzeri</option>
            <option value="3plus">3 ★ ve Üzeri</option>
          </select>
        </div>

        <div>
          <input className={style.inCategorySearchBar} type="search" placeholder={category === "all" ? "Tüm Kategorilerde Ara" : `${category} Kategorisinde Ara`} value={inCategorySearchTerm} onChange={(e) => setInCategorySearchTerm(e.target.value)} />
        </div>

        <div>
          <select className={style.sortSelect} value={sortType} onChange={(e) => setSortType(e.target.value)}>
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
          </select>
        </div>

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