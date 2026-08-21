import React, { useState } from "react";
import style from './Footer.module.css'

function Footer() {

  return (
    <footer>
      <p>Burak Yakan &copy; 2026</p>
      <span>
        <a href="#">Gizlilik Sözleşmesi</a>
        <span> | </span>
        <a href="#">Kullanım Koşulları</a>
        <span> | </span>
        <a href="#">Site Haritası</a>
      </span>
    </footer>
  );

}
export default Footer