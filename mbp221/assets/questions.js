/* OTOMATİK ÜRETİLDİ: elle düzenleme. Kaynak tools/questions.src.js, üretmek için: node tools/build.js
   a: doğru şık indeksi (0 = A). tf: 0 = Doğru, 1 = Yanlış. blanks: kabul edilen cevaplar, cs: büyük/küçük harf duyarlı. */
window.EXAMS = [
 {
  "id": "hoca",
  "title": "Hocanın çalışma soruları",
  "desc": "Notların sonundaki 3 test + 3 Doğru/Yanlış, birebir. Ek olarak uygulama ödevinden bir kod sorusu.",
  "featured": true,
  "group": "hoca",
  "mode": "practice",
  "questions": [
   {
    "type": "mc",
    "topic": "rn-mimari",
    "src": "Test sorusu 1",
    "a": 1,
    "q": "React Native’in yeni mimarisinde asenkron JSON köprüsünün (Bridge) yerini alarak C++ ve JS arasında doğrudan erişim sağlayan katman aşağıdakilerden hangisidir?",
    "opts": [
     "Fabric",
     "JSI (JavaScript Interface)",
     "Web View",
     "TurboModules"
    ],
    "exp": "**JSI**, JS kodunun C++ nesnelerine doğrudan referans vermesini sağlar; köprü ve JSON serileştirme gerekmez.",
    "why": {
     "0": "Fabric yeni **render motorudur**; arayüz çizimiyle ilgilidir.",
     "2": "WebView hibrit uygulamaların kılıfıdır; React Native mimarisinin parçası değildir.",
     "3": "TurboModules native modülleri **ihtiyaç olunca (lazy)** yükler; doğrudan erişim katmanı değildir."
    }
   },
   {
    "type": "mc",
    "topic": "stil",
    "src": "Test sorusu 2",
    "a": 2,
    "q": "React Native’de `flexDirection` özelliğinin varsayılan değeri nedir?",
    "opts": [
     "row",
     "row-reverse",
     "column",
     "flex-start"
    ],
    "exp": "React Native’de varsayılan yön **column** (dikey). Web’de varsayılan row’dur.",
    "why": {
     "0": "row **web’in** varsayılanıdır; React Native’de column.",
     "1": "row-reverse ayrıca verilmesi gereken bir değerdir.",
     "3": "flex-start bir hizalama değeridir (justifyContent / alignItems), yön değil."
    }
   },
   {
    "type": "mc",
    "topic": "liste",
    "src": "Test sorusu 3",
    "a": 2,
    "q": "Çok sayıda veriden oluşan dinamik bir listede bellek performansını korumak için hangi bileşen tercih edilmelidir?",
    "opts": [
     "`<ScrollView>`",
     "`<View>`",
     "`<FlatList>`",
     "`<Text>`"
    ],
    "exp": "**FlatList** sadece ekranda görünen öğeleri çizer, ekran dışına çıkanları bellekten boşaltır (virtualization).",
    "why": {
     "0": "ScrollView tüm çocukları baştan belleğe alır; büyük listede uygulamayı kilitler.",
     "1": "View bir kapsayıcıdır (div), liste performansı sağlamaz.",
     "3": "Text sadece metin gösterir."
    }
   },
   {
    "type": "tf",
    "topic": "mimari",
    "src": "D/Y sorusu 1",
    "a": 1,
    "q": "React Native uygulamaları bir WebView içinde çalışan HTML5 kodlarından ibarettir.",
    "exp": "**Yanlış.** WebView içinde HTML/CSS/JS çalıştıran yapı **hibrit** uygulamadır (Cordova, Ionic). React Native WebView yerine kodu **native UI bileşenlerine** dönüştürür (Bölüm 1.3-E ve 3.1). **Not:** PDF’deki cevap anahtarında bu soru için “D” yazıyor; notların kendisiyle çeliştiği için burada Yanlış kabul edildi. Hocaya sormanda fayda var.",
    "opts": [
     "Doğru",
     "Yanlış"
    ]
   },
   {
    "type": "tf",
    "topic": "expo",
    "src": "D/Y sorusu 2",
    "a": 0,
    "q": "Expo Prebuild yapısı sayesinde artık Expo projelerine de özel yerel (native) kodlar eklenebilmektedir.",
    "exp": "**Doğru.** Expo Prebuild ve Custom Native Code desteği sayesinde Expo artık kısıtlı değil, endüstri standardı.",
    "opts": [
     "Doğru",
     "Yanlış"
    ]
   },
   {
    "type": "tf",
    "topic": "stil",
    "src": "D/Y sorusu 3",
    "a": 1,
    "q": "React Native’de stil tanımlarken HTML’deki gibi string olarak `\"margin-left: 10px\"` yazılır.",
    "exp": "**Yanlış.** Doğrusu camelCase nesne yapısı: `marginLeft: 10`.",
    "opts": [
     "Doğru",
     "Yanlış"
    ]
   },
   {
    "type": "code",
    "topic": "liste",
    "src": "Uygulama ödevinden",
    "title": "E-ticaret ürün listesi",
    "q": "Uygulama ödevindeki ürün listeleme ekranı: veriler performanslı bir listeyle gösterilecek, her kartta görsel ile ad-fiyat yan yana duracak ve stiller performans için tek seferde oluşturulacak. Boşlukları tamamla.",
    "code": "import { FlatList, View, Text, Image, StyleSheet } from 'react-native';\n\nconst URUNLER = [\n  { id: '1', ad: 'Kulaklık', fiyat: '750 TL', gorsel: 'https://ornek.com/kulaklik.png' },\n  { id: '2', ad: 'Klavye', fiyat: '1200 TL', gorsel: 'https://ornek.com/klavye.png' },\n];\n\nexport default function UrunListesi() {\n  return (\n    <{{1}}\n      data={URUNLER}\n      keyExtractor={(item) => item.id}\n      renderItem={({ item }) => (\n        <View style={styles.kart}>\n          <{{2}} source={{ uri: item.gorsel }} style={styles.gorsel} />\n          <Text>{item.ad} - {item.fiyat}</Text>\n        </View>\n      )}\n    />\n  );\n}\n\nconst styles = StyleSheet.{{3}}({\n  kart: { flexDirection: '{{4}}', alignItems: 'center' },\n  gorsel: { width: 60, height: 60 },\n});",
    "blanks": [
     {
      "ans": [
       "FlatList"
      ],
      "cs": true
     },
     {
      "ans": [
       "Image"
      ],
      "cs": true
     },
     {
      "ans": [
       "create"
      ],
      "cs": true
     },
     {
      "ans": [
       "row"
      ],
      "cs": true
     }
    ],
    "exps": [
     "Çok sayıda ürün için `FlatList` (ödev gereksinimi 1).",
     "Ürün görseli `<Image>` ile gösterilir (gereksinim 2).",
     "Stiller `StyleSheet.create()` ile tanımlanır (gereksinim 4).",
     "Görsel ve metnin yan yana durması için `flexDirection: 'row'` (gereksinim 3)."
    ],
    "note": "Bileşen adları büyük harfle başlar: `flatlist` veya `image` yazılırsa React Native onları tanımaz."
   }
  ]
 },
 {
  "id": "deneme-1",
  "title": "Deneme vizesi 1",
  "desc": "20 soru test, gerçek vize formatında.",
  "questions": [
   {
    "type": "mc",
    "topic": "pazar",
    "q": "Ders notlarına göre Türkiye pazarında mobil cihazların internet kullanımındaki payı hangi düzeydedir?",
    "opts": [
     "%25’in altında",
     "%70’in üzerinde",
     "%38 civarında",
     "%50 ile %55 arasında"
    ],
    "exp": "Türkiye’de mobil payı **%70’in üzerine** çıktı. Küresel ortalama %58–62.",
    "why": {
     "2": "%38 küresel **masaüstü** payıdır.",
     "3": "Küresel mobil pay bile %58–62; Türkiye bunun da üzerinde."
    },
    "a": 1
   },
   {
    "type": "mc",
    "topic": "mimari",
    "q": "Aşağıdakilerden hangisi **native (yerel)** uygulamaların bir dezavantajıdır?",
    "opts": [
     "Cihaz donanımına erişimin çok az olması",
     "Çevrimdışı çalışamaması",
     "Arayüzün WebView üzerinde çizilmesi",
     "İki ayrı kod tabanının yönetilmesi"
    ],
    "exp": "Native’de iOS ve Android için **iki ayrı kod tabanı** gerekir; maliyet ve Time-to-Market artar.",
    "why": {
     "0": "Donanım erişiminin az olması **web tabanlı** uygulamaların sorunudur; native maksimum erişime sahiptir.",
     "1": "Çevrimdışı çalışamama **web tabanlı** uygulamaların sorunudur.",
     "2": "WebView’de çizim **hibrit** uygulamalara aittir."
    },
    "a": 3
   },
   {
    "type": "mc",
    "topic": "mimari",
    "q": "Service Worker ve Web App Manifest altyapısıyla çevrimdışı çalışabilen ve ana ekrana eklenebilen web uygulamasına ne ad verilir?",
    "opts": [
     "Responsive web sitesi",
     "Hibrit uygulama",
     "PWA (Progressive Web App)",
     "Native uygulama"
    ],
    "exp": "**PWA**: standart web teknolojileri + Service Worker + Web App Manifest ile native benzeri deneyim.",
    "why": {
     "0": "Sıradan responsive web sitesi çevrimdışı çalışamaz.",
     "1": "Hibrit uygulama WebView kılıfı içinde çalışır; Service Worker tanımı PWA’ya aittir."
    },
    "a": 2
   },
   {
    "type": "mc",
    "topic": "ekosistem",
    "q": "Google tarafından Flutter için geliştirilen, AOT ve JIT derleme sunan dil hangisidir?",
    "opts": [
     "Dart",
     "Swift",
     "Lua",
     "Kotlin"
    ],
    "exp": "**Dart**, Flutter’ın dilidir ve hem AOT (Ahead-Of-Time) hem JIT (Just-In-Time) derleme sunar.",
    "why": {
     "1": "Swift Apple ekosisteminin dilidir.",
     "2": "Lua, Solar2D oyun motorunun dilidir.",
     "3": "Kotlin de Google destekli ama **Android**’in birincil dilidir, Flutter’ın değil."
    },
    "a": 0
   },
   {
    "type": "mc",
    "topic": "rn-mimari",
    "q": "React Native’in yeni mimarisinde native modüllerin uygulama açılışında hepsinin birden değil, ihtiyaç duyulduğunda yüklenmesini sağlayan yapı hangisidir?",
    "opts": [
     "TurboModules",
     "Fabric",
     "Bridge",
     "Hermes"
    ],
    "exp": "**TurboModules** modülleri lazy loading ile yükler; bu da uygulama açılış süresini (App Startup Time) iyileştirir.",
    "why": {
     "1": "Fabric render motorudur.",
     "2": "Bridge eski mimarinin asenkron JSON köprüsüdür; yeni mimaride kaldırıldı.",
     "3": "Hermes JavaScript motorudur."
    },
    "a": 0
   },
   {
    "type": "mc",
    "topic": "expo",
    "q": "Expo ekosisteminde uygulamanın bulut ortamında APK/IPA olarak derlenip mağazalara otomatik gönderilmesini sağlayan hizmet hangisidir?",
    "opts": [
     "Expo Config Plugins",
     "Expo Go",
     "Hermes",
     "EAS (Expo Application Services)"
    ],
    "exp": "**EAS**: bulutta derleme ve mağazalara otomatik gönderim.",
    "why": {
     "0": "Config Plugins native modül ve kütüphane desteği içindir.",
     "1": "Expo Go fiziksel cihazda **canlı test** uygulamasıdır.",
     "2": "Hermes bir JS motorudur, Expo hizmeti değildir."
    },
    "a": 3
   },
   {
    "type": "mc",
    "topic": "bilesen",
    "q": "React Native’deki `<TextInput>` bileşeninin Android’deki native karşılığı hangisidir?",
    "opts": [
     "RecyclerView",
     "TextView",
     "UITextField",
     "EditText"
    ],
    "exp": "`<TextInput>` → iOS’ta **UITextField**, Android’de **EditText**.",
    "why": {
     "0": "RecyclerView, `<FlatList>`in Android karşılığıdır.",
     "1": "TextView, `<Text>` bileşeninin Android karşılığıdır.",
     "2": "UITextField iOS karşılığıdır, Android değil."
    },
    "a": 3
   },
   {
    "type": "mc",
    "topic": "stil",
    "q": "Varsayılan `flexDirection` değeriyle çalışan bir kapsayıcıda `justifyContent: 'center'` verilirse içerik nasıl hizalanır?",
    "opts": [
     "Yatay eksende ortalanır",
     "Tüm genişliğe yayılır",
     "Hem yatayda hem dikeyde ortalanır",
     "Dikey eksende ortalanır"
    ],
    "exp": "Varsayılan yön **column**, yani ana eksen dikeydir. `justifyContent` ana eksende hizaladığı için içerik **dikeyde** ortalanır.",
    "why": {
     "0": "Yatay, column yönünde **çapraz eksendir**; onu `alignItems` hizalar.",
     "1": "Genişliğe yayma `alignItems: 'stretch'` ile olur."
    },
    "a": 3
   },
   {
    "type": "mc",
    "topic": "navigasyon",
    "q": "React Navigation’da ekranın altında sabit bir sekme menüsü sunan navigator hangisidir?",
    "opts": [
     "Bottom Tabs Navigator",
     "Drawer Navigator",
     "FlatList Navigator",
     "Stack Navigator"
    ],
    "exp": "**Bottom Tabs Navigator** ekranın altında sabit sekme menüsü sunar.",
    "why": {
     "1": "Drawer yandan açılan çekmece menüdür.",
     "2": "Böyle bir navigator yok; FlatList bir liste bileşenidir.",
     "3": "Stack sayfaları üst üste ekler (ileri/geri)."
    },
    "a": 0
   },
   {
    "type": "mc",
    "topic": "ux",
    "q": "Nielsen’in sezgilerinden “Kullanıcı Kontrolü ve Özgürlük” ilkesine en uygun örnek hangisidir?",
    "opts": [
     "Yanlış işlemi geri alma (Undo) seçeneği sunmak",
     "Form alanlarını gönderilmeden önce doğrulamak",
     "Veri yüklenirken ActivityIndicator göstermek",
     "Tüm ekranlarda aynı buton stilini kullanmak"
    ],
    "exp": "Kullanıcı kontrolü ve özgürlük = yanlış işlemi **geri alabilmek (Undo)**.",
    "why": {
     "1": "Form doğrulama **hataları önleme** ilkesidir.",
     "2": "ActivityIndicator **sistem durumunun görünürlüğü** ilkesidir.",
     "3": "Aynı buton stili **tutarlılık ve standartlar** ilkesidir."
    },
    "a": 0
   },
   {
    "type": "mc",
    "topic": "pazar",
    "q": "Ders notlarına göre masaüstü cihazların küresel internet trafiğindeki payı yaklaşık ne kadardır?",
    "opts": [
     "%85–%90",
     "%58–%62",
     "%70’in üzerinde",
     "%38 civarında"
    ],
    "exp": "Masaüstü payı **%38 civarı**, mobil payı %58–62.",
    "why": {
     "0": "%85–90 mobil sürenin uygulamalarda geçen kısmıdır.",
     "1": "%58–62 küresel **mobil** payıdır.",
     "2": "%70 üzeri Türkiye’deki mobil payıdır."
    },
    "a": 3
   },
   {
    "type": "mc",
    "topic": "mimari",
    "q": "Aşağıdakilerden hangisi hibrit uygulama geliştirmek için kullanılan bir araçtır?",
    "opts": [
     "Flutter",
     "React Native",
     "Ionic",
     "Swift"
    ],
    "exp": "Notlarda hibrit örnekleri: **Apache Cordova** ve **Ionic**.",
    "why": {
     "0": "Flutter çapraz platformdur; WebView kullanmaz.",
     "1": "React Native çapraz platformdur; native UI üretir.",
     "3": "Swift native iOS dilidir."
    },
    "a": 2
   },
   {
    "type": "mc",
    "topic": "ekosistem",
    "q": "JavaScript / TypeScript dillerinin mobil geliştirmede yaygınlaşmasını sağlayan framework hangisidir?",
    "opts": [
     "Solar2D",
     ".NET MAUI",
     "Flutter",
     "React Native"
    ],
    "exp": "Notlara göre JS/TS, **React Native** gibi framework’ler sayesinde mobilde yaygınlaştı.",
    "why": {
     "0": "Solar2D Lua kullanır.",
     "1": ".NET MAUI C# kullanır.",
     "2": "Flutter Dart kullanır."
    },
    "a": 3
   },
   {
    "type": "mc",
    "topic": "rn-mimari",
    "q": "Aşağıdakilerden hangisi React Native’in **yeni** mimarisinin bir parçası **değildir**?",
    "opts": [
     "Asenkron JSON Bridge",
     "TurboModules",
     "JSI",
     "Fabric"
    ],
    "exp": "Yeni mimaride köprü **tamamen kaldırıldı**. JSI, Fabric ve TurboModules yeni mimarinin parçalarıdır.",
    "a": 0
   },
   {
    "type": "mc",
    "topic": "expo",
    "q": "Ders notlarına göre Expo’yu bugün React Native geliştirmenin endüstri standardı yapan gelişme hangisidir?",
    "opts": [
     "Sadece iOS için derleme yapması",
     "Apache Cordova eklentilerini kullanması",
     "Uygulamaları WebView içinde çalıştırması",
     "Expo Prebuild ve Custom Native Code desteği"
    ],
    "exp": "**Expo Prebuild** ve **Custom Native Code** desteği sayesinde Expo kısıtlı bir araç olmaktan çıktı.",
    "a": 3
   },
   {
    "type": "mc",
    "topic": "bilesen",
    "q": "`<Image>` bileşeninin Android’deki native karşılığı hangisidir?",
    "opts": [
     "android.view.ViewGroup",
     "UIImageView",
     "TextView",
     "ImageView"
    ],
    "exp": "`<Image>` → iOS **UIImageView**, Android **ImageView**.",
    "why": {
     "0": "ViewGroup, `<View>`un karşılığıdır.",
     "1": "UIImageView iOS karşılığıdır.",
     "2": "TextView, `<Text>`in karşılığıdır."
    },
    "a": 3
   },
   {
    "type": "mc",
    "topic": "stil",
    "q": "Aşağıdaki stile sahip kapsayıcı ekranda nasıl davranır?",
    "code": "container: {\n  flex: 1,\n  backgroundColor: '#fff',\n}",
    "opts": [
     "Ekranın tam yarısını kaplar",
     "Sadece içeriği kadar yer kaplar",
     "Kaplayabileceği tüm esnek alanı kaplar",
     "Ekranda görünmez"
    ],
    "exp": "`flex: 1`, bileşenin kaplayabileceği **tüm esnek alanı** kaplamasını sağlar.",
    "a": 2
   },
   {
    "type": "mc",
    "topic": "liste",
    "q": "ScrollView ile ilgili hangisi **doğrudur**?",
    "opts": [
     "Sadece ekranda görünen öğeleri çizer",
     "Ekran dışına çıkan öğeleri bellekten boşaltır",
     "Tüm alt bileşenlerini yüklendiğinde belleğe alır ve çizer",
     "Büyük listeler için önerilen bileşendir"
    ],
    "exp": "ScrollView tüm çocukları **baştan** belleğe alır. Diğer üç özellik **FlatList**’e aittir.",
    "a": 2
   },
   {
    "type": "mc",
    "topic": "navigasyon",
    "q": "Mobil uygulamalarda sayfalar arası geçiş hangi yapı üzerinde gerçekleşir?",
    "opts": [
     "HTML bağlantıları (link)",
     "URL adresleri",
     "Kuyruk (queue)",
     "Stack (yığın)"
    ],
    "exp": "Mobilde geçiş URL tabanlı değil, **Stack (yığın)** yapısı üzerindedir.",
    "why": {
     "1": "URL tabanlı geçiş **web**’e aittir."
    },
    "a": 3
   },
   {
    "type": "mc",
    "topic": "ux",
    "q": "Mobil UX’te “Başparmak Bölgesi (Thumb Zone)” kavramı neyi ifade eder?",
    "opts": [
     "Ekranın en üst köşelerini",
     "Butonların minimum boyutunu",
     "Tek elle kullanımda başparmağın rahat ulaştığı alt ve orta bölgeyi",
     "Ekranın yatay tutuşunu"
    ],
    "exp": "Telefonlar çoğunlukla tek elle kullanılır; kritik butonlar başparmağın rahat ulaştığı **alt ve orta** bölgeye konur.",
    "why": {
     "1": "Minimum boyut (44×44 pt / 48×48 dp) dokunma hedefi kuralıdır."
    },
    "a": 2
   }
  ]
 },
 {
  "id": "deneme-2",
  "title": "Deneme vizesi 2",
  "desc": "20 soru test, gerçek vize formatında.",
  "questions": [
   {
    "type": "mc",
    "topic": "pazar",
    "q": "Ders notlarına göre uygulama mağazası gelirlerinin en büyük kısmını hangi kategori oluşturur?",
    "opts": [
     "Finans (FinTech)",
     "Oyun uygulamaları",
     "Üretkenlik ve iş",
     "Eğitim (EdTech)"
    ],
    "exp": "Notlarda oyunlar, mağaza gelirlerinin **en büyük kısmını** oluşturan, yüksek performanslı ve grafik odaklı yazılımlar olarak geçer.",
    "a": 1
   },
   {
    "type": "mc",
    "topic": "mimari",
    "q": "Apache Cordova ve Ionic hangi mimari türüne örnektir?",
    "opts": [
     "Native uygulama",
     "Çapraz platform (native UI)",
     "PWA",
     "Hibrit uygulama"
    ],
    "exp": "Cordova ve Ionic, web kodunu **WebView** kılıfında çalıştıran **hibrit** yapılardır.",
    "why": {
     "1": "Çapraz platform örnekleri React Native ve Flutter’dır; WebView kullanmazlar.",
     "2": "PWA tarayıcı üzerinden çalışır, yerel kılıf kullanmaz."
    },
    "a": 3
   },
   {
    "type": "mc",
    "topic": "mimari",
    "q": "Aşağıdakilerden hangisi **web tabanlı** mobil uygulamaların bir avantajıdır?",
    "opts": [
     "Çevrimdışı çalışabilmesi",
     "GPS ve Bluetooth’a tam erişim",
     "Kurulum ve mağaza onayı gerektirmemesi",
     "Maksimum GPU performansı"
    ],
    "exp": "Web tabanlı uygulama: kurulum yok, mağaza onay süreci yok, tek kod tabanı.",
    "why": {
     "0": "Web tabanlı uygulama çevrimdışı **çalışamaz**; çevrimdışı çalışan PWA’dır.",
     "1": "Web tabanlıda donanım erişimi **yok denecek kadar azdır**.",
     "3": "Maksimum GPU performansı **native**’in avantajıdır."
    },
    "a": 2
   },
   {
    "type": "mc",
    "topic": "ekosistem",
    "q": "Flutter’ın arayüzü çizmek için kullandığı yaklaşım hangisidir?",
    "opts": [
     "Özel grafik motoru (Impeller / Skia)",
     "Asenkron JSON köprüsü",
     "WebView kılıfı",
     "Native UI bağlayıcıları"
    ],
    "exp": "Flutter kendi **özel grafik motoruyla** (Impeller / Skia) çizer.",
    "why": {
     "1": "JSON köprüsü eski React Native mimarisine aittir.",
     "2": "WebView kılıfı Apache Cordova’nın yaklaşımıdır.",
     "3": "Native UI bağlayıcıları .NET MAUI’nin yaklaşımıdır."
    },
    "a": 0
   },
   {
    "type": "mc",
    "topic": "rn-mimari",
    "q": "Meta tarafından mobil için geliştirilen, düşük bellek kullanımı ve küçük APK/IPA boyutu sağlayan varsayılan JavaScript motoru hangisidir?",
    "opts": [
     "Hermes",
     "Impeller",
     "Fabric",
     "JSI"
    ],
    "exp": "**Hermes**: React Native’in varsayılan JS motoru; hızlı bayt kod derleme, düşük bellek, küçük paket.",
    "why": {
     "1": "Impeller Flutter’ın grafik motorudur.",
     "2": "Fabric render motorudur, JS motoru değil.",
     "3": "JSI, JS ile C++ arasındaki arayüzdür."
    },
    "a": 0
   },
   {
    "type": "mc",
    "topic": "rn-mimari",
    "q": "React Native’in temel felsefesini ifade eden ifade hangisidir?",
    "opts": [
     "Learn once, write anywhere",
     "One platform, one codebase",
     "Mobile first, web later",
     "Write once, run anywhere"
    ],
    "exp": "React Native felsefesi: **“Learn once, write anywhere”** (bir kez öğren, her yerde yaz).",
    "a": 0
   },
   {
    "type": "mc",
    "topic": "bilesen",
    "q": "HTML’deki `<div>` elemanının React Native’deki karşılığı hangisidir?",
    "opts": [
     "`<Text>`",
     "`<ScrollView>`",
     "`<View>`",
     "`<TouchableOpacity>`"
    ],
    "exp": "`<div>` → `<View>` (iOS: UIView, Android: ViewGroup).",
    "why": {
     "0": "`<Text>`, `<p>` ve `<span>` karşılığıdır.",
     "1": "`<ScrollView>` kaydırılabilir div’dir; düz div değil.",
     "3": "`<TouchableOpacity>`, `<button>` karşılığıdır."
    },
    "a": 2
   },
   {
    "type": "mc",
    "topic": "stil",
    "q": "React Native’de stil tanımlamak için kullanılan API hangisidir?",
    "opts": [
     "`StyleSheet.create()`",
     "`document.createStyle()`",
     "`View.style()`",
     "`CSS.define()`"
    ],
    "exp": "Stiller JavaScript nesneleri ve **`StyleSheet.create()`** ile tanımlanır.",
    "a": 0
   },
   {
    "type": "mc",
    "topic": "liste",
    "q": "FlatList’in, ekran dışına çıkan öğeleri bellekten boşaltarak performansı korumasına ne ad verilir?",
    "opts": [
     "Lazy loading",
     "Virtualization",
     "Serialization",
     "Hot reload"
    ],
    "exp": "Sadece görünen öğeleri çizip ekran dışındakileri bellekten boşaltmaya **virtualization** denir.",
    "why": {
     "0": "Lazy loading notlarda **TurboModules** için geçer.",
     "2": "Serialization veriyi (ör. JSON’a) dönüştürmektir; eski Bridge’in sorunuydu."
    },
    "a": 1
   },
   {
    "type": "mc",
    "topic": "tasarim",
    "q": "React Native’de bir butonun ekran okuyucu tarafından anlaşılır okunması için hangi tanım yapılmalıdır?",
    "opts": [
     "`flex: 1`",
     "`accessibilityLabel=\"Giriş Yap Butonu\"`",
     "`fontWeight: 'bold'`",
     "`keyExtractor={(item) => item.id}`"
    ],
    "exp": "Ekran okuyucu desteği için `accessible={true}` ve **`accessibilityLabel`** tanımlanır.",
    "a": 1
   },
   {
    "type": "mc",
    "topic": "pazar",
    "q": "Yüksek güvenlikli (Biometric Auth, SDK) ve hızlı işlem odaklı araçlar notlarda hangi kategoride geçer?",
    "opts": [
     "Finans ve Bankacılık (FinTech)",
     "Eğitim (EdTech)",
     "Yaşam Tarzı ve Sağlık (mHealth)",
     "Oyun"
    ],
    "exp": "Biometric Auth ve hızlı işlem → **FinTech**.",
    "why": {
     "2": "mHealth’te biyometrik **sensörlü takip** geçer, kimlik doğrulama değil."
    },
    "a": 0
   },
   {
    "type": "mc",
    "topic": "mimari",
    "q": "Native Android uygulamaları hangi dillerle geliştirilir?",
    "opts": [
     "Swift / Objective-C",
     "Kotlin / Java",
     "Dart",
     "HTML / CSS / JS"
    ],
    "exp": "Native Android: **Kotlin/Java**. Native iOS: Swift/Objective-C.",
    "why": {
     "0": "Swift/Objective-C **iOS** içindir.",
     "2": "Dart Flutter’ın dilidir.",
     "3": "Web teknolojileri web tabanlı / hibrit uygulamalarda kullanılır."
    },
    "a": 1
   },
   {
    "type": "mc",
    "topic": "ekosistem",
    "q": "Apple App Store’un geliştiricilerden ücret alma modeli nasıldır?",
    "opts": [
     "Tamamen ücretsiz",
     "Yıllık üyelik",
     "Her indirme başına ücret",
     "Tek seferlik ücret"
    ],
    "exp": "App Store **yıllık üyelik** modeliyle çalışır.",
    "why": {
     "3": "Tek seferlik ücret **Google Play**’in modelidir."
    },
    "a": 1
   },
   {
    "type": "mc",
    "topic": "rn-mimari",
    "q": "React Native’in yeni mimarisindeki “JSI” kısaltmasının açılımı nedir?",
    "opts": [
     "Java Standard Interface",
     "JavaScript Syntax Index",
     "JSON Serial Interface",
     "JavaScript Interface"
    ],
    "exp": "**JSI = JavaScript Interface.** JS kodunun C++ nesnelerine doğrudan referans vermesini sağlar.",
    "a": 3
   },
   {
    "type": "mc",
    "topic": "expo",
    "q": "Hangi durumda React Native CLI, Expo’ya tercih edilir?",
    "opts": [
     "Xcode kurmadan hızlı başlamak istendiğinde",
     "Expo Go ile cihazda anında test yapılmak istendiğinde",
     "Çok özel native SDK entegrasyonu gerektiğinde",
     "Uygulama bulutta derlenmek istendiğinde"
    ],
    "exp": "CLI; çok özel native SDK entegrasyonlarında ve mevcut native projeye React Native eklerken tercih edilir.",
    "why": {
     "0": "Hızlı kurulum **Expo**’nun avantajıdır.",
     "1": "Expo Go Expo’nun aracıdır.",
     "3": "Bulutta derleme Expo’nun **EAS** hizmetidir."
    },
    "a": 2
   },
   {
    "type": "mc",
    "topic": "bilesen",
    "q": "iOS’taki UILabel hangi React Native bileşeninin native karşılığıdır?",
    "opts": [
     "`<TextInput>`",
     "`<Image>`",
     "`<View>`",
     "`<Text>`"
    ],
    "exp": "`<Text>` → iOS **UILabel**, Android TextView.",
    "why": {
     "0": "`<TextInput>`in iOS karşılığı UITextField’dir.",
     "1": "`<Image>`in iOS karşılığı UIImageView’dir.",
     "2": "`<View>`un iOS karşılığı UIView’dir."
    },
    "a": 3
   },
   {
    "type": "mc",
    "topic": "stil",
    "q": "Aşağıdaki kapsayıcının içindeki öğeler nasıl dizilir?",
    "code": "<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>",
    "opts": [
     "Alt alta, iki uca yayılarak",
     "Yan yana, iki uca yayılarak",
     "Alt alta, ortalanarak",
     "Yan yana, ortalanarak"
    ],
    "exp": "`row` öğeleri **yan yana** dizer; `justifyContent` ana eksende (yatay) çalıştığı için `space-between` onları **iki uca yayar**.",
    "why": {
     "0": "Alt alta dizilim `column` ile olur; burada yön `row`."
    },
    "a": 1
   },
   {
    "type": "mc",
    "topic": "liste",
    "q": "FlatList’teki `keyExtractor={(item) => item.id}` satırının görevi nedir?",
    "opts": [
     "Listeyi id’ye göre sıralamak",
     "Listelenecek diziyi vermek",
     "Her öğenin nasıl çizileceğini belirlemek",
     "Her öğeye benzersiz bir anahtar vermek"
    ],
    "exp": "`keyExtractor` her öğe için **benzersiz anahtar** belirler.",
    "why": {
     "1": "Bu `data` prop’unun görevidir.",
     "2": "Bu `renderItem`’ın görevidir."
    },
    "a": 3
   },
   {
    "type": "mc",
    "topic": "ux",
    "q": "Nielsen’in “Estetik ve Sade Tasarım” sezgisi neyi önerir?",
    "opts": [
     "Yanlış işlemleri geri alabilmeyi",
     "Kısayollar ve mimikler sunmayı",
     "Anlaşılır hata mesajları göstermeyi",
     "Ekranı gereksiz bilgi gürültüsünden arındırmayı"
    ],
    "exp": "Estetik ve sade tasarım = ekranı **gereksiz bilgi gürültüsünden** arındırmak.",
    "why": {
     "0": "Bu, kullanıcı kontrolü ve özgürlüktür.",
     "1": "Bu, esneklik ve kullanım verimliliğidir.",
     "2": "Bu, hataları teşhis etme ve çözmedir."
    },
    "a": 3
   },
   {
    "type": "mc",
    "topic": "tasarim",
    "q": "Ders notlarında erişilebilirlik başlığı altında hangi iki konu ele alınır?",
    "opts": [
     "Ekran okuyucu desteği ile kontrast ve metin boyutu",
     "Push bildirimler ve AR",
     "Lazy loading ve Hermes",
     "Service Worker ve Web App Manifest"
    ],
    "exp": "Erişilebilirlik: **ekran okuyucu desteği** (`accessible`, `accessibilityLabel`) ve **kontrast / metin boyutu** (Dynamic Type).",
    "a": 0
   }
  ]
 },
 {
  "id": "deneme-3",
  "title": "Deneme vizesi 3",
  "desc": "20 soru test, gerçek vize formatında.",
  "questions": [
   {
    "type": "mc",
    "topic": "pazar",
    "q": "Kullanıcıların mobil cihazlarda geçirdikleri vaktin ne kadarını mobil uygulamalar içinde harcadığı belirtilmiştir?",
    "opts": [
     "%38’ini",
     "%10–%15’ini",
     "%85–%90’ından fazlasını",
     "Yaklaşık yarısını"
    ],
    "exp": "Mobil sürenin **%85–90’ından fazlası** uygulamalarda, kalanı mobil web tarayıcılarında geçer.",
    "why": {
     "0": "%38 küresel masaüstü trafik payıdır.",
     "1": "%10–15 kabaca mobil **web**’de geçen kalan kısımdır."
    },
    "a": 2
   },
   {
    "type": "mc",
    "topic": "pazar",
    "q": "Ürünü sanal olarak deneme imkânı sunan AR (Artırılmış Gerçeklik) özelliği, notlarda hangi kategorinin özelliği olarak geçer?",
    "opts": [
     "Sosyal Ağlar ve İletişim",
     "Mobil Ticaret (M-Commerce)",
     "Finans ve Bankacılık (FinTech)",
     "Eğitim (EdTech)"
    ],
    "exp": "M-Commerce: hızlı ödeme (Apple Pay, Google Pay), kişisel öneriler ve **AR ile ürün deneme**.",
    "a": 1
   },
   {
    "type": "mc",
    "topic": "mimari",
    "q": "Tek bir kod tabanıyla hem iOS hem Android’e çıktı üreten ve kodu doğrudan native UI bileşenlerine dönüştüren yapı hangisidir?",
    "opts": [
     "Native",
     "Çapraz platform (Cross-Platform)",
     "Web tabanlı",
     "Hibrit"
    ],
    "exp": "**Çapraz platform** (React Native, Flutter): tek kod tabanı, native UI.",
    "why": {
     "0": "Native’de her platform için **ayrı** kod tabanı vardır.",
     "3": "Hibrit de tek kod tabanıdır ama **WebView**’de çizer, native UI’a dönüştürmez."
    },
    "a": 1
   },
   {
    "type": "mc",
    "topic": "ekosistem",
    "q": "Google Play Store’a uygulama yüklerken zorunlu olan paket formatı hangisidir?",
    "opts": [
     ".apk zorunlu, başka format kabul edilmez",
     ".exe",
     ".ipa",
     "Android App Bundle (.aab)"
    ],
    "exp": "Google Play’de **Android App Bundle (.aab)** formatı zorunludur.",
    "why": {
     "2": ".ipa iOS paketidir."
    },
    "a": 3
   },
   {
    "type": "mc",
    "topic": "ekosistem",
    "q": "Eski adı Xamarin olan, C# ile mobil uygulama geliştirmeyi sağlayan Microsoft platformu hangisidir?",
    "opts": [
     ".NET MAUI",
     "Flutter",
     "Solar2D",
     "Apache Cordova"
    ],
    "exp": "**.NET MAUI** (eski adıyla Xamarin), C# ve native UI bağlayıcıları kullanır.",
    "why": {
     "1": "Flutter Google’ındır ve Dart kullanır.",
     "2": "Solar2D (eski Corona), Lua kullanan 2D oyun motorudur."
    },
    "a": 0
   },
   {
    "type": "mc",
    "topic": "rn-mimari",
    "q": "Eski React Native mimarisinde hızlı kaydırma ve karmaşık animasyonlarda performans darboğazı oluşmasının nedeni neydi?",
    "opts": [
     "Native modüllerin lazy yüklenmesi",
     "Uygulamanın WebView içinde çalışması",
     "Hermes motorunun fazla bellek kullanması",
     "Verilerin köprüde JSON’a dönüştürülüp asenkron taşınması"
    ],
    "exp": "Bridge üzerinden veriler **JSON’a dönüştürülüp asenkron** taşındığı için darboğaz oluşuyordu.",
    "why": {
     "0": "Lazy yükleme yeni mimarideki TurboModules’in **iyileştirmesidir**.",
     "1": "React Native hiçbir mimaride WebView kullanmaz.",
     "2": "Hermes tersine **düşük bellek** kullanır."
    },
    "a": 3
   },
   {
    "type": "mc",
    "topic": "expo",
    "q": "Expo’da uygulamayı fiziksel bir cihazda anında canlı test etmek için ne kullanılır?",
    "opts": [
     "Expo Go uygulaması",
     "Android App Bundle",
     "EAS",
     "React Native CLI"
    ],
    "exp": "**Expo Go** ile fiziksel cihazda anında canlı test yapılır.",
    "why": {
     "2": "EAS bulutta derleme ve mağazaya gönderme hizmetidir."
    },
    "a": 0
   },
   {
    "type": "mc",
    "topic": "bilesen",
    "q": "React Native’deki `<FlatList>` bileşeninin iOS ve Android’deki native karşılıkları hangileridir?",
    "opts": [
     "UIScrollView / ScrollView",
     "UIView / ViewGroup",
     "UILabel / TextView",
     "UITableView / RecyclerView"
    ],
    "exp": "`<FlatList>` → iOS: **UITableView**, Android: **RecyclerView**.",
    "why": {
     "0": "Bunlar `<ScrollView>` karşılıklarıdır.",
     "1": "Bunlar `<View>` karşılıklarıdır.",
     "2": "Bunlar `<Text>` karşılıklarıdır."
    },
    "a": 3
   },
   {
    "type": "mc",
    "topic": "stil",
    "q": "Aşağıdaki stil tanımlarından hangisi React Native’de **geçerlidir**?",
    "opts": [
     "`{ backgroundColor: '#fff', fontSize: 20 }`",
     "`{ 'background-color': '#fff' }`",
     "`{ fontSize: '20px;' }`",
     "`\"background-color: #fff; font-size: 20px\"`"
    ],
    "exp": "Stil bir JS nesnesidir; özellik adları **camelCase**, sayılar birimsiz.",
    "why": {
     "1": "Kebab-case (`background-color`) değil camelCase kullanılır.",
     "2": "Sayılar birimsiz yazılır: `fontSize: 20`.",
     "3": "HTML’deki gibi string stil yazılmaz."
    },
    "a": 0
   },
   {
    "type": "mc",
    "topic": "ux",
    "q": "Nielsen’in sezgilerinden “Sistem Durumunun Görünürlüğü” ilkesine uygun React Native bileşeni hangisidir?",
    "opts": [
     "`FlatList`",
     "`ActivityIndicator`",
     "`TextInput`",
     "`Image`"
    ],
    "exp": "Kullanıcıya ne olduğu hakkında anında dönüt: **yükleniyor ikonu / ActivityIndicator**.",
    "a": 1
   },
   {
    "type": "mc",
    "topic": "mimari",
    "q": "Aşağıdakilerden hangisi PWA’ların bir dezavantajıdır?",
    "opts": [
     "Çevrimdışı çalışamaması",
     "Kurulum ve mağaza onayı gerektirmesi",
     "İki ayrı kod tabanı gerektirmesi",
     "iOS/Safari tarafındaki API kısıtlamaları"
    ],
    "exp": "PWA dezavantajları: iOS/Safari **API kısıtlamaları** (Bluetooth, arka plan konum) ve App Store dağıtım zorlukları.",
    "why": {
     "0": "PWA tersine çevrimdışı **çalışabilir**.",
     "2": "İki kod tabanı native’in dezavantajıdır."
    },
    "a": 3
   },
   {
    "type": "mc",
    "topic": "ekosistem",
    "q": "Kotlin dilinin notlarda öne çıkarılan özelliği hangisidir?",
    "opts": [
     "AOT ve JIT derleme",
     "Lua tabanlı olması",
     "Yüksek null-safety özelliği",
     "WebView içinde çalışması"
    ],
    "exp": "Kotlin: Google’ın birincil Android dili, **null-safety** özelliği yüksek modern statik dil.",
    "why": {
     "0": "AOT ve JIT derleme **Dart**’ın özelliğidir."
    },
    "a": 2
   },
   {
    "type": "mc",
    "topic": "ekosistem",
    "q": "Unity oyun motoruyla mobil oyun geliştirmede kullanılan dil hangisidir?",
    "opts": [
     "Dart",
     "Lua",
     "C#",
     "Swift"
    ],
    "exp": "Notlarda C#, **.NET MAUI** ve **Unity** ile birlikte anılır.",
    "why": {
     "1": "Lua, Solar2D’nin dilidir."
    },
    "a": 2
   },
   {
    "type": "mc",
    "topic": "rn-mimari",
    "q": "React Native, JavaScript/TypeScript ile hangi platformlara native arayüz sunar?",
    "opts": [
     "iOS ve Android",
     "Yalnızca Android",
     "Yalnızca Windows ve macOS",
     "Yalnızca web tarayıcıları"
    ],
    "exp": "React Native, JS/TS ile **iOS ve Android**’e native arayüz sunan açık kaynak framework’tür.",
    "a": 0
   },
   {
    "type": "mc",
    "topic": "rn-mimari",
    "q": "Aşağıdakilerden hangisi Hermes JS motorunun sağladığı avantajlardan **değildir**?",
    "opts": [
     "Hızlı bayt kod derlemesi",
     "Arayüzü WebView üzerinde çizmesi",
     "Küçük APK/IPA boyutları",
     "Düşük bellek kullanımı"
    ],
    "exp": "Hermes: düşük bellek, hızlı bayt kod derleme, küçük APK/IPA. WebView ile ilgisi yoktur.",
    "a": 1
   },
   {
    "type": "mc",
    "topic": "expo",
    "q": "Expo ile ilgili aşağıdakilerden hangisi **yanlıştır**?",
    "opts": [
     "EAS ile uygulama bulutta derlenebilir",
     "Expo Go ile fiziksel cihazda anında test yapılabilir",
     "Expo Prebuild ile özel native kod eklenebilir",
     "Fiziksel cihazda test için mutlaka Android Studio kurulmalıdır"
    ],
    "exp": "Expo’nun avantajı Xcode / Android Studio karmaşası olmadan kurulum ve **Expo Go** ile cihazda test etmektir.",
    "a": 3
   },
   {
    "type": "mc",
    "topic": "bilesen",
    "q": "`<TouchableOpacity>` bileşeninin iOS’taki native karşılığı hangisidir?",
    "opts": [
     "UIImageView",
     "UITextField",
     "UIButton (Custom)",
     "UILabel"
    ],
    "exp": "`<TouchableOpacity>` → iOS **UIButton (Custom)**, Android Button (Custom).",
    "why": {
     "0": "UIImageView, `<Image>`in karşılığıdır.",
     "1": "UITextField, `<TextInput>`in karşılığıdır.",
     "3": "UILabel, `<Text>`in karşılığıdır."
    },
    "a": 2
   },
   {
    "type": "mc",
    "topic": "stil",
    "q": "Aşağıdaki kapsayıcıda `alignItems: 'center'` içeriği hangi yönde ortalar?",
    "code": "container: {\n  flex: 1,\n  alignItems: 'center',\n}",
    "opts": [
     "Dikeyde",
     "Yatayda",
     "Hem yatayda hem dikeyde",
     "Hiçbir yönde ortalamaz"
    ],
    "exp": "`flexDirection` verilmemiş, yani varsayılan **column**: ana eksen dikey, çapraz eksen **yatay**. `alignItems` çapraz eksende çalışır.",
    "why": {
     "0": "Dikeyde ortalamak için ana eksendeki `justifyContent: 'center'` gerekir.",
     "2": "İkisi için hem `alignItems` hem `justifyContent` gerekir."
    },
    "a": 1
   },
   {
    "type": "mc",
    "topic": "liste",
    "q": "FlatList’in `renderItem` prop’u ne işe yarar?",
    "opts": [
     "Listelenecek diziyi tutar",
     "Her öğenin ekranda nasıl çizileceğini belirler",
     "Her öğeye benzersiz anahtar verir",
     "Listeyi ScrollView’e dönüştürür"
    ],
    "exp": "`renderItem={({ item }) => ...}` her öğenin **nasıl çizileceğini** tanımlar.",
    "why": {
     "0": "Bu `data`’nın görevidir.",
     "2": "Bu `keyExtractor`’ın görevidir."
    },
    "a": 1
   },
   {
    "type": "mc",
    "topic": "navigasyon",
    "q": "Ana sayfadan ürün detayına gidip geri tuşuyla ana sayfaya dönülen bir akış için en uygun navigator hangisidir?",
    "opts": [
     "Drawer Navigator",
     "Stack Navigator",
     "Bottom Tabs Navigator",
     "FlatList"
    ],
    "exp": "**Stack Navigator** sayfaları üst üste ekler; ileri / geri geçiş sağlar.",
    "why": {
     "0": "Drawer yandan açılan menüdür.",
     "2": "Bottom Tabs alt sekme menüsüdür.",
     "3": "FlatList bir liste bileşenidir, navigator değil."
    },
    "a": 1
   }
  ]
 }
];
window.TOPIC_QUESTIONS = {
 "pazar": [
  {
   "type": "mc",
   "q": "Ders notlarına göre mobil cihazların küresel internet trafiğindeki payı hangi aralıktadır?",
   "opts": [
    "%85–%90",
    "%70–%75",
    "%38–%42",
    "%58–%62"
   ],
   "exp": "Küresel mobil payı **%58–62**, masaüstü %38 civarı.",
   "why": {
    "0": "%85–90 mobil sürenin **uygulamalardaki** payıdır.",
    "1": "%70 üzeri **Türkiye** verisidir."
   },
   "topic": "pazar",
   "a": 3
  },
  {
   "type": "mc",
   "q": "Mobil uygulamaların yaygınlaşmasında notlarda adı geçen kablosuz erişim teknolojileri hangileridir?",
   "opts": [
    "Ethernet / Fiber",
    "5G / WiFi 6",
    "3G / Bluetooth 2.0",
    "NFC / RFID"
   ],
   "exp": "Notlarda **5G / WiFi 6** yaygınlaşması geçer.",
   "topic": "pazar",
   "a": 1
  },
  {
   "type": "mc",
   "q": "İşletmeler için mobil uygulamaların doğrudan pazarlama kanalı olarak öne çıkan özelliği hangisidir?",
   "opts": [
    "Service Worker",
    "WebView",
    "Android App Bundle",
    "Anlık bildirimler (push notifications)"
   ],
   "exp": "Doğrudan pazarlama kanalı = **anlık bildirimler (push notifications)**.",
   "topic": "pazar",
   "a": 3
  },
  {
   "type": "mc",
   "q": "“İsteğe bağlı video/müzik (VOD) ve canlı yayın altyapıları” hangi kategoriye aittir?",
   "opts": [
    "Eğitim (EdTech)",
    "Yaşam Tarzı ve Sağlık (mHealth)",
    "Üretkenlik ve İş",
    "Eğlence ve Medya Akışı (Streaming)"
   ],
   "exp": "VOD ve canlı yayın → **Streaming**.",
   "topic": "pazar",
   "a": 3
  },
  {
   "type": "mc",
   "q": "Giyilebilir cihazlar (Apple Watch, Wear OS) ve biyometrik sensör entegrasyonlu takip sistemleri hangi kategoridedir?",
   "opts": [
    "Yaşam Tarzı ve Sağlık (mHealth)",
    "Finans ve Bankacılık (FinTech)",
    "Mobil Ticaret",
    "Oyun"
   ],
   "exp": "Giyilebilir + biyometrik sensör → **mHealth**.",
   "why": {
    "1": "FinTech’te biyometrik **kimlik doğrulama** (Biometric Auth) geçer; sensörlü takip sistemi değil."
   },
   "topic": "pazar",
   "a": 0
  },
  {
   "type": "tf",
   "q": "Eğitim (EdTech) uygulamaları mikro öğrenme ve oyunlaştırma (gamification) odaklıdır.",
   "a": 0,
   "exp": "**Doğru.** EdTech: mikro öğrenme, esnek erişim, oyunlaştırma.",
   "topic": "pazar",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "q": "Ders notlarına göre mobil uygulama kullanımı hâlâ masaüstü ve mobil web ortamlarının gerisindedir.",
   "a": 1,
   "exp": "**Yanlış.** Mobil uygulama kullanımı masaüstü ve mobil web’in **önüne geçmiştir**.",
   "topic": "pazar",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "q": "Belge yönetimi, proje takibi ve ekip içi iş birliği sistemleri Üretkenlik ve İş kategorisindedir.",
   "a": 0,
   "exp": "**Doğru.**",
   "topic": "pazar",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "topic": "pazar",
   "q": "Uçtan uca şifreli mesajlaşma altyapısı, notlarda Sosyal Ağlar ve İletişim kategorisinin özelliği olarak geçer.",
   "a": 0,
   "exp": "**Doğru.** Sosyal ağlar: gerçek zamanlı veri akışı, medya paylaşımı, uçtan uca şifreli mesajlaşma.",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  }
 ],
 "mimari": [
  {
   "type": "mc",
   "q": "iOS için Swift/Objective-C, Android için Kotlin/Java ve platform SDK’ları kullanılarak geliştirilen uygulama türü hangisidir?",
   "opts": [
    "Hibrit",
    "Çapraz platform",
    "Native (yerel)",
    "PWA"
   ],
   "exp": "Hedef işletim sisteminin kendi dili ve SDK’sıyla geliştirilen uygulama **native**dir.",
   "topic": "mimari",
   "a": 2
  },
  {
   "type": "mc",
   "q": "Aşağıdakilerden hangisi **native** uygulamaların avantajlarından **değildir**?",
   "opts": [
    "Maksimum donanım ve GPU performansı",
    "Yüksek güvenlik",
    "Tek kod tabanıyla iki platforma çıkış",
    "Platform güncellemelerine anında erişim"
   ],
   "exp": "Native’de **iki ayrı kod tabanı** gerekir; tek kod tabanı çapraz platform/hibrit/web özelliğidir.",
   "topic": "mimari",
   "a": 2
  },
  {
   "type": "mc",
   "q": "Web tabanlı mobil uygulamalar hangi teknolojilerle geliştirilir?",
   "opts": [
    "Kotlin ve Java",
    "Dart ve C++",
    "HTML5, CSS3 ve JavaScript",
    "Swift ve Objective-C"
   ],
   "exp": "Web tabanlı uygulamalar tarayıcıda çalışan, **HTML5 / CSS3 / JS** ile yazılmış responsive sitelerdir.",
   "topic": "mimari",
   "a": 2
  },
  {
   "type": "mc",
   "q": "PWA’yı native benzeri yapan iki temel altyapı hangileridir?",
   "opts": [
    "JSI ve Fabric",
    "Expo Go ve EAS",
    "WebView ve Cordova",
    "Service Worker ve Web App Manifest"
   ],
   "exp": "PWA = web + **Service Worker** + **Web App Manifest**.",
   "why": {
    "0": "JSI ve Fabric React Native’in yeni mimarisine aittir.",
    "2": "WebView ve Cordova hibrit uygulamalara aittir."
   },
   "topic": "mimari",
   "a": 3
  },
  {
   "type": "mc",
   "q": "Hibrit uygulamalarda web kodunu çalıştıran yerel kılıfın adı nedir?",
   "opts": [
    "Hermes",
    "Service Worker",
    "WebView",
    "Bridge"
   ],
   "exp": "Hibrit uygulamalar HTML/CSS/JS kodunu **WebView** adlı yerel kılıf içinde çalıştırır.",
   "topic": "mimari",
   "a": 2
  },
  {
   "type": "tf",
   "q": "PWA’lar çevrimdışı çalışma desteği sunar ve ana ekrana eklenebilir.",
   "a": 0,
   "exp": "**Doğru.**",
   "topic": "mimari",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "q": "Web tabanlı mobil uygulamalar mağaza onay sürecinden geçmek zorundadır.",
   "a": 1,
   "exp": "**Yanlış.** Web tabanlı uygulamalarda kurulum ve **mağaza onay süreci yoktur**.",
   "topic": "mimari",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "q": "Native uygulamalarda pazara sunma süresi (Time-to-Market) genellikle uzundur.",
   "a": 0,
   "exp": "**Doğru.** İki ayrı kod tabanı yüzünden geliştirme süresi ve maliyeti yüksektir.",
   "topic": "mimari",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "topic": "mimari",
   "q": "Hibrit uygulamalarda arayüz WebView üzerinde çizildiği için performans yerel uygulamaların oldukça gerisindedir.",
   "a": 0,
   "exp": "**Doğru.** Hibritin temel dezavantajı budur (Cordova, Ionic).",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "topic": "mimari",
   "q": "Çapraz platform framework’leri (React Native, Flutter) arayüzü WebView içinde çizer.",
   "a": 1,
   "exp": "**Yanlış.** Çapraz platform framework’leri WebView yerine native derleme veya hızlı yerel köprü/motorlarla **native UI bileşenleri** üretir.",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "topic": "mimari",
   "q": "PWA’ların iOS/Safari tarafında Bluetooth ve arka plan konum takibi gibi API kısıtlamaları vardır.",
   "a": 0,
   "exp": "**Doğru.** Bu, PWA’nın dezavantajlarından biridir (diğeri App Store dağıtım zorluğu).",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  }
 ],
 "ekosistem": [
  {
   "type": "mc",
   "q": "Apple ekosistemi (iOS, macOS, watchOS) için geliştirilmiş, hızlı ve güvenli nesne yönelimli dil hangisidir?",
   "opts": [
    "C#",
    "Swift",
    "Kotlin",
    "Dart"
   ],
   "exp": "**Swift**: Apple ekosisteminin dili.",
   "topic": "ekosistem",
   "a": 1
  },
  {
   "type": "mc",
   "q": "React Native’i geliştiren şirket ve kullandığı dil hangisidir?",
   "opts": [
    "Google – Dart",
    "Apache – HTML/CSS/JS",
    "Meta – JavaScript / TypeScript",
    "Microsoft – C#"
   ],
   "exp": "React Native: **Meta**, **JS / TypeScript**.",
   "why": {
    "0": "Google – Dart, Flutter’dır.",
    "1": "Apache – HTML/CSS/JS, Cordova’dır.",
    "3": "Microsoft – C#, .NET MAUI’dir."
   },
   "topic": "ekosistem",
   "a": 2
  },
  {
   "type": "mc",
   "q": "Lua dilini kullanan ve 2D oyun segmentinde yer alan açık kaynak motor hangisidir?",
   "opts": [
    "Flutter",
    ".NET MAUI",
    "Solar2D (Corona)",
    "Apache Cordova"
   ],
   "exp": "**Solar2D** (eski adı Corona), Lua ile 2D oyun motoru.",
   "topic": "ekosistem",
   "a": 2
  },
  {
   "type": "mc",
   "q": "C# dili, notlarda hangi iki platformla birlikte anılır?",
   "opts": [
    "Cordova ve Ionic",
    "Flutter ve Solar2D",
    "React Native ve Expo",
    ".NET MAUI ve Unity"
   ],
   "exp": "C#: **.NET MAUI** (eski Xamarin) ve **Unity** oyun motoru.",
   "topic": "ekosistem",
   "a": 3
  },
  {
   "type": "mc",
   "q": "Sıkı güvenlik ve tasarım inceleme süreçlerine (Review Guidelines) sahip, yıllık üyelik modeliyle çalışan mağaza hangisidir?",
   "opts": [
    "Huawei AppGallery",
    "Google Play Store",
    "Apple App Store",
    "Amazon Appstore"
   ],
   "exp": "**Apple App Store**: yıllık üyelik + Review Guidelines.",
   "why": {
    "1": "Google Play tek seferlik ücret alır."
   },
   "topic": "ekosistem",
   "a": 2
  },
  {
   "type": "tf",
   "q": "Apache Cordova, notlarda “eski / kullanım oranı düşük” olarak belirtilmiştir.",
   "a": 0,
   "exp": "**Doğru.** Cordova WebView kılıfı kullanır ve güncelliğini yitirmiştir.",
   "topic": "ekosistem",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "q": "Flutter, Meta tarafından geliştirilmiştir.",
   "a": 1,
   "exp": "**Yanlış.** Flutter **Google**’ındır. Meta’nın framework’ü React Native.",
   "topic": "ekosistem",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "q": "Huawei AppGallery ve Samsung Galaxy Store, notlarda “diğer mağazalar” arasında sayılır.",
   "a": 0,
   "exp": "**Doğru.** Amazon Appstore da bu listededir.",
   "topic": "ekosistem",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "topic": "ekosistem",
   "q": "Google Play Store geliştirici konsolu için yıllık üyelik ücreti alır.",
   "a": 1,
   "exp": "**Yanlış.** Google Play **tek seferlik** ücret alır. Yıllık üyelik **Apple App Store**’un modelidir.",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "topic": "ekosistem",
   "q": "Kotlin, Google tarafından Android geliştirme için birincil (first-class) dil kabul edilir.",
   "a": 0,
   "exp": "**Doğru.** Kotlin null-safety özelliği yüksek, modern ve statik bir dildir.",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  }
 ],
 "rn-mimari": [
  {
   "type": "mc",
   "q": "React Native’in yeni mimarisinde UI çizimlerini senkronize edebilen ve render performansını artıran yapı hangisidir?",
   "opts": [
    "TurboModules",
    "Fabric",
    "Hermes",
    "JSI"
   ],
   "exp": "**Fabric**: yeni render motoru; UI gecikmelerini sıfıra indirir.",
   "why": {
    "0": "TurboModules native modülleri lazy yükler.",
    "2": "Hermes JS motorudur.",
    "3": "JSI, JS ile C++ arasındaki doğrudan erişim katmanıdır."
   },
   "topic": "rn-mimari",
   "a": 1
  },
  {
   "type": "mc",
   "q": "React Native, Web React’ten farklı olarak HTML elemanları yerine ne kullanır?",
   "opts": [
    "Canvas üzerine çizim",
    "Native karşılığı olan bileşenler (`<View>`, `<Text>`, `<Image>`)",
    "WebView içinde HTML5",
    "Sadece CSS dosyaları"
   ],
   "exp": "React Native, `<div>`, `<span>`, `<p>` yerine **native karşılığı olan** `<View>`, `<Text>`, `<Image>` bileşenlerini kullanır.",
   "topic": "rn-mimari",
   "a": 1
  },
  {
   "type": "mc",
   "q": "TurboModules’ün lazy loading yaklaşımı en çok hangi performans ölçüsünü iyileştirir?",
   "opts": [
    "Mağaza onay süresi",
    "Pil şarj süresi",
    "Ağ indirme hızı",
    "Uygulama açılış süresi (App Startup Time)"
   ],
   "exp": "Modüller sadece gerektiğinde yüklendiği için **uygulama açılış süresi** ciddi oranda iyileşir.",
   "topic": "rn-mimari",
   "a": 3
  },
  {
   "type": "mc",
   "q": "React Native’in yeni mimarisi ile ilgili hangisi **doğrudur**?",
   "opts": [
    "Arayüz WebView’e taşınmıştır",
    "JSON köprüsü daha hızlı hale getirilmiştir",
    "Hermes yerine V8 zorunlu olmuştur",
    "Köprü (Bridge) yapısı tamamen kaldırılmıştır"
   ],
   "exp": "Performansı native seviyesine çıkarmak için **köprü yapısı tamamen kaldırıldı**; yerine JSI geldi.",
   "topic": "rn-mimari",
   "a": 3
  },
  {
   "type": "mc",
   "q": "JSI sayesinde native metotların anında çağrılabilmesinin nedeni nedir?",
   "opts": [
    "JSON serileştirmeye ve köprüye gerek kalmaması",
    "Kodun sunucuda çalıştırılması",
    "Kodun WebView’de çalışması",
    "Modüllerin hepsinin açılışta yüklenmesi"
   ],
   "exp": "JSI, JS’in C++ nesnelerine **doğrudan referans** vermesini sağlar; köprü ve JSON serileştirme gerekmez.",
   "topic": "rn-mimari",
   "a": 0
  },
  {
   "type": "tf",
   "q": "React Native, Meta (Facebook) tarafından geliştirilen açık kaynaklı bir framework’tür.",
   "a": 0,
   "exp": "**Doğru.**",
   "topic": "rn-mimari",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "q": "Hermes, React Native için varsayılan JavaScript motorudur ve APK/IPA boyutlarını küçültür.",
   "a": 0,
   "exp": "**Doğru.**",
   "topic": "rn-mimari",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "q": "JSI, React Native’in yeni render motorunun adıdır.",
   "a": 1,
   "exp": "**Yanlış.** Render motoru **Fabric**’tir. JSI, JS ile C++ arasındaki arayüzdür.",
   "topic": "rn-mimari",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "topic": "rn-mimari",
   "q": "Eski React Native mimarisinde JavaScript ile native taraf, asenkron bir JSON köprüsü (Bridge) üzerinden haberleşirdi.",
   "a": 0,
   "exp": "**Doğru.** Verilerin JSON’a çevrilip asenkron taşınması hızlı kaydırma ve animasyonlarda darboğaz yaratıyordu.",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "topic": "rn-mimari",
   "q": "Fabric, React Native’in yeni mimarisinde native modülleri lazy olarak yükleyen yapıdır.",
   "a": 1,
   "exp": "**Yanlış.** Fabric yeni **render motorudur**. Lazy yükleme **TurboModules**’in görevidir.",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  }
 ],
 "expo": [
  {
   "type": "mc",
   "q": "Ders notlarına göre günümüzde React Native geliştirmede tavsiye edilen yaklaşım hangisidir?",
   "opts": [
    "Expo",
    "Ionic",
    "Sadece React Native CLI",
    "Apache Cordova"
   ],
   "exp": "Expo, Prebuild ve Custom Native Code desteğiyle **endüstri standardı** ve tavsiye edilen yaklaşım.",
   "topic": "expo",
   "a": 0
  },
  {
   "type": "mc",
   "q": "Expo’da native modül yazabilme ve kütüphane desteği hangi yapı ile sağlanır?",
   "opts": [
    "EAS",
    "Expo Router",
    "Expo Config Plugins",
    "Expo Go"
   ],
   "exp": "Native modül ve kütüphane desteği: **Expo Config Plugins**.",
   "topic": "expo",
   "a": 2
  },
  {
   "type": "mc",
   "q": "`ios` ve `android` klasörleri üzerinde tam kontrol sağlayan geleneksel yöntem hangisidir?",
   "opts": [
    "Expo Go",
    "PWA",
    "React Native CLI",
    "EAS"
   ],
   "exp": "**React Native CLI**: native projeler üzerinde tam kontrol.",
   "topic": "expo",
   "a": 2
  },
  {
   "type": "mc",
   "q": "Aşağıdakilerden hangisi Expo’nun avantajlarından **değildir**?",
   "opts": [
    "Expo Go ile fiziksel cihazda canlı test",
    "Uygulamanın WebView içinde çalışması",
    "Xcode / Android Studio karmaşası olmadan hızlı kurulum",
    "EAS ile bulutta derleme"
   ],
   "exp": "Expo bir React Native aracıdır; uygulama **WebView’de çalışmaz**. Diğer üçü notlardaki avantajlardır.",
   "topic": "expo",
   "a": 1
  },
  {
   "type": "tf",
   "q": "Expo, günümüzde hâlâ native kod eklenemeyen kısıtlı bir araç setidir.",
   "a": 1,
   "exp": "**Yanlış.** Eskiden öyle görülürdü; artık Expo Prebuild ve Custom Native Code desteği var.",
   "topic": "expo",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "q": "EAS (Expo Application Services) ile uygulamalar mağazalara otomatik gönderilebilir.",
   "a": 0,
   "exp": "**Doğru.**",
   "topic": "expo",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "q": "Çok özel native SDK entegrasyonlarında React Native CLI tercih edilir.",
   "a": 0,
   "exp": "**Doğru.**",
   "topic": "expo",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "topic": "expo",
   "q": "React Native CLI, mevcut bir native projeye React Native eklenirken tercih edilen yöntemdir.",
   "a": 0,
   "exp": "**Doğru.** CLI, `ios` ve `android` klasörlerinde tam kontrol verir; özel SDK entegrasyonu ve mevcut native projeler için tercih edilir.",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  }
 ],
 "bilesen": [
  {
   "type": "mc",
   "q": "HTML’deki `<img>` elemanının React Native karşılığı hangisidir?",
   "opts": [
    "`<Img>`",
    "`<View>`",
    "`<Image>`",
    "`<Picture>`"
   ],
   "exp": "`<img>` → `<Image>` (iOS: UIImageView, Android: ImageView).",
   "topic": "bilesen",
   "a": 2
  },
  {
   "type": "mc",
   "q": "`<Text>` bileşeninin iOS’taki native karşılığı hangisidir?",
   "opts": [
    "UITextField",
    "UILabel",
    "UITableView",
    "UIView"
   ],
   "exp": "`<Text>` → iOS **UILabel**, Android **TextView**.",
   "why": {
    "0": "UITextField, `<TextInput>`in iOS karşılığıdır."
   },
   "topic": "bilesen",
   "a": 1
  },
  {
   "type": "mc",
   "q": "HTML’deki `<button>` elemanına karşılık gelen React Native bileşeni hangisidir?",
   "opts": [
    "`<Text>`",
    "`<TextInput>`",
    "`<TouchableOpacity>`",
    "`<ScrollView>`"
   ],
   "exp": "`<button>` → `<TouchableOpacity>`.",
   "topic": "bilesen",
   "a": 2
  },
  {
   "type": "mc",
   "q": "`<View>` bileşeninin Android’deki native karşılığı hangisidir?",
   "opts": [
    "android.view.ViewGroup",
    "TextView",
    "EditText",
    "RecyclerView"
   ],
   "exp": "`<View>` → iOS UIView, Android **android.view.ViewGroup**.",
   "topic": "bilesen",
   "a": 0
  },
  {
   "type": "mc",
   "q": "iOS’taki UIScrollView karşılığı olan React Native bileşeni hangisidir?",
   "opts": [
    "`<ScrollView>`",
    "`<FlatList>`",
    "`<Image>`",
    "`<View>`"
   ],
   "exp": "`<ScrollView>` → iOS UIScrollView, Android ScrollView.",
   "why": {
    "1": "FlatList’in iOS karşılığı UITableView’dir."
   },
   "topic": "bilesen",
   "a": 0
  },
  {
   "type": "fill",
   "q": "Kullanıcıdan metin almak için (HTML’deki `<input type=\"text\">`) kullanılan bileşeni yaz.",
   "code": "<____ placeholder=\"Adınız\" />",
   "ans": [
    "TextInput"
   ],
   "cs": true,
   "exp": "`<TextInput>` (iOS: UITextField, Android: EditText).",
   "whyFill": {
    "Text": "`<Text>` sadece metin **gösterir**; giriş almaz.",
    "Input": "React Native’de `Input` yok; bileşen `TextInput`.",
    "textinput": "Bileşen adları büyük harfle: `TextInput`."
   },
   "topic": "bilesen"
  },
  {
   "type": "tf",
   "q": "`<TextInput>` bileşeninin Android karşılığı TextView’dir.",
   "a": 1,
   "exp": "**Yanlış.** TextInput → **EditText**. TextView, `<Text>`in karşılığıdır.",
   "topic": "bilesen",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "q": "`<FlatList>` bileşeninin Android karşılığı RecyclerView’dir.",
   "a": 0,
   "exp": "**Doğru.**",
   "topic": "bilesen",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "topic": "bilesen",
   "q": "React Native, HTML elemanları yerine `<View>`, `<Text>`, `<Image>` gibi native karşılığı olan bileşenleri kullanır.",
   "a": 0,
   "exp": "**Doğru.** Web React’ten temel farkı budur.",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  }
 ],
 "stil": [
  {
   "type": "mc",
   "q": "`justifyContent` özelliği hangi eksende hizalama yapar?",
   "opts": [
    "Sadece yatay eksen",
    "Çapraz eksen (cross axis)",
    "Z ekseni",
    "Ana eksen (main axis)"
   ],
   "exp": "`justifyContent` → **ana eksen**; `alignItems` → çapraz eksen.",
   "why": {
    "0": "Ana eksenin yönü `flexDirection`’a bağlıdır; RN’de varsayılan dikeydir."
   },
   "topic": "stil",
   "a": 3
  },
  {
   "type": "mc",
   "q": "Aşağıdakilerden hangisi notlarda `alignItems` için verilen değerlerden biridir ama `justifyContent` için verilmemiştir?",
   "opts": [
    "stretch",
    "flex-start",
    "space-between",
    "center"
   ],
   "exp": "alignItems: flex-start, center, flex-end, **stretch**. justifyContent: flex-start, center, flex-end, **space-between**.",
   "why": {
    "2": "space-between **justifyContent** değeridir."
   },
   "topic": "stil",
   "a": 0
  },
  {
   "type": "mc",
   "q": "HTML’deki `margin-left: 10px` tanımının React Native’deki doğru yazımı hangisidir?",
   "opts": [
    "`margin-left: 10`",
    "`marginLeft: 10`",
    "`\"marginLeft: 10px\"`",
    "`marginleft: '10px'`"
   ],
   "exp": "camelCase ve birimsiz: **`marginLeft: 10`**.",
   "topic": "stil",
   "a": 1
  },
  {
   "type": "mc",
   "q": "Web’de `flexDirection` varsayılanı hangisidir, React Native’de hangisidir?",
   "opts": [
    "Web: row – RN: column",
    "İkisinde de row",
    "Web: column – RN: row",
    "İkisinde de column"
   ],
   "exp": "Web’de **row**, React Native’de **column**.",
   "topic": "stil",
   "a": 0
  },
  {
   "type": "mc",
   "q": "`flexDirection: 'row'` verilen bir kapsayıcıda öğeleri **dikeyde** ortalamak için hangisi kullanılır?",
   "opts": [
    "`flexDirection: 'column'`",
    "`alignItems: 'center'`",
    "`flex: 1`",
    "`justifyContent: 'center'`"
   ],
   "exp": "Row’da ana eksen yatay, **çapraz eksen dikeydir**. Çapraz eksende hizalama `alignItems`.",
   "why": {
    "0": "Bu yönü değiştirir, hizalama yapmaz.",
    "3": "Row’da justifyContent **yatayda** hizalar."
   },
   "topic": "stil",
   "a": 1
  },
  {
   "type": "fill",
   "q": "Stilleri tanımlayan API çağrısını tamamla.",
   "code": "const styles = StyleSheet.____({\n  container: { flex: 1 },\n});",
   "ans": [
    "create"
   ],
   "cs": true,
   "exp": "Stiller `StyleSheet.create()` ile tanımlanır.",
   "whyFill": {
    "Create": "Metot adı küçük harfle: `create`."
   },
   "topic": "stil"
  },
  {
   "type": "fill",
   "q": "HTML’deki `background-color` özelliğinin React Native karşılığını yaz.",
   "code": "container: { ____: '#fff' }",
   "ans": [
    "backgroundColor"
   ],
   "cs": true,
   "exp": "camelCase: `backgroundColor`.",
   "whyFill": {
    "background-color": "Kebab-case değil camelCase yazılır: `backgroundColor`.",
    "backgroundcolor": "İkinci kelime büyük harfle: `backgroundColor`."
   },
   "topic": "stil"
  },
  {
   "type": "tf",
   "q": "React Native’de stillendirme JavaScript nesneleriyle yapılır.",
   "a": 0,
   "exp": "**Doğru.**",
   "topic": "stil",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "q": "`space-between`, `alignItems` özelliğinin değeridir.",
   "a": 1,
   "exp": "**Yanlış.** Notlarda `space-between` **justifyContent** değeri olarak geçer.",
   "topic": "stil",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "topic": "stil",
   "q": "`alignItems` özelliği ana eksendeki (main axis) hizalamayı belirler.",
   "a": 1,
   "exp": "**Yanlış.** `alignItems` **çapraz eksen** (cross axis). Ana ekseni `justifyContent` belirler.",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "topic": "stil",
   "q": "`flex: 1` verilen bir bileşen, ekranda kaplayabileceği tüm esnek alanı kaplar.",
   "a": 0,
   "exp": "**Doğru.**",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  }
 ],
 "liste": [
  {
   "type": "mc",
   "q": "ScrollView hangi durumda kullanıma uygundur?",
   "opts": [
    "Binlerce öğeli dinamik listeler için",
    "Sonsuz kaydırmalı haber akışı için",
    "Bellek tasarrufu gereken büyük listeler için",
    "Az sayıdaki sabit içerikler için"
   ],
   "exp": "ScrollView tüm çocukları baştan çizer; **az ve sabit içerik** için uygundur.",
   "topic": "liste",
   "a": 3
  },
  {
   "type": "mc",
   "q": "Büyük bir listede ScrollView kullanılmasının sonucu ne olur?",
   "opts": [
    "Sadece görünen öğeler çizilir",
    "RAM tüketir ve uygulamayı kilitleyebilir",
    "Liste daha hızlı açılır",
    "Öğeler otomatik sayfalanır"
   ],
   "exp": "ScrollView tüm öğeleri belleğe aldığı için büyük listelerde **RAM tüketip uygulamayı kilitler**.",
   "topic": "liste",
   "a": 1
  },
  {
   "type": "mc",
   "q": "FlatList’te her öğe için benzersiz anahtarı belirleyen prop hangisidir?",
   "opts": [
    "`style`",
    "`keyExtractor`",
    "`data`",
    "`renderItem`"
   ],
   "exp": "`keyExtractor={(item) => item.id}` her öğeye benzersiz anahtar verir.",
   "why": {
    "2": "data listelenecek dizidir.",
    "3": "renderItem öğenin **nasıl çizileceğini** belirler."
   },
   "topic": "liste",
   "a": 1
  },
  {
   "type": "mc",
   "q": "FlatList’te `renderItem` fonksiyonuna gelen parametre nasıl açılır?",
   "opts": [
    "`[item] => ...`",
    "`({ item }) => ...`",
    "`(key, value) => ...`",
    "`(data) => ...`"
   ],
   "exp": "renderItem’a gelen nesneden öğe **`{ item }`** ile alınır: `renderItem={({ item }) => ...}`.",
   "topic": "liste",
   "a": 1
  },
  {
   "type": "fill",
   "q": "Listelenecek diziyi FlatList’e veren prop’u yaz.",
   "code": "<FlatList\n  ____={DATA}\n  keyExtractor={(item) => item.id}\n  renderItem={({ item }) => <Text>{item.title}</Text>}\n/>",
   "ans": [
    "data"
   ],
   "cs": true,
   "exp": "Dizi `data` prop’una verilir.",
   "topic": "liste"
  },
  {
   "type": "fill",
   "q": "Her öğenin `title` alanını gösterecek şekilde tamamla.",
   "code": "const DATA = [{ id: '1', title: 'Birinci' }];\n\nrenderItem={({ item }) => <Text>{item.____}</Text>}",
   "ans": [
    "title"
   ],
   "cs": true,
   "exp": "Öğedeki başlık alanı `item.title`.",
   "topic": "liste"
  },
  {
   "type": "tf",
   "q": "FlatList, ekran dışına çıkan öğeleri bellekten boşaltır.",
   "a": 0,
   "exp": "**Doğru.** Buna virtualization denir.",
   "topic": "liste",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "q": "Çok sayıda veriden oluşan listelerde ScrollView, FlatList’e göre daha performanslıdır.",
   "a": 1,
   "exp": "**Yanlış.** Büyük listelerde önerilen **FlatList**’tir.",
   "topic": "liste",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "topic": "liste",
   "q": "ScrollView, alt bileşenlerinden sadece ekranda görünenleri render eder.",
   "a": 1,
   "exp": "**Yanlış.** ScrollView tüm alt bileşenleri **baştan** belleğe alır. Sadece görünenleri çizen **FlatList**’tir.",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  }
 ],
 "navigasyon": [
  {
   "type": "mc",
   "q": "React Native’de sayfalar arası geçiş için güncel standart kütüphane hangisidir?",
   "opts": [
    "Fabric",
    "React Navigation",
    "React Router DOM",
    "Expo Go"
   ],
   "exp": "Güncel standart: **React Navigation**.",
   "topic": "navigasyon",
   "a": 1
  },
  {
   "type": "mc",
   "q": "Sayfaları üst üste ekleyerek ileri / geri geçiş sağlayan navigator hangisidir?",
   "opts": [
    "Grid Navigator",
    "Stack Navigator",
    "Drawer Navigator",
    "Bottom Tabs Navigator"
   ],
   "exp": "**Stack Navigator** sayfaları yığın gibi üst üste ekler.",
   "topic": "navigasyon",
   "a": 1
  },
  {
   "type": "mc",
   "q": "Yandan açılan çekmece menü yapısı hangi navigator ile sağlanır?",
   "opts": [
    "Side Navigator",
    "Bottom Tabs Navigator",
    "Stack Navigator",
    "Drawer Navigator"
   ],
   "exp": "**Drawer Navigator**: yandan açılır çekmece menü.",
   "topic": "navigasyon",
   "a": 3
  },
  {
   "type": "tf",
   "q": "Mobil uygulamalarda sayfa geçişleri Stack (yığın) yapısı üzerindedir.",
   "a": 0,
   "exp": "**Doğru.**",
   "topic": "navigasyon",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "q": "Bottom Tabs Navigator, ekranın üst kısmında açılır menü sunar.",
   "a": 1,
   "exp": "**Yanlış.** Bottom Tabs ekranın **altında** sabit sekme menüsü sunar.",
   "topic": "navigasyon",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "topic": "navigasyon",
   "q": "Mobil uygulamalarda sayfalar arası geçiş, web’deki gibi URL tabanlıdır.",
   "a": 1,
   "exp": "**Yanlış.** Mobilde geçiş **Stack (yığın)** yapısı üzerindedir.",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  }
 ],
 "ux": [
  {
   "type": "mc",
   "q": "Android’de dokunma hedefleri için önerilen minimum boyut hangisidir?",
   "opts": [
    "44×44 dp",
    "100×100 dp",
    "48×48 dp",
    "24×24 dp"
   ],
   "exp": "iOS: **44×44 pt**, Android: **48×48 dp**.",
   "why": {
    "0": "44 değeri **pt** cinsinden iOS içindir."
   },
   "topic": "ux",
   "a": 2
  },
  {
   "type": "mc",
   "q": "Form gönderilmeden önce alanları doğrulamak Nielsen’in hangi sezgisine örnektir?",
   "opts": [
    "Hataları önleme",
    "Yardım ve dokümantasyon",
    "Hataları teşhis etme ve çözme",
    "Tutarlılık ve standartlar"
   ],
   "exp": "Kullanıcının hata yapmasını **engelleyen** form doğrulamaları = **hataları önleme**.",
   "why": {
    "2": "Bu, hata **olduktan sonra** anlaşılır mesaj vermektir."
   },
   "topic": "ux",
   "a": 0
  },
  {
   "type": "mc",
   "q": "“Anlaşılır, kodsuz hata mesajları sunmak” hangi sezgiye aittir?",
   "opts": [
    "Sistem durumunun görünürlüğü",
    "Hataları önleme",
    "Hataları teşhis etme ve çözme",
    "Estetik ve sade tasarım"
   ],
   "exp": "Kodsuz, anlaşılır hata mesajı = **hataları teşhis etme ve çözme**.",
   "topic": "ux",
   "a": 2
  },
  {
   "type": "mc",
   "q": "“Menüler ve seçenekler açıkça gösterilerek bellek yükü azaltılmalıdır” ifadesi hangi sezgiyi anlatır?",
   "opts": [
    "Hatırlamak yerine tanıma",
    "Esneklik ve kullanım verimliliği",
    "Sistem ile gerçek dünyanın eşleşmesi",
    "Kullanıcı kontrolü ve özgürlük"
   ],
   "exp": "Bellek yükünü azaltma = **hatırlamak yerine tanıma**.",
   "topic": "ux",
   "a": 0
  },
  {
   "type": "mc",
   "q": "Kısayollar ve mimikler (gestures) sunmak hangi sezgiye örnektir?",
   "opts": [
    "Hataları önleme",
    "Tutarlılık ve standartlar",
    "Estetik ve sade tasarım",
    "Esneklik ve kullanım verimliliği"
   ],
   "exp": "Kısayol ve mimikler = **esneklik ve kullanım verimliliği**.",
   "topic": "ux",
   "a": 3
  },
  {
   "type": "tf",
   "q": "Uygulama içinde renklerin, buton stillerinin ve terimlerin tutarlı olması Nielsen’in “Tutarlılık ve Standartlar” ilkesidir.",
   "a": 0,
   "exp": "**Doğru.**",
   "topic": "ux",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "q": "Mobil arayüz tasarımı, kısıtlı ekran alanı ve dokunmatik etkileşim nedeniyle masaüstü tasarımdan ayrılır.",
   "a": 0,
   "exp": "**Doğru.**",
   "topic": "ux",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "q": "“Sistem ile Gerçek Dünyanın Eşleşmesi” ilkesi, yanlış işlemleri geri alma seçeneği sunmayı ifade eder.",
   "a": 1,
   "exp": "**Yanlış.** Bu ilke **tanıdık terim ve ikon** kullanmaktır. Geri alma (Undo) “Kullanıcı Kontrolü ve Özgürlük”tür.",
   "topic": "ux",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "topic": "ux",
   "q": "Mobil arayüzlerde dokunma hedefleri en az 44×44 pt (veya 48×48 dp) boyutunda olmalıdır.",
   "a": 0,
   "exp": "**Doğru.** İnsan parmağının fizyolojisine uygun minimum boyut budur.",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "topic": "ux",
   "q": "En kritik eylem butonları, başparmağın rahat ulaşabildiği alt ve orta bölgelere yerleştirilmelidir.",
   "a": 0,
   "exp": "**Doğru.** Telefonlar çoğunlukla tek elle kullanıldığı için bu alana başparmak bölgesi (Thumb Zone) denir.",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "topic": "ux",
   "q": "Mobil etkileşimlerin büyük çoğunluğu yatay (landscape) tutuşta gerçekleşir.",
   "a": 1,
   "exp": "**Yanlış.** Etkileşimlerin **%90’dan fazlası dikey (portrait)** tutuşta gerçekleşir.",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  }
 ],
 "tasarim": [
  {
   "type": "mc",
   "q": "iOS için akıcı animasyonlar, yuvarlatılmış köşeler ve sadelik odaklı tasarım rehberi hangisidir?",
   "opts": [
    "Material You",
    "Review Guidelines",
    "Apple Human Interface Guidelines (HIG)",
    "Google Material Design"
   ],
   "exp": "**HIG**: Apple’ın iOS tasarım rehberi.",
   "why": {
    "1": "Review Guidelines, App Store’un **inceleme** kurallarıdır, tasarım dili değil."
   },
   "topic": "tasarim",
   "a": 2
  },
  {
   "type": "mc",
   "q": "Katmanlı yapı, dinamik renk sistemi ve belirgin gölgelendirmeler hangi tasarım sistemine aittir?",
   "opts": [
    "Google Material Design (Material 3)",
    "Apple Human Interface Guidelines",
    "Expo Config Plugins",
    "Flexbox"
   ],
   "exp": "**Material Design (Material 3)**, Android için; dinamik renk = Material You.",
   "topic": "tasarim",
   "a": 0
  },
  {
   "type": "mc",
   "q": "Kullanıcının cihaz ayarına göre metin boyutunun büyüyüp küçülmesini sağlayan erişilebilirlik özelliği notlarda nasıl geçer?",
   "opts": [
    "Dinamik metin ölçekleme (Dynamic Type)",
    "Lazy loading",
    "Virtualization",
    "Hot reload"
   ],
   "exp": "Kontrast ve metin boyutu başlığında **dinamik metin ölçekleme (Dynamic Type)** geçer.",
   "topic": "tasarim",
   "a": 0
  },
  {
   "type": "fill",
   "q": "Bileşenin ekran okuyucu tarafından erişilebilir olduğunu belirten prop’u yaz.",
   "code": "<TouchableOpacity ____={true} accessibilityLabel=\"Giriş Yap Butonu\">",
   "ans": [
    "accessible"
   ],
   "cs": true,
   "exp": "Ekran okuyucu desteği: `accessible={true}` ve `accessibilityLabel`.",
   "topic": "tasarim"
  },
  {
   "type": "tf",
   "q": "Erişilebilirlik için yüksek kontrastlı renk seçimleri yapılmalıdır.",
   "a": 0,
   "exp": "**Doğru.**",
   "topic": "tasarim",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "q": "Material Design, Apple’ın iOS için yayımladığı tasarım rehberidir.",
   "a": 1,
   "exp": "**Yanlış.** Material Design **Google**’ın, Android için. Apple’ınki HIG.",
   "topic": "tasarim",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  },
  {
   "type": "tf",
   "topic": "tasarim",
   "q": "Material You (dinamik renk sistemi), Apple Human Interface Guidelines’ın bir parçasıdır.",
   "a": 1,
   "exp": "**Yanlış.** Material You, Google’ın **Material Design (Material 3)** sistemine aittir; Android içindir.",
   "opts": [
    "Doğru",
    "Yanlış"
   ]
  }
 ]
};
window.EXTRA_CODE = [
 {
  "type": "code",
  "topic": "liste",
  "title": "Kitap listesi",
  "q": "Kitapları performanslı bir listeyle göster. Her öğenin anahtarı kitabın kimliği olsun ve satırda kitabın başlığı yazsın. Boşlukları tamamla.",
  "code": "import { FlatList, View, Text } from 'react-native';\n\nconst KITAPLAR = [\n  { id: 'k1', baslik: 'Sefiller' },\n  { id: 'k2', baslik: 'Suç ve Ceza' },\n];\n\nexport default function KitapListesi() {\n  return (\n    <FlatList\n      {{1}}={KITAPLAR}\n      keyExtractor={(item) => item.{{2}}}\n      {{3}}={({ item }) => (\n        <View>\n          <Text>{item.{{4}}}</Text>\n        </View>\n      )}\n    />\n  );\n}",
  "blanks": [
   {
    "ans": [
     "data"
    ],
    "cs": true
   },
   {
    "ans": [
     "id"
    ],
    "cs": true
   },
   {
    "ans": [
     "renderItem"
    ],
    "cs": true
   },
   {
    "ans": [
     "baslik"
    ],
    "cs": true
   }
  ],
  "exps": [
   "Listelenecek dizi `data` prop’una verilir.",
   "Benzersiz anahtar, nesnedeki `id` alanı.",
   "Her öğenin nasıl çizileceği `renderItem` ile tanımlanır.",
   "Satırda başlık yazacağı için `item.baslik`."
  ],
  "note": "FlatList’in üç temel prop’u: `data`, `keyExtractor`, `renderItem`."
 },
 {
  "type": "code",
  "topic": "stil",
  "title": "Ürün kartı stilleri",
  "q": "Kapsayıcı tüm ekranı kaplayacak. Kartta öğeler yan yana dizildiği için dikeyde ortalanacak ve iki uca yayılacak. Fiyat metni soldan 10 birim boşluklu olacak. Boşlukları tamamla.",
  "code": "const styles = StyleSheet.create({\n  container: {\n    {{1}}: 1,\n    backgroundColor: '#fff',\n  },\n  kart: {\n    flexDirection: 'row',\n    {{2}}: 'center',\n    {{3}}: 'space-between',\n  },\n  fiyat: {\n    {{4}}: 10,\n    fontWeight: 'bold',\n  },\n});",
  "blanks": [
   {
    "ans": [
     "flex"
    ],
    "cs": true
   },
   {
    "ans": [
     "alignItems"
    ],
    "cs": true
   },
   {
    "ans": [
     "justifyContent"
    ],
    "cs": true
   },
   {
    "ans": [
     "marginLeft"
    ],
    "cs": true
   }
  ],
  "exps": [
   "Tüm esnek alanı kaplamak: `flex: 1`.",
   "Yön row olduğu için dikey artık **çapraz eksen**; çapraz eksende hizalama `alignItems`.",
   "İki uca yaymak ana eksende olur: `justifyContent: 'space-between'`.",
   "Soldan boşluk camelCase ve birimsiz: `marginLeft: 10`."
  ],
  "note": "Tuzak: row yönünde eksenler yer değiştirir. `margin-left` yazılmaz."
 },
 {
  "type": "code",
  "topic": "tasarim",
  "title": "Erişilebilir giriş ekranı",
  "q": "Bileşenler doğru paketten alınacak, giriş butonu ekran okuyucu için “Giriş Yap Butonu” diye okunacak, başlık 20 boyutunda ve kalın olacak. Boşlukları tamamla.",
  "code": "import { StyleSheet, View, Text, TouchableOpacity } from '{{1}}';\n\nexport default function GirisEkrani() {\n  return (\n    <View style={styles.ekran}>\n      <Text style={styles.baslik}>Hoş geldin</Text>\n      <TouchableOpacity accessible={true} {{2}}=\"Giriş Yap Butonu\">\n        <Text>Giriş</Text>\n      </TouchableOpacity>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  ekran: { flex: 1, justifyContent: 'center', alignItems: 'center' },\n  baslik: { {{3}}: 20, {{4}}: 'bold' },\n});",
  "blanks": [
   {
    "ans": [
     "react-native"
    ],
    "cs": true
   },
   {
    "ans": [
     "accessibilityLabel"
    ],
    "cs": true
   },
   {
    "ans": [
     "fontSize"
    ],
    "cs": true
   },
   {
    "ans": [
     "fontWeight"
    ],
    "cs": true
   }
  ],
  "exps": [
   "Temel bileşenler `'react-native'` paketinden import edilir.",
   "Ekran okuyucunun okuyacağı metin: `accessibilityLabel`.",
   "Yazı boyutu camelCase: `fontSize`.",
   "Kalınlık: `fontWeight: 'bold'`."
  ],
  "note": "CSS’teki `font-size` ve `font-weight` burada camelCase yazılır."
 },
 {
  "type": "code",
  "topic": "liste",
  "title": "Mesaj listesi",
  "q": "Mesajlar performanslı bir listede gösterilecek. Her satırda avatar görseli ile metin yan yana duracak, liste tüm ekranı kaplayacak. Boşlukları tamamla.",
  "code": "import { FlatList, View, Text, Image, StyleSheet } from 'react-native';\n\nconst MESAJLAR = [\n  { id: 'm1', metin: 'Selam!', avatar: 'https://ornek.com/a.png' },\n  { id: 'm2', metin: 'Vize ne zaman?', avatar: 'https://ornek.com/b.png' },\n];\n\nexport default function Mesajlar() {\n  return (\n    <FlatList\n      style={styles.liste}\n      data={MESAJLAR}\n      keyExtractor={(item) => item.id}\n      renderItem={({ {{1}} }) => (\n        <View style={styles.satir}>\n          <{{2}} source={{ uri: item.avatar }} style={styles.avatar} />\n          <Text>{item.metin}</Text>\n        </View>\n      )}\n    />\n  );\n}\n\nconst styles = StyleSheet.create({\n  liste: { {{3}}: 1 },\n  satir: { flexDirection: '{{4}}', alignItems: 'center' },\n  avatar: { width: 40, height: 40 },\n});",
  "blanks": [
   {
    "ans": [
     "item"
    ],
    "cs": true
   },
   {
    "ans": [
     "Image"
    ],
    "cs": true
   },
   {
    "ans": [
     "flex"
    ],
    "cs": true
   },
   {
    "ans": [
     "row"
    ],
    "cs": true
   }
  ],
  "exps": [
   "renderItem’a gelen nesneden öğe `{ item }` ile alınır.",
   "Görsel bileşeni `<Image>`.",
   "Tüm ekranı kaplamak: `flex: 1`.",
   "Yan yana dizmek için `flexDirection: 'row'`."
  ],
  "note": "Bu kalıp hocanın uygulama ödeviyle aynıdır: FlatList + Image + Text + row."
 },
 {
  "type": "code",
  "topic": "stil",
  "title": "Alta yaslanmış form",
  "q": "Form öğeleri alt alta dizilecek (varsayılan yön açıkça yazılacak), ekranın altına (başparmak bölgesine) yaslanacak ve tüm genişliği kaplayacak. Metin girişi için doğru bileşeni kullan. Boşlukları tamamla.",
  "code": "import { View, TextInput, StyleSheet } from 'react-native';\n\nexport default function Form() {\n  return (\n    <View style={styles.form}>\n      <{{1}} placeholder=\"E-posta\" />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  form: {\n    flex: 1,\n    flexDirection: '{{2}}',\n    justifyContent: '{{3}}',\n    alignItems: '{{4}}',\n  },\n});",
  "blanks": [
   {
    "ans": [
     "TextInput"
    ],
    "cs": true
   },
   {
    "ans": [
     "column"
    ],
    "cs": true
   },
   {
    "ans": [
     "flex-end"
    ],
    "cs": true
   },
   {
    "ans": [
     "stretch"
    ],
    "cs": true
   }
  ],
  "exps": [
   "Metin girişi `<TextInput>` (HTML’deki input).",
   "Alt alta dizilim ve RN varsayılanı: `column`.",
   "Column’da ana eksen dikey; alta yaslamak `justifyContent: 'flex-end'`.",
   "Çapraz eksende (yatay) tüm genişliği kaplamak: `alignItems: 'stretch'`."
  ],
  "note": "Kritik eylemler başparmak bölgesine (alt-orta) konur; bu yüzden form alta yaslandı."
 }
];
