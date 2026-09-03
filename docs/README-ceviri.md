# RU / AR çeviri kaynağı

`ceviri-ru-ar.json` — siteye Rusça ve Arapça eklenirken kullanılan 241 kaynak dizenin
çevirileri. Anahtar, `src/data/` içindeki Türkçe dizelerin ilk görülme sırasına göre indekstir;
değer `[rusça, arapça]`.

**Bu dosya derlemeye girmez.** Veri artık `src/data/*.ts` içinde `ru:` / `ar:` anahtarları
olarak duruyor; burası yalnızca kaydı tutar.

## Bilinmesi gereken
Çeviriler **anadil konuşucusu tarafından denetlenmedi.** Teknik terimler sektör
karşılıklarıyla yazıldı (Shore A → шор A / شور A, vulkanizasyon → вулканизация / الفلكنة,
ST52 çelik çekirdek → стальной сердечник ST52 / القلب الفولاذي ST52). Ticari teklif akışında
kullanılmadan önce gözden geçirilmesi önerilir.

Bir dizeyi düzeltmek için doğrudan `src/data/site.ts`, `src/data/products.ts` veya
`src/data/meta.ts` içindeki ilgili `ru:` / `ar:` değerini değiştirin.
