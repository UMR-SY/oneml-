const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedPinCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **» CAPTAN Bot** ©️ **]▬▬▬▬▬▬**")
.setThumbnail("https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/qzHTkhjQgT)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=779006421625995345&permissions=8&scope=bot)** **•** **[Web-Site]( https://hammerhead-spark-sheet.glitch.me/index.html)**
Bir komut hakkında detaylı __yardım için__: **-yardım**

• Bot ile ilgili tavsiyelerinizi veya bulduğunuz hataları **-istek-kod** yazarak bize iletebilirsiniz.
• Hatalı bi kod veya buglu bi kod bulursanız **-bug-bildir** yazarak bize bildirebilirsiniz.

**• Komutlar**
> [-kayıt-bilgi](https://discord.gg/qzHTkhjQgT) →  Kayıt için bilgi.
> [-taç](https://discord.gg/qzHTkhjQgT) → Sunucunun sahibini gösterir.
> [-sil](https://discord.gg/qzHTkhjQgT) → Yazdığınız miktarda mesajı siler.
> [-ban](https://discord.gg/qzHTkhjQgT) → Etiketlediğiniz kişiyi sunucudan banlarsınız.
> [-kick](https://discord.gg/qzHTkhjQgT) → Etiketlediğiniz kişiyi sunucudan atarsınız.
> [-duyuru](https://discord.gg/qzHTkhjQgT) → Bot yazdıgının mesajı duyuru yapar.
> [-küfür](https://discord.gg/qzHTkhjQgT) → Küfür engel sistemini açarsınız.
> [-reklam](https://discord.gg/qzHTkhjQgT) → Reklam engel sistemi açarsınız.
> [-slowmode](https://discord.gg/qzHTkhjQgT) → Yavaş modu ayarlarsınız. 
> [-forceban](https://discord.gg/qzHTkhjQgT) →  etiketlediniz kişiyi perma banlar.
> [-unban](https://discord.gg/qzHTkhjQgT) → Birisinin banını açarsınız.
> [-sa-as](https://discord.gg/qzHTkhjQgT) →  Sa-As sistemini aktif eder.
> [-sunucubilgi](https://discord.gg/qzHTkhjQgT) →  Sunucu hakkında bilgi verir
> [-üyedurum](https://discord.gg/qzHTkhjQgT) →  Sunucu üyeleri hakkında bilgi verir
> [-çekiliş](https://discord.gg/qzHTkhjQgT) → Çekiliş yaparsınız.


**▬▬▬▬▬▬▬[** :gear:  **Bilgilendirme**  :gear: **]▬▬▬▬▬▬**
> :bulb: **Discord Js Sürümü : 12.4.0**
> :robot: **quick.db Sürümü : 7.1.2**
> :eye_in_speech_bubble: **moment Sürümü : 2.29.1**
© 2020 Captan | Tüm hakları saklıdır.
`)
 

return message.channel.send(EmbedPinCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'moderasyon', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-moderasyon'
};