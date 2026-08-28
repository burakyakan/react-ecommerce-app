import style from './Faq.module.css'

function FAQ() {


  return (
    <div className={style.mainBox}>
      <h2>Sıkça Sorulan Sorular</h2>
      <p className={style.date}>Son Güncelleme: 27 Ağustos 2026</p>

      <div className={style.contentBox}>

        <div>
          <h3>Sipariş ve Teslimat Süreçleri</h3>

          <details>
            <summary>Siparişim ne zaman kargoya verilir?</summary>
            <p>Hafta içi saat 16:00'ya kadar verdiğiniz tüm siparişler aynı gün içerisinde kargoya teslim edilir. Cumartesi saat 12:00'den sonra ve Pazar günü verilen siparişler ise Pazartesi sabahı ilk iş saatinde kargoya verilir. Siparişiniz kargolandığı an SMS ve e-posta ile takip linkiniz iletilir.</p>
          </details>

          <details>
            <summary>Ürünler hangi kargo firması ile gönderiliyor ve teslimat ne kadar sürüyor?</summary>
            <p>Teknoloji ürünlerinin güvenli taşınması adına lojistik ağında en hassas çalışan seçkin kargo firmalarıyla iş ortaklığı yapıyoruz. Siparişleriniz İzmir merkezli depomuzdan çıkış yapar. Büyük şehirlere teslimat süresi genellikle 1-2 iş günüyken, diğer bölgelere maksimum 3 iş günü içerisinde teslimat sağlanır.</p>
          </details>

          <details>
            <summary>Kargo paketim hasarlı gelirse ne yapmalıyım?</summary>
            <p>Teknoloji alışverişlerinde en çok dikkat edilmesi gereken konu budur. Kargo görevlisi kapınızdayken pakette ezilme, yırtılma, ıslaklık veya açılma belirtisi görüyorsanız ürünü <b>kesinlikle teslim almayınız</b>. Kargo görevlisine mutlaka <b>"Hasar Tespit Tutanağı"</b> tutturunuz ve paketi görevliye iade ediniz. Ardından durumu <strong><a href="mailto:destek@biraziburada.com ">destek@biraziburada.com </a></strong> adresimize bildirdiğinizde, yeni ürününüz anında adınıza sevk edilecektir. Tutanak tutulmadan teslim alınan hasarlı paketlerde sorumluluk kargo firması kuralları gereği alıcıya geçmektedir.</p>
          </details>
        </div>

        <div>
          <h3>Ödeme ve Güvenlik</h3>

          <details>
            <summary>Sitenizde hangi ödeme yöntemleri geçerlidir?</summary>
            <p>Tüm bankalara ait kredi kartları, banka kartları (debit kart) ve Troy logolu kartlar ile güvenle ödeme yapabilirsiniz. Ayrıca sepet adımında doğrudan şirket hesabımıza Havale/EFT seçeneği de mevcuttur. Kapıda ödeme seçeneğimiz güvenlik ve operasyonel nedenlerden dolayı bulunmamaktadır.</p>
          </details>

          <details>
            <summary>Kredi kartıyla taksit yapılıyor mu?</summary>
            <p>BDDK mevzuatları gereğince cep telefonu alışverişlerinde taksit sınırlandırmaları uygulanmaktadır. Ancak tablet, bilgisayar, oyuncu ekipmanları ve diğer tüm teknolojik aksesuarlarda anlaşmalı bankaların kredi kartlarına peşin fiyatına 3, 6 veya 9 aya varan taksit seçeneklerimiz mevcuttur. Taksit oranlarını ödeme sayfasında kart bilgilerinizi girdiğinizde net olarak görebilirsiniz.</p>
          </details>

          <details>
            <summary>Ödeme altyapınız güvenli mi? Kart bilgilerim saklanıyor mu?</summary>
            <p>Kesinlikle hayır. biraziburada.com veritabanında kredi kartı bilgileriniz hiçbir şekilde saklanmaz, kaydedilmez ve şirket personelimiz dahil kimse tarafından görülemez. Tüm ödeme süreçleri 256-bit SSL şifreleme protokolü ile doğrudan bankanız ve lisanslı ödeme kuruluşu arasında tamamen korumalı bir dijital tünelde gerçekleşir.</p>
          </details>
        </div>

        <div>
          <h3>Ürünler ve Garanti Durumu</h3>

          <details>
            <summary>Sattığınız ürünler orijinal ve garantili mi?</summary>
            <p>Evet. Sitemizde listelenen tüm akıllı telefonlar, bilgisayarlar ve aksesuarlar %100 orijinaldir. Ürünlerin tamamı doğrudan markaların Türkiye distribütörleri veya resmi üretici hak sahipleri tarafından sağlanan <b>2 yıl resmi Türkiye garantisi</b> altındadır. Adınıza kesilen fatura, aynı zamanda yasal garanti belgeniz yerine geçer. İthalatçı garantili (spot) ürünlerin satışı sitemizde kesinlikle yapılmamaktadır.</p>
          </details>

          <details>
            <summary>Neden sitenizde her markanın her modeli bulunmuyor?</summary>
            <p>Bu durum bizim bilinçli marka politikamızdır. Biz geleneksel, milyonlarca kalitesiz ürünü raflarına yığan dev pazaryerlerinden değiliz. Biz bir teknoloji küratörüyüz. Uzman ekibimiz piyasadaki cihazları performans, uzun ömürlülük ve fiyat-performans kriterlerine göre test eder. Sınıfta kalan hiçbir ürünü sırf çeşit olsun diye sitemize eklemeyiz. Amacımız sizi binlerce model arasında yormak değil, kategorisinin <b>en iyi ve en sorunsuz</b> ürününü doğrudan önünüze getirmektir. Dolayısıyla bizde her ürünün birazı, ama o birazın içinde hep en iyileri vardır.</p>
          </details>
        </div>

        <div>
          <h3>İade ve İptal Koşulları</h3>

          <details>
            <summary>Satın aldığım teknoloji ürününü iade edebilir miyim?</summary>
            <p>Mesafeli Satış Sözleşmesi ve tüketici mevzuatları uyarınca, satın aldığınız ürünün kutusunu açmadıysanız, koruma bandını/mührünü yırtmadıysanız ve ürünü kullanmadıysanız teslim aldığınız tarihten itibaren <b>14 gün içinde</b> hiçbir gerekçe göstermeksizin iade edebilirsiniz. İade kargo ücreti şirketimize aittir.</p>
          </details>

          <details>
            <summary>Kutusunu açtığım veya kurulumunu yaptığım ürünü iade edebilir miyim?</summary>
            <p>Teknoloji ürünlerinde (akıllı telefon, bilgisayar, tablet, akıllı saat vb.) <b>koruma bandı açıldığı, sim kart takıldığı veya cihaz kurulumu yapıldığı an</b> ürün "2. el" statüsüne düşmekte ve tekrar satılabilirlik özelliğini yitirmektedir. Bu nedenle mevzuat gereği kutusu açılmış veya kurulmuş ürünlerde cayma hakkı kapsamında keyfi iade alınamamaktadır. Eğer üründe üretimden kaynaklı bir teknik arıza olduğunu düşünüyorsanız, yetkili servisten alınacak "Değişim/İade Uygundur Raporu" ile birlikte ürünü bize gönderdiğinizde iade veya değişim işleminiz anında gerçekleştirilir.</p>
          </details>

          <details>
            <summary>İade ettiğim ürünün ücreti ne zaman hesabıma yatar?</summary>
            <p>Depomuza ulaşan iade ürünün kontrolü uzman teknik ekibimiz tarafından yapıldıktan sonra, iadeniz onaylanır onaylanmaz ücret iade talimatı bankanıza verilir. Bu süreç ortalama 2-3 iş günü sürer. Ücretin kartınıza yansıma süresi bankanızın iç süreçlerine ve hesap kesim tarihinize bağlı olarak değişiklik gösterebilir.</p>
          </details>
        </div>


      </div>
      
    </div>
  );


}

export default FAQ