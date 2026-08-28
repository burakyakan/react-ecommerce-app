import React, { useMemo, useState, useEffect } from 'react';
import Product from './Products';
import productsData from './products.json'
import style from './Home.module.css'
import Filter from './Filter';

//TODO: Link ile artık öbür sitelere gitme gelmeli,
//TODO: Product Detailed Sayfasını yap artık.
//TODO: Sepete Ekleme ve Likelama fonksiyonu.
//TODO: Genel search bar çalışmalı.
//TODO: Sepet ve hesabım düğmeleri çalıştır.
//TODO: 


function Home({ globalSearchTerm = "", setGlobalSearchTerm }) {

  const [category, setCategory] = useState(() => sessionStorage.getItem("f_category") || "all");
  const [sortType, setSortType] = useState(() => sessionStorage.getItem("f_sortType") || "");
  const [inCategorySearchTerm, setInCategorySearchTerm] = useState(() => sessionStorage.getItem("f_search") || "");
  const [selectedBrand, setSelectedBrand] = useState(() => sessionStorage.getItem("f_brand") || "");
  const [selectedColor, setSelectedColor] = useState(() => sessionStorage.getItem("f_color") || "");
  const [selectedRating, setSelectedRating] = useState(() => sessionStorage.getItem("f_rating") || "");

  useEffect(() => {
    if (globalSearchTerm.trim() !== "") {
      setCategory("all");
      setInCategorySearchTerm("");
      setSelectedBrand("");
      setSelectedColor("");
      setSelectedRating("");
      setSortType("");
    }
  }, [globalSearchTerm]);

  function handleCategoryChange(newCategory) {
    setCategory(newCategory);
    setInCategorySearchTerm("");
    setSelectedBrand("");
    setSelectedColor("");
    setSelectedRating("");
    setSortType("");

    sessionStorage.setItem("f_category", newCategory);
    sessionStorage.setItem("f_search", "");
    sessionStorage.setItem("f_brand", "");
    sessionStorage.setItem("f_color", "");
    sessionStorage.setItem("f_rating", "");
    sessionStorage.setItem("f_sortType", "");

    if (setGlobalSearchTerm) {
      setGlobalSearchTerm("");
    }
  }




  useEffect(() => {
    sessionStorage.setItem("f_category", category);
    sessionStorage.setItem("f_sortType", sortType);
    sessionStorage.setItem("f_search", inCategorySearchTerm);
    sessionStorage.setItem("f_brand", selectedBrand);
    sessionStorage.setItem("f_color", selectedColor);
    sessionStorage.setItem("f_rating", selectedRating);
  }, [category, sortType, inCategorySearchTerm, selectedBrand, selectedColor, selectedRating]);


  const globalFilteredProducts = productsData.filter(item => {
    const searchTerm = globalSearchTerm.toLowerCase().trim().split(/\s+/);
    if (searchTerm.length === 0 || searchTerm[0] === "") return true;

    const productValues = [item.title, item.brand, item.color, item.ram, item.age, item.anc, item.category, item.connectionType,
    item.connectivity, item.genre, item.platform, item.rom, item.screenRefreshRate, item.screenResolution, item.screenSize, item.screenTechnology]
      .map(valid => String(valid ?? '').toLowerCase());

    return searchTerm.every(word =>
      productValues.some(attribute => attribute.includes(word))
    );
  });



  const categoryFilteredProducts = category === "all" ? productsData : productsData.filter(item => item.category === category);
  const productsForFiltering = globalSearchTerm.trim() ? globalFilteredProducts : categoryFilteredProducts;
  const availableBrands = [...new Set(productsForFiltering.map(item => item.brand).filter(Boolean))].sort();
  const availableColors = [...new Set(productsForFiltering.map(item => item.color).filter(Boolean))].sort();

  const searchFilteredProducts = productsForFiltering.filter(item => {
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
      (selectedRating === "3plus" && item.rating >= 3) ||
      (selectedRating === "3minus" && item.rating < 3);

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

  const displayTitle = globalSearchTerm.trim() !== "" 
    ? `Arama Sonucu: "${globalSearchTerm}"` 
    : (category === "all" ? "Tüm Ürünler" : category);



  return (

    <div>
      <div className={style.filterRow}>
        <Filter onCategoryChange={handleCategoryChange}></Filter>
      </div>


      <h2 className={style.categoryTitle}>{displayTitle}</h2>
      <h3 className={style.productCount}>{filteredProducts.length} Ürün Bulundu</h3>

      <div className={style.productBar}>
        <div>
          <select className={style.brandSelect} value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
            <option value="">Marka</option>
            {availableBrands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        <div>
          <select className={style.colorSelect} value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
            <option value="">Renk</option>
            {availableColors.map(color => (
              <option key={color} value={color}>{color}</option>
            ))}
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
            <option value="3minus">3 ★ Altı</option>
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
            connectionType, watchSize, connectivity, screenTechnology, platform, age, genre, layout, accessories }) => (

            <Product key={id} id={id} category={category} brand={brand} title={title} imgUrl={imgUrl} price={price}
              ram={ram} rom={rom} color={color} rating={rating} screenSize={screenSize} screenResolution={screenResolution}
              screenRefreshRate={screenRefreshRate} anc={anc} connectionType={connectionType} watchSize={watchSize}
              connectivity={connectivity} screenTechnology={screenTechnology} platform={platform} age={age} genre={genre} layout={layout} accessories={accessories}></Product>
          ))
        }
      </div>
    </div>






  );

}

export default Home