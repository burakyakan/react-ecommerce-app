import style from './FAQ.module.css'

function FAQ() {


  return (
    <div className={style.mainBox}>
      <h2>Sıkça Sorulan Sorular</h2>
      <p className={style.date}>Son Güncelleme: 27 Ağustos 2026</p>

      <div className={style.contentBox}>

        <details>
          <summary>Sattığınız teknolojik ürünler Türkiye garantili mi?</summary>
          <p>Evet, web sitemizde satılan tüm akıllı telefon, bilgisayar ve aksesuarlar %100 orijinal olup 2 yıl distribütör veya resmi üretici garantilidir.</p>
        </details>

        <details>
          <summary>Siparişim kaç gün içinde kargoya verilir?</summary>
          <p>Hafta içi saat 16:00'ya kadar verdiğiniz siparişler aynı gün kargolanır. Büyük şehirler için teslimat süresi genellikle 1-2 iş günüdür.</p>
        </details>

        <details>
          <summary>Kutusu açılmış teknoloji ürünlerini iade edebilir miyim?</summary>
          <p>Mesafeli Satış Sözleşmesi gereği, koruma bandı/ambalajı açılmış veya kurulumu yapılmış (akıllı telefon, bilgisayar gibi) ürünler, tekrar satılabilirlik özelliğini yitirdiği için cayma hakkı kapsamında iade alınamamaktadır. Arıza durumunda teknik servis raporu gereklidir.</p>
        </details>

        <details>
          <summary>Sitenizde taksit seçenekleri mevcut mu?</summary>
          <p>BDDK mevzuatlarına uygun olarak cep telefonlarında taksit kısıtlaması bulunmakla birlikte, bilgisayar, tablet ve diğer aksesuarlarda kredi kartlarına peşin fiyatına 3, 6 veya 9 taksit imkanı sunulmaktadır.</p>
        </details>

        <details>
          <summary>Kargodan teslim alırken kutu hasarlıysa ne yapmalıyım?</summary>
          <p>Kargo paketinde ezilme, yırtılma veya ıslaklık varsa ürünü teslim almayınız. Kargo görevlisine mutlaka "Hasar Tespit Tutanağı" tutturunuz ve durumu hemen müşteri hizmetlerimize bildiriniz.</p>
        </details>

      </div>
      
    </div>
  );


}

export default FAQ