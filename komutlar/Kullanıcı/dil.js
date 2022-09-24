const {EmbedBuilder , ButtonBuilder , ActionRowBuilder , ButtonStyle} = require('discord.js');
const db = require('orio.db');
module.exports = {
    config: {
        name: "language",
        aliases: ["dil"],
        kategori: "Kullanıcı",
        description: "Botumuzun Dilini Değiştirirsiniz..",
    },
    run: async (client, message,args) => {
  

        
    const row = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
      .setLabel("Turkish")
      .setStyle(ButtonStyle.Success)
      .setCustomId("tr"),
      new ButtonBuilder()
      .setLabel("English")
      .setStyle(ButtonStyle.Danger)
      .setCustomId("eng")
    )
     const embed = new EmbedBuilder()
     .setTitle(client.botunadı)
     .setDescription("Aşağıdaki butonlardan bu sunucu için olucak dili seçebilirsin!")
     .setColor("#000001")
     message.channel.send({embeds: [embed], components: [row]}).then(msg => {
      msg.createMessageComponentCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {
        let interaction = button
          if (interaction.customId == "tr") {
            const embedd = new EmbedBuilder()
            .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
            .setColor("#000001")
            if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
            var embed = new EmbedBuilder()
            .setColor("#000001")
            .setDescription(`Dil başarıyla Türkçe olarak seçildi.`)
            msg.edit({embeds: [embed], components: []})
      }
    
      if (interaction.customId == "eng") {
        const embedd = new EmbedBuilder()
          .setDescription(`Bu butonu sadece komutu yazan (<@${message.author.id}>) kullanabilir.`)
          .setColor("#000001")
          if(interaction.user.id !== message.author.id) return interaction.reply({embeds: [embedd], ephemeral: true})
        db.set(`dil_${message.author.id}`, "english")
            var embed1 = new EmbedBuilder()
            .setColor("#000001")
            .setDescription(`Selected as English using language.`)
            msg.edit({embeds: [embed1], components: []})
        }
    
    })
  })
}
}