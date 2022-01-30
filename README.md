# Discord Rich Presence | Electron App
- Discord uygulaması için ElectronJS ile kodlanılmış Discord Rich Presence Uygulaması

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
- Nasıl Executable (.exe) dosyaya çeviririm?
Sırasyıla şu işlemleri yaparsanız,
```
npm install electron-packager -g
electron-packager <uygulama-konumu> <uygulama ismi> --platform=win32 --arch=x64 --icon=<isteğe bağlı/ .ico dosyasının konumu>
```

# Önemli!!
- Eğer ki discord uygulaması arka planda açık değilse uygulama çalışmayacaktır!

# Discord arkaplanda açık fakat uygulama çalışmıyor?
- Eğer discord arkaplanda açıksa ve uygulama çalışmıyor/işe yaramıyor ise yapmanız gereken işlemler sırasıyla:
`rs` komutunu konsola girmek (Uygulama aktif bir şekildeyken!!) ve uygulamanın yeniden açılmasını beklemek. Bu işlem %98 ihtimalle işe yarayacaktır.


# Kaynaklar

[`Discord-RPC`](https://www.npmjs.com/package/discord-rpc)
[`Electron-Forge`](https://github.com/electron-userland/electron-forge)
[`DiscordJS RPC Dökümasyonu`](https://discord.js.org/#/docs/rpc/master/general/welcome)
