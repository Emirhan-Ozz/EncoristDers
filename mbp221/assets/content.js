/* MBP221 Mobil Uygulamalar ve Teknolojiler: genel tekrar içeriği.
   Kaynak: "Mobil Uygulama Geliştirme ve React Native Ders Notları" (Sunumlar/ klasöründeki PDF).
   Satır içi biçim: `kod` ve **kalın**. */

window.COURSE = {
  id: 'mobil', lang: 'js',
  storeKey: 'mbp221-best',
  reviewLead: 'Notlardaki 4 bölüm, 11 konuya bölündü. Her konunun altında kısa özet, tablo ve tuzaklar var. **Ağırlık React Native bölümünde** (mimari, bileşenler, Flexbox, FlatList): hocanın çalışma sorularının hepsi buradan.',
  testLead: 'Vize **20 soruluk test** (her soru 5 puan). Önce hocanın sorularını çöz, sonra deneme vizelerine geç. Bitirdikten sonra en alttaki **Sınırsız test** ile tüm bankayı tekrar et.',
  formatTitle: 'Vize formatı',
  formatNote: 'Vizede Doğru/Yanlış ve kod sorusu yok. Hocanın çalışma sorularındaki D/Y soruları ve uygulama ödevi, konuyu pekiştirmek için konu testlerinde ve ek pratikte duruyor.',
  hocaLink: { href: '#test/hoca', text: 'Hocanın sorularını çöz →' },
  points: { mc: 5, tf: 5, fill: 5, code: 20 },
  randomExam: { mc: 20 },
  randomDesc: 'Tüm soru bankasından, konulara yayılmış 20 test. Az görülen sorular öne alınır.',
  codeDesc: 'Vizede yok; uygulama ödevine hazırlık. FlatList, Image/Text, StyleSheet.create ve Flexbox boşlukları.'
};

window.EXAM_FORMAT = [
  { range: 'Soru 1–20', what: 'Çoktan seçmeli test', big: '100', small: 'puan (5 × 20)' }
];

window.TRAPS = [
  { t: 'React Native **WebView kullanmaz**. WebView içinde HTML/CSS/JS çalıştıran yapı **hibrit** uygulamadır (Cordova, Ionic).', topic: 'mimari' },
  { t: 'Köprünün (Bridge) yerini alan, JS ile C++ arasında **doğrudan erişim** sağlayan katman **JSI**’dır. Fabric = render motoru, TurboModules = tembel yüklenen modüller.', topic: 'rn-mimari' },
  { t: 'React Native’de `flexDirection` varsayılanı **column** (dikey). Web’de **row**.', topic: 'stil' },
  { t: '`justifyContent` = **ana eksen**, `alignItems` = **çapraz eksen**. `stretch` sadece alignItems’ta, `space-between` justifyContent’ta.', topic: 'stil' },
  { t: 'Stil **string değil, JS nesnesi**: `marginLeft: 10` (camelCase, birimsiz). `"margin-left: 10px"` yanlış.', topic: 'stil' },
  { t: 'Çok sayıda veri → **FlatList** (virtualization). ScrollView hepsini baştan belleğe alır.', topic: 'liste' },
  { t: 'Expo artık kısıtlı değil: **Expo Prebuild** ve Config Plugins ile özel native kod eklenebilir.', topic: 'expo' },
  { t: 'Mobil navigasyon URL tabanlı değil, **Stack (yığın)** tabanlıdır. Kütüphane: **React Navigation**.', topic: 'navigasyon' },
  { t: 'Dokunma hedefi en az **44×44 pt** (iOS) veya **48×48 dp** (Android).', topic: 'ux' },
  { t: 'Google Play **tek seferlik** ücret ve **.aab** zorunlu; Apple App Store **yıllık** üyelik.', topic: 'ekosistem' },
  { t: 'Kotlin → Android, Swift → Apple, Dart → Flutter, C# → .NET MAUI / Unity, Lua → Solar2D.', topic: 'ekosistem' }
];

window.TOPICS = [
  {
    id: 'pazar', title: 'Mobil dünya ve kullanım alanları', src: 'Notlar: Bölüm 1.1 – 1.2',
    blocks: [
      { t: 'p', text: 'Düşen cihaz maliyetleri ve yaygınlaşan kablosuz erişim (**5G / WiFi 6**) sayesinde mobil uygulama kullanımı masaüstünün ve mobil web’in önüne geçti.' },
      { t: 'table', head: ['Veri', 'Değer'], rows: [
        ['Mobilin küresel internet trafiği payı', '%58 – %62'],
        ['Masaüstü payı', '%38 civarı'],
        ['Türkiye’de mobil payı', '%70’in üzeri'],
        ['Mobilde geçen sürenin uygulamalardaki payı', '%85 – %90’dan fazla (kalanı mobil web)']
      ] },
      { t: 'p', text: 'İşletmeler için mobil uygulama: **marka sadakati**, **müşteri deneyimi (UX)**, **doğrudan pazarlama kanalı (push bildirim)** ve **süreç otomasyonu**.' },
      { t: 'table', head: ['Kategori', 'Öne çıkan özellik'], rows: [
        ['Eğitim (EdTech)', 'Mikro öğrenme, oyunlaştırma (gamification)'],
        ['Mobil ticaret (M-Commerce)', 'Apple Pay / Google Pay, kişisel öneri, **AR** ile ürün deneme'],
        ['Sosyal ağ ve iletişim', 'Gerçek zamanlı veri, **uçtan uca şifreli** mesajlaşma'],
        ['Oyun', 'Mağaza gelirlerinin **en büyük** kısmı'],
        ['Eğlence / Streaming', 'İsteğe bağlı video/müzik (**VOD**), canlı yayın'],
        ['Yaşam ve sağlık (mHealth)', 'Giyilebilir cihaz, biyometrik sensör'],
        ['Finans (FinTech)', 'Yüksek güvenlik (Biometric Auth)'],
        ['Üretkenlik ve iş', 'Belge yönetimi, proje takibi, iş birliği']
      ] },
      { t: 'low', text: 'Yüzdeler değişebilen istatistikler. En çok “oyun = en büyük gelir”, “AR = m-ticaret”, “VOD = streaming” eşleşmeleri sorulabilir.' }
    ]
  },
  {
    id: 'mimari', title: 'Mobil uygulama mimari türleri', src: 'Notlar: Bölüm 1.3 · D/Y sorusu 1',
    blocks: [
      { t: 'table', head: ['Tür', 'Nasıl çalışır', 'Artı', 'Eksi'], rows: [
        ['**Native (yerel)**', 'iOS: Swift/Objective-C, Android: Kotlin/Java ve platform SDK’sı', 'Maksimum performans, platform güncellemelerine anında erişim, yüksek güvenlik', '**İki ayrı kod tabanı**, yüksek maliyet, uzun Time-to-Market'],
        ['**Web tabanlı**', 'Tarayıcıda çalışan, HTML5/CSS3/JS ile responsive site', 'Kurulum yok, mağaza onayı yok, tek kod tabanı', 'Donanıma (GPS, kamera, Bluetooth) erişim çok az, **çevrimdışı çalışmaz**, düşük performans'],
        ['**PWA**', 'Web + **Service Worker** + **Web App Manifest**', 'Çevrimdışı çalışma, ana ekrana eklenme, düşük veri, arka plan senkronizasyonu', 'iOS/Safari API kısıtları, App Store dağıtım zorluğu'],
        ['**Hibrit**', 'HTML/CSS/JS, yerel bir kılıf olan **WebView** içinde (Cordova, Ionic)', 'Web bilgisiyle mobil uygulama', 'Arayüz WebView’de çizildiği için **performans düşük**'],
        ['**Çapraz platform**', 'Tek kod tabanı → iOS + Android; **native UI bileşenlerine** dönüşür (React Native, Flutter)', 'Tek kod, native’e yakın performans', '—']
      ] },
      { t: 'trap', text: 'Hibrit ile çapraz platform karışmasın: **WebView = hibrit**. React Native ve Flutter WebView yerine **native derleme veya hızlı yerel köprü/motor** kullanır.' },
      { t: 'tip', text: '“Çevrimdışı çalışır + ana ekrana eklenir + Service Worker” → **PWA**. “Çevrimdışı çalışmaz + donanım erişimi yok” → **web tabanlı**.' }
    ]
  },
  {
    id: 'ekosistem', title: 'Diller, framework’ler ve mağazalar', src: 'Notlar: Bölüm 2.1 – 2.3',
    blocks: [
      { t: 'table', head: ['Dil', 'Nerede', 'Akılda kalacak'], rows: [
        ['**Kotlin**', 'Android', 'Google’ın birincil (first-class) dili, **null-safety**, statik'],
        ['**Swift**', 'Apple (iOS, macOS, watchOS)', 'Hızlı, güvenli, nesne yönelimli'],
        ['**JavaScript / TypeScript**', 'React Native', 'Web’in temeli; TS tip güvenli'],
        ['**Dart**', 'Flutter', 'Google; **AOT** ve **JIT** derleme'],
        ['**C#**', '.NET MAUI (eski Xamarin), Unity', 'Microsoft tabanlı']
      ] },
      { t: 'table', head: ['Framework', 'Geliştirici', 'Dil', 'Yaklaşım', 'Durum'], rows: [
        ['React Native', 'Meta', 'JS / TS', 'React mantığı + Native UI bileşenleri', 'Yaygın (New Architecture)'],
        ['Flutter', 'Google', 'Dart', 'Özel grafik motoru (**Impeller / Skia**)', 'Yaygın'],
        ['.NET MAUI (Xamarin)', 'Microsoft', 'C#', 'Native UI bağlayıcıları', 'MAUI adıyla güncel'],
        ['Apache Cordova', 'Apache', 'HTML/CSS/JS', '**WebView kılıfı**', 'Eski, kullanım düşük'],
        ['Solar2D (Corona)', 'Açık kaynak', '**Lua**', '2D oyun motoru', 'Özel oyun segmenti']
      ] },
      { t: 'table', head: ['Mağaza', 'Kural'], rows: [
        ['Google Play Store', 'Geliştirici konsolu **tek seferlik** ücret; **Android App Bundle (.aab)** zorunlu'],
        ['Apple App Store', '**Yıllık** üyelik; sıkı güvenlik ve tasarım incelemesi (**Review Guidelines**)'],
        ['Diğer', 'Huawei AppGallery, Samsung Galaxy Store, Amazon Appstore']
      ] },
      { t: 'trap', text: 'Flutter **Meta’nın değil Google’ın**, React Native **Google’ın değil Meta’nın**. Xamarin’in yeni adı **.NET MAUI**.' }
    ]
  },
  {
    id: 'rn-mimari', title: 'React Native ve mimarisi', src: 'Notlar: Bölüm 3.1 – 3.2 · Test sorusu 1, D/Y sorusu 1',
    blocks: [
      { t: 'p', text: 'React Native: **Meta (Facebook)** tarafından geliştirilen, JS/TS ile iOS ve Android’e **native arayüz** sunan açık kaynak framework. Felsefesi: **“Learn once, write anywhere”** (bir kez öğren, her yerde yaz).' },
      { t: 'p', text: 'Web React’ten farkı: HTML elemanları (`<div>`, `<span>`, `<p>`) yerine native karşılığı olan bileşenleri (`<View>`, `<Text>`, `<Image>`) kullanır.' },
      { t: 'p', text: '**Eski mimari (Bridge):** JS Thread ile Native/UI Thread, **asenkron JSON köprüsü** üzerinden haberleşirdi. Veriler JSON’a çevrilip asenkron taşındığı için hızlı kaydırma, karmaşık animasyon ve anlık veri aktarımında **darboğaz (bottleneck)** oluşurdu.' },
      { t: 'code', code: `[ JavaScript Thread ] <---> ( Asenkron JSON Bridge ) <---> [ Native / UI Thread ]` },
      { t: 'p', text: '**Yeni mimari (güncel standart):** köprü tamamen kaldırıldı.' },
      { t: 'table', head: ['Parça', 'Görevi'], rows: [
        ['**JSI** (JavaScript Interface)', 'JS kodunun **C++ nesnelerine doğrudan referans** vermesi. Köprü ve JSON serileştirme olmadan native metotlar anında çağrılır.'],
        ['**Fabric**', 'Yeni **render motoru**. UI çizimlerini senkronize edebilir, render performansını artırır, UI gecikmesini sıfıra indirir.'],
        ['**TurboModules**', 'Native modülleri açılışta hepsini değil, **ihtiyaç olunca (lazy loading)** yükler → **App Startup Time** iyileşir.'],
        ['**Hermes**', 'Meta’nın mobil için yaptığı **varsayılan JS motoru**. Düşük bellek, hızlı bayt kod derleme, küçük APK/IPA.']
      ] },
      { t: 'trap', text: 'Soru kökündeki anahtar kelimeye bak: “doğrudan erişim / köprünün yerini alan” → **JSI**; “render / çizim” → **Fabric**; “lazy / açılış süresi” → **TurboModules**; “JS motoru / APK boyutu” → **Hermes**.' }
    ]
  },
  {
    id: 'expo', title: 'Expo ve React Native CLI', src: 'Notlar: Bölüm 3.3 · D/Y sorusu 2',
    blocks: [
      { t: 'p', text: '**Expo** eskiden kısıtlı bir araç seti sayılırdı. Bugün **Expo Prebuild** ve **Custom Native Code** desteğiyle React Native geliştirmenin **endüstri standardı** ve tavsiye edilen yaklaşımı.' },
      { t: 'ul', items: [
        'Xcode / Android Studio karmaşası olmadan **hızlı kurulum**',
        '**Expo Go** uygulamasıyla fiziksel cihazda anında canlı test',
        '**EAS** (Expo Application Services): bulutta APK/IPA derleme ve mağazalara otomatik gönderme',
        'Native modül yazma ve kütüphane desteği: **Expo Config Plugins**'
      ] },
      { t: 'p', text: '**React Native CLI:** `ios` ve `android` klasörleri üzerinde **tam kontrol** veren geleneksel yöntem. Çok özel native SDK entegrasyonlarında veya **mevcut native projeye** React Native eklerken tercih edilir.' },
      { t: 'tip', text: 'Expo Go = cihazda canlı test, EAS = bulutta derleme ve mağazaya gönderme, Config Plugins = native modül desteği. Bu üçü eşleştirme sorusu olarak gelebilir.' }
    ]
  },
  {
    id: 'bilesen', title: 'Temel bileşenler (Core Components)', src: 'Notlar: Bölüm 3.4',
    blocks: [
      { t: 'table', head: ['React Native', 'HTML karşılığı', 'iOS', 'Android'], rows: [
        ['`<View>`', '`<div>`', 'UIView', 'android.view.ViewGroup'],
        ['`<Text>`', '`<p>`, `<span>`', 'UILabel', 'TextView'],
        ['`<Image>`', '`<img>`', 'UIImageView', 'ImageView'],
        ['`<ScrollView>`', 'kaydırılabilir `<div>`', 'UIScrollView', 'ScrollView'],
        ['`<TextInput>`', '`<input type="text">`', 'UITextField', 'EditText'],
        ['`<TouchableOpacity>`', '`<button>`', 'UIButton (custom)', 'Button (custom)'],
        ['`<FlatList>`', 'liste yapısı', 'UITableView', 'RecyclerView']
      ] },
      { t: 'trap', text: '`<TextInput>` Android’de **EditText**, `<Text>` ise **TextView**. Metin girişi ile metin gösterimini karıştırma.' }
    ]
  },
  {
    id: 'stil', title: 'Stil ve Flexbox', src: 'Notlar: Bölüm 3.5 · Test sorusu 2, D/Y sorusu 3',
    blocks: [
      { t: 'p', text: 'Stil, **JavaScript nesneleri** ve `StyleSheet.create()` API’siyle yazılır. Özellikler **camelCase**, sayılar birimsiz.' },
      { t: 'code', code: `import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Merhaba React Native!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});` },
      { t: 'table', head: ['Özellik', 'Ne yapar', 'Değerler'], rows: [
        ['`flexDirection`', 'Ana eksenin yönü', 'RN varsayılanı **column** (web’de row)'],
        ['`justifyContent`', '**Ana eksende** (main axis) hizalama', 'flex-start, center, flex-end, space-between'],
        ['`alignItems`', '**Çapraz eksende** (cross axis) hizalama', 'flex-start, center, flex-end, stretch'],
        ['`flex: 1`', 'Kullanılabilir tüm esnek alanı kaplar', '—']
      ] },
      { t: 'trap', text: '`"margin-left: 10px"` yazılmaz. Doğrusu `marginLeft: 10`. Aynı şekilde `background-color` → `backgroundColor`, `font-size` → `fontSize`.' },
      { t: 'tip', text: 'Varsayılan column olduğundan `justifyContent: \'center\'` öğeyi **dikeyde**, `alignItems: \'center\'` **yatayda** ortalar. `flexDirection: \'row\'` verilirse eksenler yer değiştirir.' }
    ]
  },
  {
    id: 'liste', title: 'ScrollView ve FlatList', src: 'Notlar: Bölüm 3.6 · Test sorusu 3, Uygulama ödevi',
    blocks: [
      { t: 'table', head: ['', 'ScrollView', 'FlatList (önerilen)'], rows: [
        ['Ne render eder', 'Tüm alt bileşenleri (children) **baştan** belleğe alır ve çizer', 'Sadece ekranda görünen (ve yakınındaki) öğeleri'],
        ['Ekran dışı öğeler', 'Bellekte kalır', 'Bellekten boşaltılır (**virtualization**)'],
        ['Uygun olduğu yer', 'Az sayıda, sabit içerik', 'Çok sayıda, dinamik veri'],
        ['Büyük listede', 'RAM tüketir, uygulamayı kilitler', 'Performanslı']
      ] },
      { t: 'code', code: `import { FlatList, Text, View } from 'react-native';

const DATA = [
  { id: '1', title: 'Birinci Öğeler' },
  { id: '2', title: 'İkinci Öğeler' },
];

export default function ListExample() {
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <Text>{item.title}</Text>
        </View>
      )}
    />
  );
}` },
      { t: 'ul', items: [
        '`data`: listelenecek dizi',
        '`keyExtractor`: her öğe için benzersiz anahtar (burada `item.id`)',
        '`renderItem`: her öğenin nasıl çizileceği; parametre `{ item }` olarak açılır'
      ] },
      { t: 'tip', text: 'Uygulama ödevinde istenen: FlatList + her kartta `<Image>` ve `<Text>` (ad, fiyat) + `flexDirection: \'row\'`, `alignItems: \'center\'` + `StyleSheet.create()`. Kod tamamlama sorusu bu kalıptan gelir.' }
    ]
  },
  {
    id: 'navigasyon', title: 'Navigasyon (React Navigation)', src: 'Notlar: Bölüm 3.7',
    blocks: [
      { t: 'p', text: 'Mobilde sayfa geçişi web’deki gibi **URL tabanlı değil**, **Stack (yığın)** yapısı üzerindedir. Güncel standart kütüphane: **React Navigation**.' },
      { t: 'table', head: ['Navigator', 'Görünüm'], rows: [
        ['**Stack Navigator**', 'Sayfaları üst üste ekler (ileri / geri geçiş)'],
        ['**Bottom Tabs Navigator**', 'Ekranın altında sabit sekme menüsü'],
        ['**Drawer Navigator**', 'Yandan açılan çekmece menü']
      ] }
    ]
  },
  {
    id: 'ux', title: 'Mobil UX ve Nielsen’in 10 sezgisi', src: 'Notlar: Bölüm 4.1 – 4.2',
    blocks: [
      { t: 'p', text: 'Mobil tasarım, **kısıtlı ekran** ve **dokunmatik etkileşim** yüzünden masaüstünden ayrılır.' },
      { t: 'ul', items: [
        '**Dokunma hedefi:** en az **44×44 pt** (veya **48×48 dp**)',
        '**Başparmak bölgesi (Thumb Zone):** telefon çoğunlukla tek elle kullanılır; kritik butonlar **alt ve orta** bölgeye',
        '**Dikey (portrait) odak:** etkileşimlerin **%90’dan fazlası** dikey tutuşta'
      ] },
      { t: 'table', head: ['#', 'Sezgi', 'Örnek'], rows: [
        ['1', 'Sistem durumunun görünürlüğü', 'Yükleniyor ikonu / `ActivityIndicator`'],
        ['2', 'Sistem ile gerçek dünyanın eşleşmesi', 'Tanıdık terim ve ikonlar'],
        ['3', 'Kullanıcı kontrolü ve özgürlük', 'Geri alma (**Undo**)'],
        ['4', 'Tutarlılık ve standartlar', 'Aynı renk, buton stili, terim'],
        ['5', 'Hataları önleme', 'Form doğrulama'],
        ['6', 'Hatırlamak yerine tanıma', 'Menü ve seçenekleri açıkça göster'],
        ['7', 'Esneklik ve kullanım verimliliği', 'Kısayollar, mimikler (gestures)'],
        ['8', 'Estetik ve sade tasarım', 'Gereksiz bilgi gürültüsü yok'],
        ['9', 'Hataları teşhis etme ve çözme', 'Anlaşılır, **kodsuz** hata mesajı'],
        ['10', 'Yardım ve dokümantasyon', 'Kolay erişilen kılavuz']
      ] },
      { t: 'trap', text: '“Hataları **önleme**” (5) = hata olmadan engelle, form doğrulama. “Hataları **teşhis etme ve çözme**” (9) = hata olduktan sonra anlaşılır mesaj. Örneğe göre ayır.' }
    ]
  },
  {
    id: 'tasarim', title: 'Tasarım rehberleri ve erişilebilirlik', src: 'Notlar: Bölüm 4.3 – 4.4',
    blocks: [
      { t: 'table', head: ['Rehber', 'Platform', 'Öne çıkan'], rows: [
        ['**Apple Human Interface Guidelines (HIG)**', 'iOS', 'Akıcı animasyon, yuvarlatılmış köşe, sadelik'],
        ['**Google Material Design (Material 3)**', 'Android', 'Katmanlı yapı, dinamik renk (**Material You**), belirgin gölge']
      ] },
      { t: 'p', text: 'Erişilebilirlik: uygulama toplumun tüm kesimlerince kullanılabilmeli.' },
      { t: 'ul', items: [
        '**Ekran okuyucu:** `accessible={true}` ve `accessibilityLabel="Giriş Yap Butonu"` tanımlanır',
        '**Kontrast ve metin boyutu:** yüksek kontrast, dinamik metin ölçekleme (**Dynamic Type**)'
      ] },
      { t: 'code', code: `<TouchableOpacity accessible={true} accessibilityLabel="Giriş Yap Butonu">
  <Text>Giriş</Text>
</TouchableOpacity>` },
      { t: 'trap', text: 'Material You **Google/Android** tarafı; HIG **Apple/iOS** tarafı.' }
    ]
  }
];

window.TOPIC_RULES = {
  pazar: 'Mobil trafik payı küresel %58–62, Türkiye’de %70 üzeri. Mobil sürenin %85–90’ı uygulamalarda. Oyun en büyük mağaza geliri; AR m-ticarette, VOD streaming’de.',
  mimari: 'Native = iki kod tabanı, en yüksek performans. Web = kurulum yok ama çevrimdışı yok. PWA = Service Worker + Manifest, çevrimdışı çalışır. Hibrit = WebView (Cordova, Ionic). Çapraz platform = tek kod, native UI (React Native, Flutter).',
  ekosistem: 'Kotlin Android, Swift Apple, Dart Flutter (AOT+JIT), C# MAUI/Unity, Lua Solar2D. React Native Meta’nın, Flutter Google’ın. Play: tek seferlik ücret + .aab; App Store: yıllık üyelik.',
  'rn-mimari': 'Eski mimaride asenkron JSON Bridge darboğaz yapıyordu. Yeni mimaride JSI doğrudan C++ erişimi, Fabric render motoru, TurboModules lazy loading, Hermes varsayılan JS motoru.',
  expo: 'Expo bugün tavsiye edilen yaklaşım; Prebuild ile native kod eklenebilir. Expo Go cihazda canlı test, EAS bulutta derleme, Config Plugins native modül. CLI ios/android klasörlerinde tam kontrol.',
  bilesen: 'View = div (UIView / ViewGroup), Text = p/span (UILabel / TextView), Image = img, TextInput = input (UITextField / EditText), TouchableOpacity = button, FlatList = UITableView / RecyclerView.',
  stil: 'Stil JS nesnesidir, camelCase ve birimsiz yazılır, StyleSheet.create() ile tanımlanır. Varsayılan flexDirection column. justifyContent ana eksen, alignItems çapraz eksen, flex: 1 tüm alanı kaplar.',
  liste: 'ScrollView tüm çocukları baştan çizer; az ve sabit içerik içindir. FlatList sadece görünenleri çizer (virtualization); data, keyExtractor ve renderItem ({ item }) alır.',
  navigasyon: 'Mobil navigasyon URL değil Stack (yığın) tabanlı; kütüphane React Navigation. Stack = üst üste sayfa, Bottom Tabs = alt sekme, Drawer = yandan çekmece.',
  ux: 'Dokunma hedefi en az 44×44 pt / 48×48 dp. Kritik butonlar başparmak bölgesinde (alt-orta). Nielsen: görünürlük (yükleniyor), Undo = kullanıcı kontrolü, form doğrulama = hataları önleme, kodsuz mesaj = hataları teşhis.',
  tasarim: 'HIG = Apple/iOS (akıcı animasyon, yuvarlak köşe). Material 3 / Material You = Google/Android (katman, dinamik renk). Erişilebilirlik: accessible + accessibilityLabel, kontrast, Dynamic Type.'
};
