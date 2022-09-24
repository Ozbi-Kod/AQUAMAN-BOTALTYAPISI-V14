const Discord = require("discord.js");
const db = require('orio.db');

module.exports = {
config:{
name: "kayıt-sıfırla",
description: "Kayıt sistemini sıfırlarsınız.",
aliases: [],
kategori: "Register",
},
    run: async(client, message, args) => {
    
        if (!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.channel.send("Yetkiniz Yeterli Değil").then(msg => {setTimeout(() => msg.delete(), 5000);});
        
if(db.fetch(`kayıt_yetkılı_${message.guild.id}`)){
    db.delete(`kayıt_yetkılı_${message.guild.id}`)

}
if(db.fetch(`kerkek_rol_${message.guild.id}`)){
    db.delete(`kerkek_rol_${message.guild.id}`)
}
if(db.fetch(`kkız_rol_${message.guild.id}`)){
    db.delete(`kkız_rol_${message.guild.id}`)
}
if(db.fetch(`kayıtsızrol_${message.guild.id}`)){
    db.delete(`kayıtsızrol_${message.guild.id}`)
}
if(db.fetch(`kayıtkanal_${message.guild.id}`)){
    db.delete(`kayıtkanal_${message.guild.id}`)

}
message.reply('Kayıt sistemi başarıyla sıfırlandı!');
},

}
