const kisiler = require('./kisiler.json')

// 1-) Yaşı 83 olan kişiyi bulalım.
let yas83 = kisiler.find( kisi => kisi.yas === 83 )
console.log(yas83)

// 2-) Göz rengi ela olanı bulalım.
// --> Göz rengi 2 kişinin ela olduğunu biliyoruz. Peki sonuç neden 1 tane? Çünkü find ilk sonucu döndürür. Eğer birden fazla sonuç bekliyorsak find yerine filter kullanacağız.
let gozRengiEla = kisiler.find( kisi => kisi.gozRengi === 'ela' )
console.log(gozRengiEla)

// 3-) Yaşı 8 olan kişiyi bulalım.
let yas8 = kisiler.find( kisi => kisi.yas === 8 )
console.log(yas8)

// 4-) Yaşı 50 üstünde olan kişiyi (dikkat edin kişileri değil) bulalım.
// Ahmet Güven 50 yaşın üstündeki ilk kişi olduğu için sonucu bulduktan sonra arama yapmayı bırakıyoruz. Arrayinizde ilk bulunan kişi sonucunuz olur. Yani herhangi bir isme göre sıralama vs. burada yoktur.
let yas50 = kisiler.find( kisi => kisi.yas > 50 )
console.log(yas50)