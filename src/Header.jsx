import style from './Header.module.css'

function Header() {


  return (
    <header>
      <h1>BirazıBurada</h1>
      <nav>
        <ul>
          <li><a href="#">Sepet</a></li>
          <li><a href="#">Hesabım</a></li>
          <input className={style.searchBar} type="search" placeholder='Ürün, Kategori veya Marka Ara' />
        </ul>
      </nav>
    </header>
  );

}

export default Header