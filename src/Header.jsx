import style from './Header.module.css'

function Header() {


  return (
    <header>
      <h1>BirazıBurada</h1>
      <nav>
        <ul>
          <li><a href="#">Telefon</a></li>
          <li><a href="#">Tablet</a></li>
          <li><a href="#">Bilgisayar</a></li>
        </ul>
      </nav>
      <a href="#">Sepet</a>
    </header>
  );

}

export default Header