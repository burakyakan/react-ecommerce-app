import style from './DistanceSalesAgreement.module.css'

function DistanceSalesAgreement() {

  return (
    <div className={style.mainBox}>
      <h2 className={style.title}>Mesafeli Satış Sözleşmesi</h2>
      <p className={style.color}>Son Güncelleme: 27 Ağustos 2026</p>

      <div className={style.contentBox}>

        <h3>1. Taraflar</h3>
        <ul>
          <li>Satıcı: biraziburada.com</li>
          <ul>
            <li>Adres: İzmir, Türkiye</li>
            <li>E-posta: destek@biraziburada.com</li>
          </ul>
          <li>Alıcı (Tüketici): biraziburada.com web sitesi üzerinden ürün sipariş eden, fatura ve teslimat adres bilgileri sipariş formunda yer alan gerçek veya tüzel kişidir.</li>
        </ul>

        <h3>2. Sözleşmenin Konusu</h3>
        <p>Bu sözleşmenin konusu, Alıcı'nın Satıcı'ya ait biraziburada.com web sitesi üzerinden elektronik ortamda siparişini verdiği, aşağıda nitelikleri ve satış fiyatı belirtilen teknoloji ürünlerinin satışı ve teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri uyarınca tarafların hak ve yükümlülüklerinin belirlenmesidir.</p>

        <h3>3. Sözleşme Konusu Ürün, Ödeme ve Teslimat Bilgileri</h3>
        <p>Sipariş edilen teknoloji ürünlerinin cinsi, modeli, miktarı, satış bedeli, ödeme şekli ve teslimat adresi, Alıcı'nın siparişi onayladığı andaki fatura ve sipariş formunda belirtildiği gibidir. İlan edilen fiyatlar ve vaatler güncelleme yapılana ve değiştirilene kadar geçerlidir. Süreli olarak ilan edilen fiyatlar ise belirtilen süre sonuna kadar geçerlidir.</p>

        <h3>4. Genel Hükümler</h3>
        <ul>
          <li>Alıcı, biraziburada.com web sitesinde sözleşme konusu ürünün temel nitelikleri, satış fiyatı, ödeme şekli ve teslimata ilişkin ön bilgileri okuyup bilgi sahibi olduğunu ve elektronik ortamda gerekli teyidi verdiğini kabul eder.</li>
          <li>Sözleşme konusu ürün, yasal 30 günlük süreyi aşmamak koşulu ile Alıcı'nın yerleşim yerinin uzaklığına bağlı olarak web sitesinde ön bilgiler içinde açıklanan süre içinde Alıcı veya gösterdiği adresteki kişi/kuruluşa teslim edilir.</li>
          <li>Satıcı, sözleşme konusu ürünün sağlam, eksiksiz, siparişte belirtilen niteliklere uygun ve varsa garanti belgeleri ve kullanım kılavuzları ile teslim edilmesinden sorumludur.</li>
          <li>Teknoloji ürünlerinde sevkiyat sırasında oluşabilecek hasarlardan kaçınmak adına, Alıcı teslim almadan önce kargo paketini incelemeli; ezik, kırık, ambalajı yırtılmış hasarlı ürünleri kargo firmasından teslim almamalı ve kargo görevlisine "Hasar Tespit Tutanağı" tutturmalıdır. Hasarlı ürünün teslim alınması durumunda sorumluluk Alıcı'ya aittir.</li>
        </ul>

        <h3>5. Cayma Hakkı</h3>
        <ul>
          <li>Alıcı; malı teslim aldığı tarihten itibaren 14 (ondört) gün içinde, hiçbir hukuki ve cezai sorumluluk üstlenmeksizin ve hiçbir gerekçe göstermeksizin malı reddederek sözleşmeden cayma hakkına sahiptir.</li>
          <li>Cayma hakkının kullanılması için bu süre içinde Satıcı'ya <strong><a href="mailto:destek@biraziburada.com">destek@biraziburada.com</a></strong> e-posta adresi üzerinden yazılı bildirimde bulunulması ve ürünün 6. madde hükümleri çerçevesinde kullanılmamış, ambalajının açılmamış/zarar görmemiş olması şarttır.</li>
        </ul>

        <h3>6. Cayma Hakkı Kullanılamayacak Ürünler (Teknoloji Ürünleri İstisnası)</h3>
        <p>Mesafeli Sözleşmeler Yönetmeliği’nin 15. maddesi ve teknoloji perakendeciliği yasal mevzuatları uyarınca, aşağıdaki durumlarda cayma hakkı kullanılamaz:</p>
        <ul>
          <li>Alıcı tarafından ambalajı, koruma bandı, mührü veya paketi açılmış olan ve iadesi sağlık veya hijyen açısından uygun olmayan ürünler.</li>
          <li>Kutusu açılmış, koruma bandı yırtılmış veya kurulumu yapılmış akıllı telefonlar, bilgisayarlar, tabletler, akıllı saatler ve yazılım/lisans içeren dijital teknoloji ürünleri (Bu ürünler ambalajı açıldığı an tekrar satılabilirlik özelliğini yitirdiği için yasal olarak iade kapsamı dışındadır).</li>
          <li>Alıcı’nın istekleri veya açıkça onun kişisel ihtiyaçları doğrultusunda hazırlanan (Örnek: kişiye özel toplanan bilgisayar kasaları) ürünler.</li>
        </ul>

        <h3>7. Uyuşmazlıkların Çözümü</h3>
        <p>İşbu sözleşmenin uygulanmasında, Ticaret Bakanlığınca ilan edilen değere kadar Alıcı'nın mal veya hizmeti satın aldığı veya ikametgahının bulunduğu yerdeki Tüketici Hakem Heyetleri ile İzmir Tüketici Mahkemeleri yetkilidir.</p>

        <h3>8. Yürürlük</h3>
        <p>Alıcı, web sitesi üzerinden verdiği siparişe ait ödeme işlemini gerçekleştirdiğinde işbu sözleşmenin tüm şartlarını kabul etmiş sayılır. Satıcı, siparişin gerçekleşmesi öncesinde işbu sözleşmenin sitede Alıcı tarafından okunup onaylandığına dair gerekli yazılımsal düzenlemeleri yapmakla yükümlüdür.</p>
        



      </div>

    </div>
  );

}

export default DistanceSalesAgreement