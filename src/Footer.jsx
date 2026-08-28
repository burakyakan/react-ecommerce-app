import React, { useState } from "react";
import style from './Footer.module.css'
import { Link } from "react-router-dom";

function Footer() {

  const date = new Date().getFullYear();

  return (
    <footer>
      <span>
        <Link to={`/kvkk-aydinlatma-metni`}>
          <span>KVKK Aydınlatma Metni</span>
        </Link>
        <span> | </span>
        <Link to={`/gizlilik-sozlesmesi`}>
          <span>Gizlilik Sözleşmesi</span>
        </Link>
        <span> | </span>
        <Link to={`/kullanim-kosullari`}>
          <span>Kullanım Koşulları</span>
        </Link>
        <span> | </span>
        <Link to={`/mesafeli-satis-sozlesmesi`}>
          <span>Mesafeli Satış Sözleşmesi</span>
        </Link>
        <span> | </span>
        <Link to={`/hakkimizda`}>
          <span>Hakkımızda</span>
        </Link>
        <span> | </span>
        <span>Kurumsal</span>
        <span> | </span>
        <span>Kariyer</span>
        <span> | </span>
        <Link to={`/sss`}>
          <span>Sıkça Sorulan Sorular</span>
        </Link>
        <span> | </span>
        <span>Müşteri Hizmetleri</span>
      </span>

      <span>
        İletişim: burak@yakan.dev
      </span>

      <span>YASAL UYARI: Bu site tamamen eğlence amaçlıdır. Bu web sitesi gerçek bir e-ticaret sitesi değildir ve kesinlikle herhangi bir hizmet vermez. Gerçek kurum ve kişileşle olan benzerlikler tamamen tesadüfidir. Kullanılan görseller ve diğer telifli içerikler ilgili telif hakkı sahibine aittir. </span>
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