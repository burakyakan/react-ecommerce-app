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
      <span>
        Tüm ürünlerimize KDV dahildir.
      </span>
      <span>
        "Hepsi değil, birazı burada."
      </span>
      <span>
        iletisim@biraziburada.com
      </span>
      <span>0 232 673 13 94</span>
      <span>
        Burak Mahallesi, Yakan Caddesi, BirazıBurada Towers, No: 14 Bornova / İzmir
      </span>
      <span>
        MERSİS No: 95395661234056593
      </span>
      <span>YASAL UYARI: Bunların hiçbiri gerçek değildir.</span>
      <div>
        
      </div>





      <div className={style.copyrightFooter}>
        <p>&copy; {date} Burak Yakan – Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );

}
export default Footer