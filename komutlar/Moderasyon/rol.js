const {EmbedBuilder , PermissionsBitField} = require('discord.js')

module.exports = {
    config: {
        name: "rol",
        description: "Rol Alıp / Verirsiniz.",
        aliases: ["r"],
        kategori:"Moderasyon"
    },
    run: async (client,message,args) => {
        if (!message.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) return message.reply({content: `Bu Komutu Kullanabilmeniz İçin **ROL YÖNET** Yetkisine Sahip Olmanız Gerekmektedir.`})
        if (!args[0]) return message.channel.send({embeds:[
            new EmbedBuilder()
              .setColor("#000001")
              .setTimestamp()
              .setDescription(`Eğer Rol Vermek İstiyorsanız \`.rol ver\` | Eğer Almak İstiyorsanız \`.rol al\` Yazabilirsiniz`)]})     

        if (args[0] === 'ver') {
            let user = message.mentions.users.first();
let rol = message.mentions.roles.first();

if(!user) return message.reply("Lütfen Rolün Verileceği Kişiyi Belirtiniz.")
if(!rol) return message.reply("Lütfen Verilecek Rolü Belirtiniz.")


message.guild.members.cache.get(user.id).roles.add(rol)

const embed = new EmbedBuilder()
.setColor('#000001')
.setAuthor({ name: client.botunadı, url: "https://top.gg/tr/bot/981562634077880360" })
.setDescription(`${user}, isimli kişiye ${rol} isimli rol verildi.`)


message.reply({embeds:[embed]})
        }
        if (args[0] === 'al') {
            let user = message.mentions.users.first();
let rol = message.mentions.roles.first();

if(!user) return message.reply("Lütfen Rolün Alınacak Kişiyi Belirtiniz.")
if(!rol) return message.reply("Lütfen Alınnacak Rolü Belirtiniz.")


message.guild.members.cache.get(user.id).roles.remove(rol)

const embed = new EmbedBuilder()
.setColor('#000001')
.setAuthor({ name: client.botunadı, url: "https://top.gg/tr/bot/981562634077880360" })
.setDescription(`${user}, isimli kişinin ${rol} isimli Rolü Alındı.`)


message.reply({embeds:[embed]})
        }
        } 
}
