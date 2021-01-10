# Javascript Array Fonksiyonları ve Örnekleri

* Bu basit ve bir o kadar da sade olan proje içerisinde, javascript array fonksiyonlarını nasıl kullanabileceğinizi göreceksiniz. Blog ve Medium yazımdaki konuyla alakalı kodların burada toplu halde durması için bu repo oluşturulmuştur.

## İçerik
Bu proje içerisinde sırasıyla şu fonksiyon örnekleri olacak:
* Find
* Filter
* Some
* Every
* Map
* Sort
* Reduce
* ...

(Medium ve blog yazımda konuyla alakalı yeni bir şeyler ekledikçe, burada da güncelleme yapacağım)

## Veriler: *kisiler.json*

```
[
    {"isim": "Mustafa Çağrı Güven", "yas": 33, "sehir": "Ankara", "boy": 188, "kilo": 88, "cinsiyet": "erkek", "gozRengi": "kahve"},
    {"isim": "Ahmet Güven", "yas": 83, "sehir": "Balıkesir", "boy": 162, "kilo": 80, "cinsiyet": "erkek", "gozRengi": "siyah"},
    {"isim": "Ali Güven", "yas": 92, "sehir": "Balıkesir", "boy": 182, "kilo": 90, "cinsiyet": "erkek", "gozRengi": "ela"},
    {"isim": "Emine Güven", "yas": 83, "sehir": "Balıkesir", "boy": 172, "kilo": 70, "cinsiyet": "kadın", "gozRengi": "ela"},
    {"isim": "Afra Güven", "yas": 8, "sehir": "Dursunbey", "boy": 122, "kilo": 24, "cinsiyet": "kadın", "gozRengi": "kahve"},
    {"isim": "Eslem Güven", "yas": 14, "sehir": "Dursunbey", "boy": 152, "kilo": 41, "cinsiyet": "kadın", "gozRengi": "yeşil"}
]
```

### Json Import
Json dosyamızı find.js, filter.js gibi dosyaların en üstünde **const kisiler = require('./kisiler.json')** olarak dosyaya dahil ediyorum. Böylelikle, her .js dosyası içerisinde tekrar tekrar datamızı oluşturmaya gerek kalmıyor ve de tek bir yerden datamızı manipüle edebiliyoruz.

## Kullanım
Eğer ki bilgisayarınızda **Node.js** kurulu ise terminale örneğin **node filter** yazdığınızda, (dosyanın uzantısı .js olduğu için yazmanıza gerek yoktur, ancak isterseniz yazabilirsiniz: **node filter.js**) filter.js dosyasının çalıştırıldığını ve console.log'lar içerisinde olan bilgilerin ekrana yazdırıldığını göreceksiniz.

## Nodemon Kullanımı
**nodemon filter**
Eğer ki **nodemon** paketini kurarsanız, anlık olarak yaptığınız değişiklikleri terminalde görürsünüz. Ve tekrar tekrar her defasında **node filter** ya da  **node reduce** yazmanıza gerek kalmaz.


**Not**: Array içerisindeki objeleri tek satırda yazmak, benim için okunurluğu artırıyor. Bazı geliştiriciler için ise objelerin içerisindeki değerleri de ayrı ayrı satırda yazmak daha kullanışlı olabilir. Bu bir tercih meselesi.