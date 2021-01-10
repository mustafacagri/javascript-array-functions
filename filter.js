const kisiler = require('./kisiler.json')

// 1-) Yaşı 40 altında olan kişileri bulalım.
let yas40 = kisiler.filter( kisi => kisi.yas < 40 )
console.log(yas40)

// 2-) Göz rengi ela olan kişileri bulalım.
// --> Aslında birden fazla gözü ela olan kişi olmasına rağmen, "find" ile sadece bir kişiye ulaşmıştık. İşte filter ile find arasındaki fark burada ortaya çıkacak.
let gozRengiEla = kisiler.filter( kisi => kisi.gozRengi === 'ela' )
console.log(gozRengiEla)

// 3-) Tüm erkekler
let erkekler = kisiler.filter( kisi => kisi.cinsiyet === 'erkek' )
console.log(erkekler)

// 4-) Tüm kadınlar
let kadinlar = kisiler.filter( kisi => kisi.cinsiyet === 'kadın' )
console.log(kadinlar)

// 5-) Balıkesir'de yaşayanlar
let balikesir = kisiler.filter( kisi => kisi.sehir === 'Balıkesir' )
console.log(balikesir)

// 6-) Kilosu 75'ten az olan kişiler
let kilo75 = kisiler.filter( kisi => kisi.kilo < 75 )
console.log(kilo75)