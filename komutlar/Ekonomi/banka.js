const moment = require("moment")
moment.locale("tr")
const db = require('orio.db');
const {EmbedBuilder} = require('discord.js')
module.exports = {
    config:{
    name: "banka",
    description: "Bankana bakarsın",
    aliases: [],
    kategori: "Ekonomi",
},
    run: async(client, message, args) => {
let tekrar = db.fetch("vadelı_hesaplar")
if(!tekrar) db.set("vadelı_hesaplar", [])

let banka = db.fetch(`banka_${message.author.id}`)
let bankacoin = db.fetch(`banka_coın_${message.author.id}`)
let coin = db.fetch(`coın_${message.author.id}`)
let bankavadeli = db.fetch(`banka_coın_vadelı_${message.author.id}`)
let durum;
if(banka) durum = "Aktif"

const menu = new EmbedBuilder()
.setDescription(`
> Banka Durumu: **${durum ? durum : "DeAktif"}**
> Bankadaki Coin: **${bankacoin ? bankacoin : "0"}**
> Vadeli Hesabındaki Coin: **${bankavadeli ? bankavadeli : "0"}**
> Cüzdanınızdaki Coin: **${coin ? coin : "0"}** 

> Diğer Komutlar;
**.banka kur** : Banka Hesabı Kurarsın
**.banka sil** : Banka Hesabını silersin.
**.banka yatır** : Banka Hesabına Para Eklersin.
**.banka çek** : Banka Hesabındaki Parayı Çekersin.
**.banka vade** : Vadeli hesabınız ile alakalı işlemler yaparsınız
`)
.setColor('#000001')
if(!args[0]) return message.reply({embeds: [menu]})


if(args[0] === "kur"){
let kontrol = db.fetch(`hesap_${message.author.id}`)
if(!kontrol) return message.reply(`Lütfen İlk Önce Ekonomi Hesabınızı Kurunuz. **.hesap kur**`)
if(banka) return message.reply(`Şu Anda Banka Hesabınız Bulunmaktadır.`)
if(Number(coin) < 100) return message.reply(`Banka Hesabı Açmak için 100 Coine ihtiyacınız var.`)
db.set(`banka_${message.author.id}`, true)
db.set(`banka_coın_${message.author.id}`, 0)
/// db.set(`banka_kurulum_${message.author.id}`, moment.utc().format("MMDDHHmm"))
db.add(`coın_${message.author.id}`, -100)
message.reply(`Hesabınız başarılı bir şekilde kurulmuştur.`)
const kuruldu = new EmbedBuilder()
.setDescription(`Banka Hesabınız Başarıyla Kurulmuştur.`)
.setColor('#000001')
message.channel.send({embeds:[kuruldu]})


}

if(args[0] === "sil"){
if(!banka) return message.reply(`Şu Anda Banka Hesabınız Bulunmamaktadır.`)
db.delete(`banka_${message.author.id}`)
db.delete(`banka_coın_${message.author.id}`)
const silindi = new EmbedBuilder()
.setDescription(`Banka Hesabınız Başarıyla Datalarımızdan Silinmiştir.`)
.setColor('#000001')
message.channel.send({embeds:[silindi]})


}

if(args[0] === "yatır"){
let kontrol = db.fetch(`hesap_${message.author.id}`)
if(!kontrol) return message.reply(`Lütfen İlk Önce Ekonomi Hesabınızı Kurunuz. **.hesap kur**`)
if(!banka) return message.reply(`Şu Anda Banka Hesabınız Bulunmaktadır.`)

let miktar = args[1]

if(!miktar) return message.reply(`Lütfen Banka Hesabınıza Yatırılacak Miktari Belirtiniz.`)
if(isNaN(miktar)) return message.reply(`Yatırılacak Miktar Sayı İle Olmalıdır.`)
if(coin < miktar) return message.reply(`Cüzdanınızda bu kadar coin bulunmamaktadır.`)
db.add(`banka_coın_${message.author.id}`, Number(miktar))
db.add(`coın_${message.author.id}`, -Number(miktar))
const bisonraki = new EmbedBuilder()
.setDescription(`Banka Hesabınıza Başarılı Bir Şekilde **${miktar}** Coin Yatırıldı.`)
.setColor('#000001')
message.channel.send({embeds:[bisonraki]})


}
if(args[0] === "çek"){
let kontrol = db.fetch(`hesap_${message.author.id}`)
if(!kontrol) return message.reply(`Lütfen İlk Önce Ekonomi Hesabınızı Kurunuz. **.hesap kur**`)
if(!banka) return message.reply(`Şu Anda Banka Hesabınız Bulunmaktadır.`)

let miktar = args[1]

if(!miktar) return message.reply(`Lütfen Banka Hesabınızdan çekilecek Miktari Belirtiniz.`)
if(isNaN(miktar)) return message.reply(`Çekilecek Miktar Sayı İle Olmalıdır.`)
if(bankacoin < miktar) return message.reply(`Banka hesabınızda bu kadar coin bulunmamaktadır.`)
db.add(`banka_coın_${message.author.id}`, -Number(miktar))
db.add(`coın_${message.author.id}`, Number(miktar))
const bisonraki = new EmbedBuilder()
.setDescription(`Banka Hesabınıza Başarılı Bir Şekilde **${miktar}** Coin Çekildi.`)
.setColor('#000001')
message.channel.send({embeds:[bisonraki]})

}

if(args[0] === "vade"){
let kontrol = db.fetch(`hesap_${message.author.id}`)
if(!kontrol) return message.reply(`Lütfen İlk Önce Ekonomi Hesabınızı Kurunuz. **.hesap kur**`)
if(!args[1]) return message.reply(`Doğru Kullanımı; **.banka vade yatır/çek/aç/kapat**`) 


if(args[1] === "aç"){
let kontrol = db.fetch(`vadelı_hesap_${message.author.id}`)
if(kontrol) return message.reply(`Zaten Vadeli Hesabınız bulunmakta.`)
db.set(`vadelı_hesap_${message.author.id}`, true)
db.push(`vadelı_hesaplar`, message.author.id)
const bisonraki = new EmbedBuilder()
.setDescription(`Başarıyla Vadeli Hesabınız Açılmıştır.`)
.setColor('#000001')
message.channel.send({embeds:[bisonraki]})

}
if(args[1] === "kapat"){
let kontrol = db.fetch(`vadelı_hesap_${message.author.id}`)
if(!kontrol) return message.reply(`Zaten Vadeli Hesabınız yok.`)
db.delete(`vadelı_hesap_${message.author.id}`)
let miktar = db.fetch(`banka_coın_vadelı_${message.author.id}`)
db.add(`banka_coın_${message.author.id}`, Number(miktar))
db.arrayDeleteVal(`vadelı_hesaplar`, message.author.id)
db.delete(`banka_coın_vadelı_${message.author.id}`)
message.reply(`Vadeli hesabınız kapatıldı. Vadeli hesabınızda kalan coinler hesabınıza aktarıldı.`)
const bisonraki = new EmbedBuilder()
.setDescription(`Vadeli Hesabınız Kapatıldı. Vadeli Hesabınızda Kalan ${miktar} Coin Banka Hesabınıza Aktarıldı. Bankanızdaki Coininiz ${`banka_coın_${message.author.id}`}`)
.setColor('#000001')
message.channel.send({embeds:[bisonraki]})

}


if(args[1] === "yatır"){
let kontroll = db.fetch(`vadelı_hesap_${message.author.id}`)
if(!kontroll) return message.reply(`İlk Önce Vadeli hesap kurmanız gerekmekte. **.banka vade aç**`)
let miktar = args[2] 
if(!miktar) return message.reply(`Yatırılacak coini belirtiniz.`)
if(isNaN(miktar)) return message.reply(`Yatırılacak coin miktarı sayı ile olmalıdır.`)
let banka = db.fetch(`banka_coın_${message.author.id}`)
let coin = Number(miktar)
if(coin > banka) return message.reply(`Vadeli hesabınıza yatırılacak miktar banka hesabınızda yok.`)
let kontrol = db.fetch(`banka_coın_vadelı_${message.author.id}`)
if(!kontrol) db.set(`banka_coın_vadelı_${message.author.id}`, 0)
db.add(`banka_coın_vadelı_${message.author.id}`, coin)
db.add(`banka_coın_${message.author.id}`, -coin)

const yatırıldı = new EmbedBuilder()
.setDescription(`Vadeli Hesabınıza **${miktar}** Miktar Coin Yatırıldı.`)
.setColor('#000001')
message.channel.send({embeds:[yatırıldı]})

}
if(args[1] === "çek"){
let kontroll = db.fetch(`vadelı_hesap_${message.author.id}`)
if(!kontroll) return message.reply(`İlk Önce Vadeli hesap kurmanız gerekmekte. **.banka vade aç**`)
let miktar = args[2] 
if(!miktar) return message.reply(`Çekilecek coini belirtiniz.`)
if(isNaN(miktar)) return message.reply(`Çekilecek coin miktarı sayı ile olmalıdır.`)
let banka = db.fetch(`banka_coın_vadelı_${message.author.id}`)
let coin = Number(miktar)
if(coin > banka) return message.reply(`Vadeli hesabınızdan çekilecek miktar vadeli hesabınızda yok.`)
let kontrol = db.fetch(`banka_coın_vadelı_${message.author.id}`)
if(!kontrol) db.set(`banka_coın_vadelı_${message.author.id}`, 0)
db.add(`banka_coın_vadelı_${message.author.id}`, -coin)
db.add(`banka_coın_${message.author.id}`, coin)
const yatırıldı = new EmbedBuilder()
.setDescription(`Vadeli Hesabınızdan Banka Hesabınıza Toplam **${miktar}** Miktar Coin Çekildi. Vadeli Hesabınızda Kalan Para ${banka}`)
.setColor('#000001')
message.channel.send({embeds:[yatırıldı]})
 
}
}
},
}