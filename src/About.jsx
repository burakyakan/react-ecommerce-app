import style from './About.module.css'

function About() {


  return (
    <div className={style.mainBox}>
      <h2 className={style.title}>Hakkımızda</h2>

      <div className={style.contentBox}>
        <h3>Hikayemiz: Bir Hayalin Peşinde, 2026’da Başlayan Yolculuk</h3>
        <p>Her şey 2026 yılının başlarında, teknolojinin baş döndürücü bir hızla ilerlediği, her gün binlerce yeni modelin, markanın ve cihazın piyasaya sürüldüğü bir dönemde bir hayalle başladı. Teknoloji artık sadece bir araç veya lüks değil; hayatımızın, işimizin, hobilerimizin ve geleceğe dair hayallerimizin tam merkezindeydi. Ancak bu devasa ekosistem, gelişimle birlikte büyük bir kafa karışıklığını da beraberinde getiriyordu. Tüketiciler sonsuz seçenekler, karmaşık teknik özellikler ve bitmek bilmeyen reklam kampanyaları arasında kayboluyor; "Acaba hangisi gerçekten benim için en iyisi?" sorusunun cevabını ararken yoruluyordu. Alışveriş yapmak bir keşif keyfi olmaktan çıkıp, saatlerce süren kullanıcı yorumu okuma ve kıyaslama işkencesine dönüşmüştü.</p>
        <p>Biz, teknolojiyi sadece satan değil, onunla nefes alan, her yeni cihazı heyecanla inceleyen ve teknolojiyi hayatı kolaylaştırmak için bir tutku olarak gören bir ekip olarak bir karar verdik. İnsanların binlerce sıradan, birbirinin kopyası olan ürün arasında vakit ve enerji kaybetmesini engelleyecek, raflarında sadece gerçekten hayat değiştiren, değer katan teknolojileri barındıran bir platform kuracaktık. İşte birazıburada.com, bu dijital gürültüye ve karmaşaya samimi, şeffaf, dürüst ve cesur bir alternatif olmak amacıyla 2026 yılında kapılarını açtı.</p>
        
        <h3>Bizde Hepsi Yok, Bizde "En İyileri" Var!</h3>
        <p>Geleneksel e-ticaret sitelerinin ve dev pazaryerlerinin aksine, bizim iddiamız "dünyadaki tüm ürünleri tek bir depoya yığmak ve milyonlarca seçenek sunmak" değil. Çok net, açık ve dürüstçe söylüyoruz: Bizde her şey yok. Sizi sayfalarca aşağı kaydırmaya zorlayacak, kalitesinden emin olmadığımız, sırf çeşit olsun ya da kategori kalabalık görünsün diye listelenmiş milyonlarca ürün yığınını bu sitede asla göremezsiniz. Biz niceliğe değil, niteliğe inanıyoruz.</p>
        <p className={style.centered}>Bizim felsefemiz çok daha yalın ve net: Bizde her ürünün birazı var, ama o birazın içinde hep en iyileri var.</p>
        <p>Uzman ekibimiz; piyasadaki akıllı telefonları, bilgisayarları, giyilebilir teknolojileri, ses sistemlerini ve ev yaşam çözümlerini sizler için adeta bir sanat eseri seçer gibi tek tek inceliyor. Sıkı performans testlerinden geçmeyen, malzeme kalitesi standartlarımızın altında kalan, kullanıcı deneyimi sınıfta kalan veya fiyat-performans dengesini kuramamış hiçbir cihazı raflarımıza kabul etmiyoruz. Sitemizde gördüğünüz tek bir kablosuz kulaklık veya akıllı saat, aslında arkasında onlarca elenmiş modelin olduğu, kendi segmentinin en başarılı, en uzun ömürlü temsilcisidir. Biz, milyonlarca seçeneğin yarattığı o yorucu kafa karışıklığını sizin adınıza eliyor, geriye sadece saf kaliteyi, yüksek performansı ve güveni bırakıyoruz. Siz yüzlerce modele bakmak zorunda kalmıyorsunuz; çünkü biz zaten sizin yerinize en iyilerini seçip buraya koyduk.</p>

        <h3>Neden "BirazıBurada"?</h3>
        <p>Çünkü çok iyi biliyoruz ki, hayatı kolaylaştırmak, daha üretken olmak veya dijital dünyadan keyif almak için dünyadaki her şeye sahip olmanıza gerek yok; doğru, kaliteli ve ihtiyacınıza tam cevap veren nitelikli şeylere sahip olmanız yeterli. Az ama öz olanın gücüne inanıyoruz. birazıburada.com olarak temel amacımız, teknoloji alışverişini bir risk veya kumar olmaktan çıkarıp, tamamen güvenli ve keyifli bir keşif sürecine dönüştürmektir. Sitemize giren her bir misafirimizin, "Eğer bu ürün birazıburada.com’da listelenmişse, kesinlikle kendi sınıfının en iyisidir ve arkasında durulacak bir üründür" diyebileceği o sarsılmaz güven bağını inşa etmek bizim en büyük önceliğimizdir.</p>
        <p>2026'da bir hayalle başlayan bu yolculukta; sattığımız her ürünün %100 orijinal ve resmi distribütör garantili olmasından, kargo süreçlerimizin hızına, şeffaf iade politikalarımızdan, satış sonrasında her an karşınızda muhatap bulabileceğiniz samimi destek ekibimize kadar her adımda bu felsefeye sadık kalıyoruz. Teknolojinin tamamını değil, ama hayatınıza gerçekten dokunacak, standartlarınızı yükseltecek en seçkin ve en doğru "birazını" sizinle buluşturmaktan mutluluk duyuyoruz.</p>
        <p className={style.centered}>Çünkü en iyi teknolojiyi seçmek bir uzmanlık işidir ve o uzmanlığın adresi birazıburada.com!</p>

        <p className={style.centered}><span className={style.gold}>Kurulduğumuz günden bu yana desteğinizi bizden esirgemediğiniz için teşekkürler!</span></p>
        <p className={`${style.centered} ${style.ceoNameRow}`}><span className={style.ceoName}>Burak Yakan</span></p>
        <p className={`${style.centered} ${style.ceoInfoRow}`}><span className={style.ceoInfo}>Kurucu & CEO @ BirazıBurada</span></p>

        <img src="src\assets\signature.png" alt="İmza" />

      </div>

    </div>
  );

}

export default About


