import React from "react";
import style from './Footer.module.css'
import { Link } from "react-router-dom";
import instagramIcon from './assets/instagram.svg';
import facebookIcon from './assets/facebook.svg';
import xIcon from './assets/x.svg';
import tiktokIcon from './assets/tiktok.svg';
import youtubeIcon from './assets/youtube.svg';
import linkedinIcon from './assets/linkedin.svg';

function Footer() {

  const date = new Date().getFullYear();

  return (
    <footer>
      <div className={style.links}>
        <span>
          <Link to={`/kvkk-aydinlatma-metni`}>
            <span>KVKK Aydınlatma Metni</span>
          </Link>
          <span className={style.divisor}> | </span>
          <Link to={`/gizlilik-sozlesmesi`}>
            <span>Gizlilik Sözleşmesi</span>
          </Link>
          <span className={style.divisor}> | </span>
          <Link to={`/kullanim-kosullari`}>
            <span>Kullanım Koşulları</span>
          </Link>
          <span className={style.divisor}> | </span>
          <Link to={`/mesafeli-satis-sozlesmesi`}>
            <span>Mesafeli Satış Sözleşmesi</span>
          </Link>
          <span className={style.divisor}> | </span>
          <Link to={`/hakkimizda`}>
            <span>Hakkımızda</span>
          </Link>
          <span className={style.divisor}> | </span>
          <Link to={`/sss`}>
            <span>Sıkça Sorulan Sorular</span>
          </Link>
          <span className={style.divisor}> | </span>
          <Link to={`/musteri-hizmetleri`}>
            <span>Müşteri Hizmetleri</span>
          </Link>
        </span>
      </div>

      <div className={style.socialsBox}>
        <a href="https://github.com/burakyakan/react-ecommerce-app" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://github.com/burakyakan/react-ecommerce-app" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://github.com/burakyakan/react-ecommerce-app" target="_blank" rel="noopener noreferrer">
          <img src={xIcon} alt="X" />
        </a>
        <a href="https://github.com/burakyakan/react-ecommerce-app" target="_blank" rel="noopener noreferrer">
          <img src={tiktokIcon} alt="TikTok" />
        </a>
        <a href="https://github.com/burakyakan/react-ecommerce-app" target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} alt="YouTube" />
        </a>
        <a href="https://www.linkedin.com/in/burakyakan/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>

      <p className={style.legalNo}>BirazıBurada E-Ticaret Hizmetleri Anonim Şirketi, MERSİS No: 0622058421000015</p>

      <div>

      </div>





      <div className={style.copyrightFooter}>
        <p>BirazıBurada A.Ş.<a href="https://biraziburada.yakan.dev/" target="_blank" rel="noopener noreferrer">biraziburada.com</a></p>
        <p>&copy; {date} Burak Yakan – Tüm hakları saklıdır.</p>
        <p>Powered by:<a href="https://yakan.dev" target="_blank" rel="noopener noreferrer">yakan.dev</a></p>
      </div>

    </footer>
  );
}
export default Footer