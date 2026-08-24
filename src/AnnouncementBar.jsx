import React, {useEffect, useState} from "react";
import style from './AnnouncementBar.module.css'

function AnnouncementBar() {  

  const announcements = [
    "5000 TL ve Üstü Alışverişe Kargo Bedava!",
    "Nefes Kesici Yenilik: Yeni iPhone 17 ve iPhone 17 Pro Serisini Keşfedin!",
    "Seçili Kredi Kartlarına 12 Ay'a Kadar Vade Farksız Taksit İmkanı",
    "Saat 14.00'a Kadar Verilen Siparişlerde Aynı Gün Kargo!",
    "Yeni Üyelere Özel HOSGELDIN10 Kodu ile Tüm Ürünlerde %10 İndirim! *",
    "İstanbul, Ankara ve İzmir İçi Aynı Gün Teslimat İmkanı",
    "Yeni MacBook Neo. Harika bir Mac, harikulade bir fiyatla.",
    "🎓 Eğitime Özel Fırsatlar Başladı! MacBook ve iPad’lerde Öğrenci İndirimini Kaçırma!"

    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


useEffect(() => {
  
  if (announcements.length <= 1) return;

  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) %  announcements.length);
  }, 7000);

  return (() => clearInterval(interval));

}, [announcements.length]);


  return (
    <div className={style.announcementBar}>
      <p className={style.announcementText}>{announcements[currentIndex]}</p>
    </div>
  );

}

export default AnnouncementBar