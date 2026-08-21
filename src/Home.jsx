import React from 'react';
import Product from './Products';
import productsData from './products.json'
import style from './Home.module.css'

function Home() {





  return (

    <div className={style.home}>
      {
        productsData.map(({ id, brand, title, imgUrl, price, ram, rom, color, rating }) => (
          <Product key={id} brand={brand} title={title} imgUrl={imgUrl} price={price}
            ram={ram} rom={rom} color={color} rating={rating}></Product>
        ))
      }
    </div>






  );

}

export default Home