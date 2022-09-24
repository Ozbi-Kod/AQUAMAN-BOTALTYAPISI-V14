const {EmbedBuilder , PermissionsBitField} = require('discord.js')
const db = require('orio.db')
module.exports = {
  config: {
      name: "otorol",
      aliases: [],
      description: "Sunucuya Giri",
      kategori: "Admin"

  },
  run: async (client, message, args) => {
    let dil = await db.get(`dil_${message.author.id}`)
    if(dil === "english") {   
      if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply({content: `You Must Have **ADMIN** Authorization to Use This Command.`})

    let bos = args[0]     
    
    if(!bos) return message.reply(`Please Use the Command Correctly. **Correct Usage: .otorol channel #channel / .otorol rol @role / .otorol reset **`)
    
    if(args[0] == "rol"){
    
      let rol = message.mentions.roles.first();
    
      if(!rol) return message.reply(`Please Specify a Role`)
    
        db.set(`otorol_rol_${message.guild.id}`, rol.id)
        message.reply(`I will successfully assign the role named ${rol} to new incoming people.`)
    }
    
    
    if(args[0] == "channel"){
        let kanal = message.mentions.channels.first();
    
        if(!kanal) return message.reply(`Please specify a channel.`)
        db.set(`otorol_kanal_${message.guild.id}`, kanal.id)
        message.reply(`I will write the people I have successfully cast in the channel named ${kanal}`)
    }
    if(args[0] == "reset"){
    
        db.delete(`otorol_kanal_${message.guild.id}`)
        db.delete(`otorol_rol_${message.guild.id}`)
        message.reply(`System successfully reset / shut down.`)
    }
       }
       else {

        if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply({content: `Bu Komutu Kullanabilmeniz İçin **ADMİN** Yetkisine Sahip Olmanız Gerekmektedir.`})

        let bos = args[0]     
        
        if(!bos) return message.reply(`Lütfen Komutu Doğru Kullanınız. **Doğru Kullanım: .otorol kanal #kanal / .otorol rol @üye **`)
        
        if(args[0] == "rol"){
        
          let rol = message.mentions.roles.first();
        
          if(!rol) return message.reply(`Lütfen Bir Rol Belirtiniz`)
        
            db.set(`otorol_rol_${message.guild.id}`, rol.id)
            message.reply(`Başarılı bir şekilde ${rol} isimli rolü gelen yeni kişilere vereceğim.`)
        }
        
        
        if(args[0] == "kanal"){
            let kanal = message.mentions.channels.first();
        
            if(!kanal) return message.reply(`Lütfen bir kanal belirtiniz.`)
            db.set(`otorol_kanal_${message.guild.id}`, kanal.id)
            message.reply(`Başarılı bir şekilde ${kanal} isimli kanala rol verdiğim kişileri yazıcam`)
        }
        if(args[0] == "sıfırla"){
        
            db.delete(`otorol_kanal_${message.guild.id}`)
            db.delete(`otorol_rol_${message.guild.id}`)
            message.reply(`Sistem başarılı bir şekilde sıfırlandı / kapatıldı.`)
        }
        

       }
  }
}