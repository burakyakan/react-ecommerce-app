import style from './Header.module.css'

function Header() {


  return (
    <header>
      <div className={style.logoWrapper}>
        <h1><a href="#" className={style.logoText}>birazıburada</a></h1>
      </div>

      <div className={style.searchBarWrapper}>
        <input className={style.searchBar} type="search" placeholder='Ürün, Kategori veya Marka Ara' />
      </div>

      <div className={style.menuWrapper}>
        <nav>
          <ul>
            <li className={style.favoritesBox}><a href="#">Favorilerim</a></li>
            <li className={style.cartBox}><a href="#">Sepet</a><span className={style.cartProductNumber}>99</span></li>
            <li className={style.accountBox}><a href="#">Hesabım</a></li>
          </ul>
        </nav>
      </div>

    </header>
  );

}

export default Header