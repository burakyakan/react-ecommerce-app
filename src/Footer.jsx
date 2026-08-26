import React, { useState } from "react";
import style from './Footer.module.css'

function Footer() {

  const date = new Date().getFullYear();

  return (
    <footer>
      <span>
        <a href="#">Gizlilik Sözleşmesi</a>
        <span> | </span>
        <a href="#">Kullanım Koşulları</a>
        <span> | </span>
        <a href="#">Site Haritası</a>
        <span> | </span>
        <a href="#">Hakkımızda</a>
        <span> | </span>
        <a href="#">Kurumsal</a>
        <span> | </span>
        <a href="#">Kariyer</a>
        <span> | </span>
        <a href="#">Sıkça Sorulan Sorular</a>
        <span> | </span>
        <a href="#">Yatırımcı İlişkileri</a>
        <span> | </span>
        <a href="#">Müşteri Hizmetleri</a>
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