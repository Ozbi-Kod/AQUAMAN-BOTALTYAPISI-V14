const Discord = require("discord.js");
const db = require('orio.db');

module.exports = {
config:{
    
name: "cgönder",
description: "Belirtilen Kişiye Coin Gönderir",
aliases: [],
kategori: "Ekonomi",
},
    run: async(client, message, args) => {

let coin = db.fetch(`coın_${message.author.id}`)
let miktar = args[1]

let user = message.mentions.users.first();

if(!user) return message.reply(`lütfen gönderilecek kişiyi belirtiniz.`)
if(message.author.id === user.id) return message.reply(`Kendine para gönderemezsin.`)
if(user.bot === true) return message.reply(`Bir Bota coin gönderemezsiniz.`)
if(!miktar) return message.reply(`Lütfen gönderilecek miktarı giriniz.`)
if(isNaN(miktar)) return message.reply(`Gönderilecek miktar sayı ile olmalıdır.`)
if(coin < miktar) return message.reply(`Gönderilecek miktar cüzdanınızda yok.`)

db.add(`coın_${message.author.id}`, -Number(miktar))
let kontrol = db.fetch(`coın_${user.id}`)
if(!kontrol) db.set(`coın_${user.id}`,0)
db.add(`coın_${user.id}`, Number(miktar))
const gönder = Discord.EmbedBuilder()
.setDescription(`Başarılı Bir Şekilde **${miktar}** Miktar Coin ${user} İsimli Kişiye Gönderildi.`)
.setColor('#000001')
message.channel.send({embeds:[gönder]})


},

}