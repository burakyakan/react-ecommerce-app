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
        <input className={style.searchBar} type="search" placeholder='Ürün, Kategori veya Marka Ara' value={globalSearchTerm} onChange={(e) => setGlobalSearchTerm(e.target.value)} onKeyDown={handleSearchSubmit} />
      </div>

      <div className={style.menuWrapper}>
        <nav>
          <ul>
            <div className={style.favoritesBox}>
              <Link to={'/favorilerim'}>
                <li><span className={style.menuText}>Favorilerim</span></li>
              </Link>
            </div>
            <div className={style.cartBox}>
              <Link to={'/sepet'}>
                <li><span className={style.menuText}>Sepet</span><span className={style.cartProductNumber}>0</span></li>
              </Link>
            </div>
            <div className={style.accountBox}>
              <Link to={'/hesabim'}>
                <li><span className={style.menuText}>Hesabım</span></li>
              </Link>
            </div>  
          </ul>
        </nav>
      </div>

    </header>
  );

}

export default Header