# Discord Rich Presence | Electron App
- Discord uygulaması için ElectronJS mimarsi ile kodlanılmış ve [`discord-rpc`](https://www.npmjs.com/package/discord-rpc) modülü ile hazırlanan Discord Rich Presence Uygulaması

# Başlangıç | Ne işe yarar?
- Discord Rich Presence Nedir? Ne işe yarar?

Discord Rich Presence, discord üzerindeki etkinliğinizi oyununuza, uygulamanıza veyahut kişisel kullanımınıza göre profil kısmınızda düzenleyebileceğiniz alandır.
Basit bir örneği (Bu uygulamadan alıntı) şu şekildedir:<br>
![rpc](https://user-images.githubusercontent.com/77791070/151699180-ad69ca2c-006a-4076-90d5-d3aabe6117f5.PNG)

# Başlangıç | Yapı
- Uygulamanın yapısı ElectronJS ile kodlandı, Discord RPC bölümünü ise [`discord-rpc`](https://www.npmjs.com/package/discord-rpc) modülü ile yapılmıştır.

# Başlangıç | Kurulum ve başlatma
Sırasıyla,
```
npm install
npm start
```
Komutlarını terminalinize girerseniz uygulama başlatılacaktır..

# Derleme
- Nasıl Executable  dosyaya çeviririm?<br><br>
Windows için Executable dosyaya çevirirken yapmanız gereken işlemler sırasıyla:
```
npm i electron-packager -g
npm run build:win
```
Linux için Executable dosyaya çevirirken yapmanız gereken işlemler sırasıyla:
```
npm i electron-packager -g
npm run build:linux
```
MacOS için Executable dosyaya çevirirken yapmanız gereken işlemler sırasıyla:
```
npm i electron-packager -g
npm run build:macos
```
 Derlenmiş uygulamanız `<uygulama-ismi>-<linux/darwin(macos)/win32>-x64` adlı klasörün içine yerleştirilir.

# Önemli!!
- Eğer ki discord uygulaması arka planda açık değilse uygulama çalışmayacaktır!
- Derlenmiş uygulama bulunduğu klasörün içindeki dosyalar olmadan çalışamaz!
  
# Discord arkaplanda açık fakat uygulama çalışmıyor?
- Eğer discord arkaplanda açıksa ve uygulama çalışmıyor/işe yaramıyor ise tek yapmanız gereken işlem
`rs` komutunu konsola girmek (Uygulama aktif bir şekildeyken!!) ve uygulamanın yeniden açılmasını beklemek. Bu işlem %98 ihtimalle işe yarayacaktır.


# Kaynaklar

[`Discord-RPC Modülü`](https://www.npmjs.com/package/discord-rpc)
[`Electron-Forge`](https://github.com/electron-userland/electron-forge)
[`DiscordJS RPC Dökümasyonu`](https://discord.js.org/#/docs/rpc/master/general/welcome)
[`Electron Packager Modülü`](https://www.npmjs.com/package/electron-packager)
