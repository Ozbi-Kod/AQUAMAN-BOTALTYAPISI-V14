const { EmbedBuilder , PermissionsBitField} = require('discord.js');
const db = require('orio.db');

module.exports = {
    config:{
        name:"rolsüz",
        kategori:"Register",
        aliases:[],
        description:"Herkese Kayıtsız Permi Verirsiniz."
     
     },

    run: async(client, message, args, embed, author, channel, guild) => {
   
 if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.repyl("Yetkiniz Yeterli Değil").then(msg => {setTimeout(() => msg.delete(), 5000);});
 let kayıtsız = db.fetch(`kayıtsızrol_${message.guild.id}`)

 let bg = message.guild.members.cache.filter(m => m.roles.cache.filter(r => r.id !== message.guild.id).size)
 if (args[0] == "ver") {
     bg.forEach(r => {
         r.roles.add(kayıtsız)
     });
     message.reply("Sunucuda rolü olmayan \`"+ bg.size +"\` kişiye kayıtsız rolü verildi.")
 } else if (!args[0]) {
     message.reply("Sunucumuzda rolü olmayan \`"+ bg.size +"\` kişi var.")
 }
},
}
