const {EmbedBuilder , PermissionsBitField} = require('discord.js')
const db = require('orio.db')
module.exports = {
  config: {
      name: "sayaç",
      description: "Sayaç Sistemini Ayarlayıp / Kapatırsıız.",
      kategori: "Admin"

  },
  run: async (client, message, args) => {
    
    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply({content: `Bu Komutu Kullanabilmeniz İçin **ADMİN** Yetkisine Sahip Olmanız Gerekmektedir.`})
   
const menu = new EmbedBuilder()
.setAuthor({ name: `Hatalı Kullanım.`})
.setColor(`#000001`)
.setDescription(`
.sayaç log : sayaç logunu ayarlarsınız.
.sayaç hedef : sayaç hedefini belirlersiniz.
.sayaç sıfırla : sayaç sistemini kapatırsınız.
`)
if(!args[0]) return message.reply({embeds:[menu]})

if(args[0] === "log"){
    let kanal = message.mentions.channels.first();

if(!kanal) return message.reply(`Lütfen Log Kanalını belirtiniz.`)
db.set(`sayaç_log_${message.guild.id}`, kanal.id)
message.reply(`Başarılı bir şekilde sayaç log ${kanal} olarak belirlendi.`)
}

if(args[0] === "hedef"){
let hedef = args[1]

if(!hedef) return message.reply(`Hedef üye sayısını belirtiniz.`)
if(isNaN(hedef)) return message.reply(`Hedef sayı ile olmalıdır.`)

db.set(`sayaç_hedef_${message.guild.id}`,hedef)
message.reply(`Sayaç hedefi **${hedef}** olarak ayarlandı.`)
}

if(args[0] === "sıfırla"){

let kontrol1 = db.fetch(`sayaç_log_${message.guild.id}`)
let kontrol2 = db.fetch(`sayaç_hedef_${message.guild.id}`)

if(!kontrol1 && !kontrol2) return message.reply(`Zaten ayarlanmamış.`)
if(kontrol1) db.delete(`sayaç_log_${message.guild.id}`)
if(kontrol2) db.delete(`sayaç_hedef_${message.guild.id}`)
message.reply(`Sayaç ayarlamaları sıfırlanmıştır.`)
}

}
}