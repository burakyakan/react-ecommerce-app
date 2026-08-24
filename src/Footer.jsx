import React, { useState } from "react";
import style from './Footer.module.css'

function Footer() {

  return (
    <footer>
      <span>
        <a href="#">Gizlilik Sözleşmesi</a>
        <span> | </span>
        <a href="#">Kullanım Koşulları</a>
        <span> | </span>
        <a href="#">Site Haritası</a>
      </span>
      <div className={style.copyrightFooter}>
        <p>&copy; 2026 Burak Yakan - Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );

}
export default Footer