const {EmbedBuilder, PermissionsBitField} = require("discord.js");
const Discord = require("discord.js")
const db = require('orio.db')
module.exports = {
  config: {
      name: "kayıt",
      aliases: [],
      description: "Kayıt Yaparsınız.",
      kategori: "Register"

  },
  run: async (client, message, args) => {

    let kayıt_ytk = db.fetch(`kayıt_yetkılı_${message.guild.id}`)
    let erkek = db.fetch(`kerkek_rol_${message.guild.id}`)
    let kız = db.fetch(`kkız_rol_${message.guild.id}`)
    let kayıtsız = db.fetch(`kayıtsızrol_${message.guild.id}`)
    let kayıt_kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
    
if(!kayıt_ytk) return message.reply(`**Kayıt Yetkilisi** rolü ayarlanmamış.`)
if(!message.member.roles.cache.has(kayıt_ytk) &&!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply(`Bu komudu sadece ayarlanan **Kayıt Yetkilisi** rolüne sahip olan kişiler kullanabilir`)
if(!erkek) return message.reply(`**Erkek** rolü ayarlanmamış.`)
if(!kız) return message.reply(`**Kız** rolü ayarlanmamış.`)
if(!kayıtsız) return message.reply(`**Kayıtsız** rolü ayarlanmamış.`)
if(!kayıt_kanal) return message.reply(`**Kayıt** kanalı ayarlanmamış.`)

 let users = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
 let isim = args[1]
 let yas = args[2]
 if(!users) return message.reply(`Lütfen kayıt edilecek kişiyi etiketleyiniz.`)
if(!isim) return message.reply(`Lütfen isim belirtiniz.`)
if(!yas) return message.reply(`Lütfen yaş belirtiniz.`)
if(isNaN(yas)) return message.reply(`Yaşlar sayı ile olmalıdır harf içeremez.`)

   const row = new Discord.ActionRowBuilder()
  .addComponents(
  new Discord.ButtonBuilder()
    .setLabel("Erkek")
    .setStyle(Discord.ButtonStyle.Success)
    .setCustomId("erkek"),
    new Discord.ButtonBuilder()
    .setLabel("Kız")
    .setStyle(Discord.ButtonStyle.Danger)
    .setCustomId("kız")
  )
  const embed = new EmbedBuilder()
  .setTitle(client.botunadı)
  .setDescription("Kullanıcıyı nasıl kayıt etmek istiyorsun?")
  message.channel.send({embeds: [embed], components: [row]}).then(mesaj => {
    mesaj.createMessageComponentCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {
      let interaction = button
      let üye = message.guild.members.cache.get(users.id)

        if (interaction.customId == "erkek") {

          let message = interaction.message
          message.delete()
          üye.setNickname(`${isim} | ${yas}`)
           message.guild.members.cache.get(users.id).roles.add(erkek)
           message.guild.members.cache.get(users.id).roles.remove(kayıtsız)
     

          }
       if (interaction.customId == "kız") {
    
         
          let message = interaction.message
          message.delete()
          üye.setNickname(`${isim} | ${yas}`)

           message.guild.members.cache.get(users.id).roles.add(kız)
           message.guild.members.cache.get(users.id).roles.remove(kayıtsız)
        
           message.reply({embeds: [`
        
           Kayıt olan kişinin bilgileri;
           
           Kayıt Olan üye: ${users}
           Kayıt olduğu isim: **${isim}**
           Kayıt olduğu yaş : **${yas}**
           
           Kayıt yapan kişi : ${message.author}
           `]})

           
          }
          })
        })
      }
    }