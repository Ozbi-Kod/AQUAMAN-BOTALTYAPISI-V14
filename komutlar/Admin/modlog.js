const { PermissionsBitField , EmbedBuilder} = require('discord.js');
const db = require("orio.db");

module.exports = {
    config: {
        name: "modlog",
        aliases: [],
        description: "Mod-Log Ayarlarsınız.",
        kategori: "Admin"
  
    },
    run: async (client, message, args) => {
     
      let dil = await db.get(`dil_${message.author.id}`)
      if(dil === "english") {    
        if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply({content: `You must have **ADMIN** privilege to use this command.`})
        if (!args[0]) return message.channel.send({embeds:[
          new EmbedBuilder()
          .setColor("#000001")
          .setTimestamp()
            .setDescription(`**Close .modlog channel #channel** or **.modlog close**`)]})
  
        if (args[0] === 'channel') {
          let kanal = message.mentions.channels.first();
          if(!kanal) return message.reply(`Please specify Modlog channel.`)
          db.set(`modlog_${message.guild.id}`, kanal.id)
          message.channel.send(`Modlog channel successfully set to ${kanal}.`)
        }
          if (args[0] === 'close') {
            const modlogss = db.fetch(`modlog_${message.guild.id}`)
            if(modlogss){
            db.delete(`modlog_${message.guild.id}`)
             message.reply(`Modlog System Successfully Closed.`)
            }
            else{
              message.reply('ModLog Is Not Already Open On This Server')
            }
     }
  
     }
  else{
      if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply({content: `Bu Komutu Kullanabilmeniz İçin **ADMİN** Yetkisine Sahip Olmanız Gerekmektedir.`})
      if (!args[0]) return message.channel.send({embeds:[
        new EmbedBuilder()
        .setColor("#000001")
        .setTimestamp()
          .setDescription(`**.modlog kanal #kanal** veya **.modlog kapat**`)]})

      if (args[0] === 'kanal') {
        let kanal = message.mentions.channels.first();
        if(!kanal) return message.reply(`Lütfen Modlog kanalı belirtiniz.`)
        db.set(`modlog_${message.guild.id}`, kanal.id)
        message.channel.send(`Modlog kanalı başarılı bir şekilde ${kanal} olarak ayarlandı.`)
      }
        if (args[0] === 'kapat') {
          const modlogss = db.fetch(`modlog_${message.guild.id}`)
          if(modlogss){
          db.delete(`modlog_${message.guild.id}`)
           message.reply(`Modlog Sistemi Başarıyla kapatılmıştır.`)
          }
          else{
            message.reply('Bu Sunucuda Zaten ModLog Açık Değil')
          }
   }
  }
}
}
