# Discord Rich Presence | Electron App
- Discord uygulaması için ElectronJS ile kodlanılmış Discord Rich Presence Uygulaması

# Başlangıç | Ne işe yarar?
- Discord Rich Presence Nedir? Ne işe yarar?
Discord Rich Presence, discord üzerindeki etkinliğinizi oyununuza, uygulamanıza veyahut kişisel kullanımınıza göre profil kısmınızda düzenleyebileceğiniz alandır.
Basit bir örneği (Bu uygulamadan alıntı) şu şekildedir:
![rpc](https://user-images.githubusercontent.com/77791070/151698491-999bac2a-9834-4506-9042-5c0d4d1bb40e.PNG)

# Başlangıç | Yapı
- Uygulamanın yapısı ElectronJS ile kodlandı, Discord RPC bölümünü ise [`discord-rpc`](https://www.npmjs.com/package/discord-rpc) modülü ile yapılmıştır.


# Başlangıç | Kurulum ve başlatma
Sırasıyla,
```
npm install
npm start
```
Komutlarını terminalinize girerseniz uygulama başlatılacaktır..

# Önemli!!
- Eğer ki discord uygulaması arka planda açık değilse uygulama çalışmayacaktır!

# Discord arkaplanda açık fakat uygulama çalışmıyor?
- Eğer discord arkaplanda açıksa ve uygulama çalışmıyor/işe yaramıyor ise uygulamaya kapatıp açarsanız %98 ihtimalle uygulama çalışıcaktır.


# Kaynaklar

[`Discord-RPC`](https://www.npmjs.com/package/discord-rpc)
[`Electron-Forge`](https://github.com/electron-userland/electron-forge)
[`DiscordJS RPC Dökümasyonu`](https://discord.js.org/#/docs/rpc/master/general/welcome)
