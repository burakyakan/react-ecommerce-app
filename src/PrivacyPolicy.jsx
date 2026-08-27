import style from './PrivacyPolicy.module.css'

function PrivacyPolicy() {

  return (
    <div className={style.mainBox}>
      <h2 className={style.title}>Gizlilik Sözleşmesi</h2>
      <p className={style.date}>Son Güncelleme: 27 Ağustos 2026</p>

      <div className={style.contentBox}>
        <h3>1. Veri Güvenliği ve Koruması Taahhüdümüz</h3>
        <p>birazıburada.com olarak, kullanıcılarımızın ve müşterilerimizin dijital güvenliğine ve gizlilik haklarına en üst düzeyde önem veriyoruz. Sitemizi ziyaret ettiğinizde, üye olduğunuzda veya alışveriş yaptığınızda paylaştığınız tüm veriler, en güncel siber güvenlik altyapılarıyla korunmaktadır. Ticari ve ahlaki sorumluluğumuz gereği, izniniz olmaksızın hiçbir bilginiz üçüncü şahıslarla paylaşılmaz veya ticari amaçla satılmaz.</p>

        <h3>2. Kredi Kartı ve Ödeme Güvenliği</h3>
        <p>Alışveriş süreçlerinizin güvenliği için en yüksek standartları uyguluyoruz:</p>
        <ul>
          <li>Ödeme sayfasında girdiğiniz kredi kartı, banka kartı veya diğer ödeme bilgileri birazıburada.com veritabanında kesinlikle saklanmaz, kaydedilmez ve depolanmaz.</li>
          <li>Tüm ödeme işlemleri, BDDK lisanslı iş ortağımız olan güvenli ödeme altyapısı ve bankanız arasında 256-bit SSL (Secure Sockets Layer) şifreleme protokolü kanalıyla doğrudan gerçekleştirilir.</li>
          <li>Kart bilgileriniz tarayıcınızdan onaylandığı an doğrudan banka sistemine şifreli olarak iletilir; şirket personelimiz dahil hiç kimsenin bu bilgilere erişim yetkisi yoktur.</li>
        </ul>

        <h3>3. Bilgi Paylaşımı ve İletişim İzinleri</h3>
        <p>Sitemize üye olurken veya sipariş verirken kaydettiğiniz e-posta adresi, telefon numarası ve teslimat adresi gibi iletişim verileriniz, sadece siparişinizin durumunu bildirmek ve lojistik süreçlerini yürütmek amacıyla kullanılır. Tarafınızdan açık onay verilmediği sürece; reklam, kampanya, bülten veya tanıtım içerikli hiçbir ticari e-posta ya da kısa mesaj (SMS) gönderilmez. Bilgileriniz yasal zorunluklar (mahkeme kararları, savcılık talepleri vb.) haricinde hiçbir kuruma devredilmez.</p>

        <h3>4. Üyelik ve Şifre Güvenliği</h3>
        <p>birazıburada.com üzerinde oluşturduğunuz kullanıcı hesaplarının şifreleri, veritabanımızda kriptografik yöntemlerle şifrelenerek (hash) tutulur. Güvenliğiniz için şifrenizi kimseyle paylaşmamanız, tahmin edilmesi zor kombinasyonlar seçmeniz ve kamuya açık bilgisayarlarda işlemleriniz bittiğinde oturumu kapatmanız önemle tavsiye edilir. Hesabınızın güvenliğiyle ilgili şüpheli bir durum fark ettiğinizde derhal destek ekibimizle iletişime geçmeniz gerekmektedir.</p>

        <h3>5. Çerezler (Cookies) ve Kullanımı</h3>
        <p>Sitemiz, alışveriş sepetinizin hatırlanması, kullanıcı deneyiminizin iyileştirilmesi ve size daha rafine bir teknoloji küratörlüğü sunabilmek adına teknik çerezler kullanmaktadır. Bu çerezler kimlik bilgilerinizi deşifre etmez, sadece tarayıcı tabanlı anonim hareketleri analiz eder. Dilediğiniz zaman tarayıcı ayarlarınızdan çerezleri engelleyebilir veya silebilirsiniz.</p>

        <h3>6. Değişiklikler ve İletişim</h3>
        <p>birazıburada.com, değişen yasal mevzuatlar ve siber güvenlik standartları doğrultusunda bu Gizlilik Sözleşmesi’nde güncelleme yapma hakkını saklı tutar. Sözleşme hakkında merak ettiğiniz tüm sorular ve detaylı bilgi talepleri için bizimle gizlilik@biraziburada.com e-posta adresi üzerinden dilediğiniz an iletişime geçebilirsiniz.</p>

      </div>

    </div>
  );

}

export default PrivacyPolicy