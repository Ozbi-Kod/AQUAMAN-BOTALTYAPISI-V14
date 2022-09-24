const {EmbedBuilder} = require("discord.js");
const moment = require("moment")
moment.locale("tr")
const db = require('orio.db');

module.exports = {
config:{
    name: "hesap",
description: "Hesap Kurarsın",
aliases: [],
kategori: "ekonomi",

},
    run: async(client, message, args) => {
 
const menu = new EmbedBuilder()
.setDescription(`
**.hesap kur** : Ekonomi sistemi için hesap kurarsın.
**.hesap sil** : Ekonimi sistemindeki hesabınızı silersiniz.
`)

if(!args[0]) return message.reply({embeds: [menu]})

if(args[0] === "kur"){
let isim = args[1]

if(!isim) return message.reply(`Lütfen Hesap adı belirtiniz`)

db.set(`hesap_${message.author.id}`, isim)
db.set(`coın_${message.author.id}`, 0)
const başarılı = new EmbedBuilder()
.setDescription(`${isim} İsimli Hesabınız Başarıyla Kurulmuştur.`)
.setColor('#000001')
message.channel.send({embeds:[başarılı]})
}


if(args[0] === "sil"){

let kontrol = db.fetch(`hesap_${message.author.id}`)

if(!kontrol) return message.reply(`Zaten Hesabınız Yok`)
db.delete(`hesap_${message.author.id}`)
let kontrol2 = db.fetch(`coın_${message.author.id}`)

if(kontrol2) db.delete(`coın_${message.author.id}`)

const silindi = new EmbedBuilder()
.setDescription(`${kontrol} İsimli Hesabınız Başarıyla Datalarımızdan Silinmiştir.`)
.setColor('#000001')
message.channel.send({embeds:[silindi]})

}
},
}