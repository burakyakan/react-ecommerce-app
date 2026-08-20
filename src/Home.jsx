import React from 'react';
import Product from './Products';
import productsData from './products.json'

function Home() {





  return (
    <>
      {
        productsData.map(({ id, brand, title, imgUrl, price, ram, rom, color, ratingStars, ratingNumber }) => (
          <Product key={id} brand={brand} title={title} imgUrl={imgUrl} price={price}
            ram={ram} rom={rom} color={color} ratingStars={ratingStars} ratingNumber={ratingNumber}></Product>
        ))
      }
    </>




  );

}

export default Home