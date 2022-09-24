const {PermissionsBitField, EmbedBuilder}= require("discord.js");
const db = require('orio.db');

module.exports = {
config: {
name:"kayıt-ayarla",
aliases:["kayarla"],
description:"Kayıt Sistemini Ayarlarsınız.",
kategori:"Register"
},
    run: async(client, message, args) => {
        if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply({content: `Bu Komutu Kullanabilmeniz İçin **ADMİN** Yetkisine Sahip Olmanız Gerekmektedir.`})


const menu = new EmbedBuilder()
.setDescription(`
        
**.kayıt-ayarla kayıt-yetkilisi** : Kayıt yetkilisi rolünü ayarlarsın.
**.kayıt-ayarla erkek-rol** : Erkek üye rolünü ayarlarsın
**.kayıt-ayarla kız-rol** : Kız üye rolünü ayarlarsın
**.kayıt-ayarla kayıtsız-rol** : Kayıtsız rolünü ayarlarsın.
**.kayıt-ayarla kayıt-kanal** : Kayıt kanalını ayarlarsın.
`)

if(!args[0]) return message.reply({embeds: [menu]})

if(args[0] === "kayıt-yetkilisi"){
let rol = message.mentions.roles.first()

if(!rol) return message.reply(`Lütfen **Kayıt Yetkilisi** rolünü etiketleyiniz.`)
db.set(`kayıt_yetkılı_${message.guild.id}`, rol.id)
message.reply(`Başarılı bir şekilde **Kayıt Yetkilisi** rolü ${rol} olarak ayarlandı.`)
}

if(args[0] === "erkek-rol"){
let rol = message.mentions.roles.first()

if(!rol) return message.reply(`Lütfen **Erkek** rolünü etiketleyiniz.`)
db.set(`kerkek_rol_${message.guild.id}`, rol.id)
message.reply(`Başarılı bir şekilde **Erkek** rolü ${rol} olarak ayarlandı.`)
}
if(args[0] === "kız-rol"){
let rol = message.mentions.roles.first()

if(!rol) return message.reply(`Lütfen **Kız** rolünü etiketleyiniz.`)
db.set(`kkız_rol_${message.guild.id}`, rol.id)
message.reply(`Başarılı bir şekilde **Kız** rolü ${rol} olarak ayarlandı.`)
}
if(args[0] === "kayıtsız-rol"){
let rol = message.mentions.roles.first()

if(!rol) return message.reply(`Lütfen **Kayıtsız** rolünü etiketleyiniz.`)
db.set(`kayıtsızrol_${message.guild.id}`, rol.id)
message.reply(`Başarılı bir şekilde **Kayıtsız** rolü ${rol} olarak ayarlandı.`)
}

if(args[0] === "kayıt-kanal"){
let kanal = message.mentions.channels.first()

if(!kanal) return message.reply(`Lütfen **Kayıt Kanal** kanalını etiketleyiniz.`)
db.set(`kayıtkanal_${message.guild.id}`, kanal.id)
message.reply(`Başarılı bir şekilde **Kayıt Kanal** kanalı ${kanal} olarak ayarlandı.`)
}
},
}