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
      </span>
      <div>
        
      </div>





      <div className={style.copyrightFooter}>
        <p>&copy; {date} Burak Yakan – Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );

}
export default Footer