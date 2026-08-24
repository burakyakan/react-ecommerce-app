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
            <a href="#">Sepet</a>
            <a href="#">Hesabım</a>
          </ul>
        </nav>
      </div>

    </header>
  );

}

export default Header