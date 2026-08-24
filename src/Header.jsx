import style from './Header.module.css'

function Header() {


  return (
    <header>
      <h1>BirazıBurada</h1>
      <nav>
        <ul>
          <input className={style.searchBar} type="search" placeholder='Ürün, Kategori veya Marka Ara' />
          <a href="#">Sepet</a>
          <a href="#">Hesabım</a>
        </ul>
      </nav>
    </header>
  );

}

export default Header