import style from './Cart.module.css';
import productsData from './products.json';
import CartedProduct from './CartedProduct';

function Cart() {

  const cartedProduct2 = [productsData[61], productsData[55], productsData[37]];


  return (
    <div className={style.mainBox}>
      <h2>Sepet</h2>

      <div className={style.contentBox}>

        <div className={style.itemsBox}>
          {
            cartedProduct2.map(({ id, category, brand, title, imgUrl, price, ram, rom, color, rating, screenSize, screenResolution, screenRefreshRate, anc,
              connectionType, watchSize, connectivity, screenTechnology, platform, age, genre, layout, accessories }) => (

              <CartedProduct key={id} id={id} category={category} brand={brand} title={title} imgUrl={imgUrl} price={price}
                ram={ram} rom={rom} color={color} rating={rating} screenSize={screenSize} screenResolution={screenResolution}
                screenRefreshRate={screenRefreshRate} anc={anc} connectionType={connectionType} watchSize={watchSize}
                connectivity={connectivity} screenTechnology={screenTechnology} platform={platform} age={age} genre={genre} layout={layout} accessories={accessories}></CartedProduct>
            ))
          }
        </div>

        <div className={style.cartInfoBox}>
          <h3>Sepet Özeti</h3>
          <span>Ara Toplam: { }</span>
          <span>Kargo Ücreti: { }</span>
          <div>
            <input type="text" placeholder='Kupon Kodu Giriniz' />
            <button>Uygula</button>
          </div>
          <button className={style.toCheckOutButton}>Sepeti Onayla</button>


        </div>

      </div>

    </div>
  );

}

export default Cart