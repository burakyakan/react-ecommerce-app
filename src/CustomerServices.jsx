import style from './CustomerServices.module.css'

function CustomerServices() {

  return (
    <div className={style.mainBox}>
      <h2>Müşteri Hizmetleri</h2>

      <div className={style.contentBox}>
        
        <div>
          <h3>Sadece En İyi Teknolojiyi Seçmedik, En İyi Desteği de Yanına Ekledik.</h3>
          <p>biraziburada.com olarak, dijital dünyanın ve yapay zekanın gücüne sonuna kadar inanıyoruz; ancak müşteri ilişkilerinde insan dokunuşunun ve empati kurabilmenin yerini hiçbir şeyin tutamayacağını çok iyi biliyoruz. Yaşadığınız en ufak teknik soruda, merak ettiğiniz bir ürünün detayında veya iade/değişim süreçlerinizde; karşınızda asla ezberlenmiş kalıplarla konuşan telesekreterler ya da sizi çıkmaza sokan otomatik sohbet robotları bulamazsınız. Platformumuzdaki tüm teknoloji ürünlerini avucunun içi gibi bilen, teknoloji tutkunu gerçek uzmanlarımızla doğrudan iletişim kurarsınız.</p>
        </div>

        <div>
          <h3>Doğrudan İletişim Kanallarımız</h3>
          <p>Size yardımcı olmak ve tüm sorularınızı yanıtlamak için buradayız. Bizimle dilediğiniz kanal üzerinden anında iletişime geçebilirsiniz:</p>
          <ul>
            <li>Müşteri Hizmetleri Telefonu: 0850 XXX XX XXHafta içi ve Cumartesi günleri 09:00 - 19:00 saatleri arasında doğrudan uzman ekibimize bağlanabilirsiniz.</li>
            <li>Destek E-Posta Adresi: destek@biraziburada.comGönderdiğiniz tüm e-postalara en geç 2 saat içinde incelenerek çözüm odaklı geri dönüş sağlanır.</li>
            <li>Canlı Destek Hattı:Sitemizin sağ alt köşesinde bulunan panelden, çalışma saatleri içerisinde ekibimizle anlık olarak yazışabilir, hızlıca destek alabilirsiniz.</li>
          </ul>
        </div>

        <div>
          <h3>Satış Sonrası ve Teknik Servis Süreçleri</h3>
          <p>Bizim için süreç, siz sipariş verip ödemeyi tamamladığınızda veya kargonuz kapınıza ulaştığında bitmez; aksine bizim için asıl ortaklık yeni başlar.</p>
          <ul>
            <li>İlk Kurulum Desteği: Aldığınız akıllı telefon, bilgisayar, tablet veya akıllı ev sistemlerinin ilk kurulumunda bir problem yaşarsanız, müşteri hizmetlerimizi arayarak teknik ekibimizden adım adım telefon desteği alabilirsiniz.</li>
            <li>Yetkili Servis Köprüsü: "Biz ürünü sattık, gerisine üretici baksın" kolaycılığına kesinlikle kaçmıyoruz. Garanti süresi boyunca yaşayabileceğiniz olası teknik arızalarda, işlemlerinizin hızlanması ve mağdur olmamanız için distribütör ve resmi üretici servisleri ile aranızda güçlü bir köprü görevi üstleniyoruz.</li>
            <li>Şeffaflık Sözü: Kargo süreçlerinde yaşanabilecek nadir lojistik gecikmelerde veya teknik aksaklıklarda gerçeği çarpıtmadan, en şeffaf haliyle sizinle paylaşıyor ve vaktinizi çalmadan anında alternatif çözümler üretiyoruz.</li>
          </ul>
        </div>

        <div>
          <h3>Hızlı Çözüm Kılavuzu</h3>
          <p>Müşteri hizmetlerimize bağlanmadan önce, aşağıdaki bağlantılardan süreçlerinize dair hızlıca bilgi edinebilirsiniz:</p>
          <ul>
            <li>Siparişinizin anlık durumunu ve kargo hareketlerini görmek için Sipariş Takibi sayfamızı ziyaret edebilirsiniz.</li>
            <li>Kargo firmaları, teslimat süreleri ve hasarlı kargo süreçleri hakkında detaylar için Kargo ve Teslimat sayfamızı inceleyebilirsiniz.</li>
            <li>Teknoloji ürünlerine özel yasal iade şartları ve cayma hakkı istisnaları için İade ve İptal Şartları kılavuzumuza göz atabilirsiniz.</li>
          </ul>
        </div>
      </div>
    </div>
  );

}

export default CustomerServices