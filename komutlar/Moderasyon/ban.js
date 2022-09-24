const {Discord , EmbedBuilder,PermissionsBitField} = require("discord.js");

module.exports = {
    config: {
        name: "ban",
        aliases: [],
        description: "Belirtilen Kişiyi Sunucunuzdan Banlarsınız.",
        kategori: "Moderasyon"
  
    },
    run: async (client, message, args) => {
          if (!message.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return message.reply({content: `Bu Komutu Kullanabilmeniz İçin **BAN** Yetkisine Sahip Olmanız Gerekmektedir.`})
    

        let user = message.mentions.users.first();
        let sebep = args[1]
        if(!user) return message.reply("Lütfen Banlanacak Kişiyi Belirtiniz.")
        if(!sebep) return message.reply("Lütfen Sebep Belirtiniz")

const üye = message.guild.members.cache.get(user.id)

try {
        await üye.ban({reason: sebep})
        const embed = new EmbedBuilder()
        .setColor("#000001")
        .setDescription(`${user}, isimli Kişi Sunucudadan Banladı!
        Sebebi: ${sebep}`)
        .setFooter({ text: `${message.author.username} Tarafından İstendi.`, iconURL: message.author.displayAvatarURL({dynamic:true}) })
    
        message.reply({embeds: [embed]})
            } catch {
       message.channel.send
       const umutcan = new EmbedBuilder()
       .setColor("#000001")
       .setDescription(`${user} Adlı Kullanıcıyı Banlayamıyorum. Galiba Yetkim Yetmiyor Veya Sunucuda Bulunmuyor!!!`)
       .setFooter({ text: `${message.author.username} Tarafından İstendi.`, iconURL: message.author.displayAvatarURL({dynamic:true}) })
    
       message.reply({embeds: [umutcan]})
    }
    },
}