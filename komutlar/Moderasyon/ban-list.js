const { PermissionsBitField, EmbedBuilder } = require("discord.js");

  module.exports = {
    config: {
        name: "ban-list",
        aliases: [],
        description: "Banlı Olan Kullanıcıları Görürsün!",
        kategori: "Moderasyon"
  
    },
    run: async (client, message, args) => {
        if (!message.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return message.reply({content: `Bu Komutu Kullanabilmeniz İçin **BAN** Yetkisine Sahip Olmanız Gerekmektedir.`})

    var userlist = message.guild.bans.fetch()
    userlist.then(collection => {
    if(collection.first() == null){
      
    const embed = new EmbedBuilder()
    .setDescription("Sunucunuzda Banlanan Kimse Yok!")      
    .setColor("Red")
    .setTitle(":x: Hata!")
    message.reply({embeds: [embed]})
      
    } else {
    const data = collection.map(mr => "`"+mr.user.username+"`").slice(0, 60).join(" ")
    const data2 = collection.map(mr => mr.user.discriminator).slice(0, 60).join(", ")

    const embed2 = new EmbedBuilder()
    .setTitle(client.botunadı)
    .setColor("#ff0000")
    .setDescription(data+`#${data2}`)
    message.reply({embeds: [embed2]})
}

  })
  }

}
  