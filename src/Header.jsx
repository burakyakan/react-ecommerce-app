import style from './Header.module.css'
import { Link, useNavigate } from 'react-router-dom';

function Header({ globalSearchTerm, setGlobalSearchTerm }) {

  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter' && globalSearchTerm.trim() !== '') {
      navigate('/');
    }
  };


  return (
    <header>
      <div className={style.logoWrapper}>
        <Link to={`/`}>
          <h1><a href="#" className={style.logoText}>birazıburada</a></h1>
        </Link>

      </div>

      <div className={style.searchBarWrapper}>
        <input className={style.searchBar} type="search" placeholder='Ürün, Kategori veya Marka Ara' value={globalSearchTerm} onChange={(e) => setGlobalSearchTerm(e.target.value)} onKeyDown={handleSearchSubmit}/>
      </div>

      <div className={style.menuWrapper}>
        <nav>
          <ul>
            <li className={style.favoritesBox}><a href="#">Favorilerim</a></li>
            <li className={style.cartBox}><a href="#">Sepet</a><span className={style.cartProductNumber}>00</span></li>
            <li className={style.accountBox}><a href="#">Hesabım</a></li>
          </ul>
        </nav>
      </div>

    </header>
  );

}

export default Header