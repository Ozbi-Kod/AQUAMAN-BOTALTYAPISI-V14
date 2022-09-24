const {PermissionsBitField, EmbedBuilder} = require("discord.js");
const db = require('orio.db');

module.exports = {
config:{
    name: "mute-ayar",
    description: "Mute Sistemini ayarlarsınız.",
    aliases: ["mute-setting"],
    kategori: "Admin",
    usage: "",},
    run: async(client, message, args) => {
        let dil = await db.get(`dil_${message.author.id}`)
        if(dil === "english") {          if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply({content: `You Must Have **ADMIN** Authorization to Use This Command.`})
        const muteyardım = new EmbedBuilder()
.setDescription(`
**${client.prefix}mute-ayar role @role** : You show the mute person.
**${client.prefix}mute-ayar log #channel** : You set where to prevent login when mute is thrown.
**${client.prefix}mute-ayar mute-authority @authority** : You set the settings in games that can mute.`)
if(!args[0]) return message.reply({embeds:[muteyardım]})

if(args[0] == "role") {

let rol = message.mentions.roles.first();

if(!rol) return message.reply(`Please set a **Mute** role`)

db.set(`mute_rol_${message.guild.id}`, rol.id)

message.reply(`When muted, I will take all the roles of the person and give the role named ${rol}.`)

}

if(args[0] == "mute-authority"){

    let rol = message.mentions.roles.first();
    
    if(!rol) return message.reply(`Please specify a **Mute Officer** role`)
    
    db.set(`mute_yetkilirol_${message.guild.id}`, rol.id)
    
    message.reply(`Only people with a role named ${rol} will be able to mute.`)

   }
    
    if(args[0] == "log"){

        let kanal = message.mentions.channels.first();
        
        if(!kanal) return message.reply(`Please specify a **Mute Log** channel`)
        
        db.set(`mute_kanal_${message.guild.id}`, kanal.id)
        
        message.reply(`When mute is thrown, I will now log on the channel named ${kanal}`)
    
        
        }
  }  
  else{
        if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply({content: `Bu Komutu Kullanabilmeniz İçin **ADMİN** Yetkisine Sahip Olmanız Gerekmektedir.`})
        const muteyardım = new EmbedBuilder()
.setDescription(`
**${client.prefix}mute-ayar rol @rol** : Mute atılan kişiye verilecek rolü belirtlersiniz.
**${client.prefix}mute-ayar log @log** : Mute atılınca logun tutulacağı yeri ayarlarsın.
**${client.prefix}mute-ayar mute-yetkilisi @yetkili** : Mute atabilecek rolü ayarlarsın.
`)
if(!args[0]) return message.reply({embeds:[muteyardım]})

if(args[0] == "rol") {

let rol = message.mentions.roles.first();

if(!rol) return message.reply(`Lütfen bir **Mute** rolü belirleyiniz`)

db.set(`mute_rol_${message.guild.id}`, rol.id)

message.reply(`Mute atıldığında kişinin tüm rollerini alıp ${rol} isimli rolü vericeğim.`)

}

if(args[0] == "mute-yetkilisi"){

    let rol = message.mentions.roles.first();
    
    if(!rol) return message.reply(`Lütfen bir **Mute Yetkilisi** rolü belirleyiniz`)
    
    db.set(`mute_yetkilirol_${message.guild.id}`, rol.id)
    
    message.reply(`Sadece ${rol} isimli rolü olan kişiler mute atabilecek.`)

   }
    
    if(args[0] == "log"){

        let kanal = message.mentions.channels.first();
        
        if(!kanal) return message.reply(`Lütfen bir **Mute Log** kanalı belirleyiniz`)
        
        db.set(`mute_kanal_${message.guild.id}`, kanal.id)
        
        message.reply(`Mute atıldığında artık ${kanal} isimli kanalda log tutucam`)
    
        
        }
    }
},

}