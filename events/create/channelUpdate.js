const {EmbedBuilder} = require('discord.js');
const db = require('orio.db')
module.exports = async (client,oldChannel,newChannel) => {
    
    let kanal = db.fetch(`modlog_${oldChannel.guild.id}`)
    if(!kanal) return;
   // let user = await oldChannel.guild.fetchAuditLogs({ type: 'CHANNEL_UPDATE' }).then(audit => audit.entries.first())
    
    const embed = new EmbedBuilder()
    .setDescription(`**Kanal Güncellendi**`)

    .addFields([
      { name: "Eski Kanal Adı", value: `${oldChannel.name}`, inline: true },
      { name: "Eski Kanal Tipi", value: `${String(oldChannel.type)
      .replace(0,"Yazı Kanalı")
      .replace(2,"Ses Kanalı")
      .replace(4,"Kategori")
      .replace(5,"Duyuru Kanalı")
      .replace(11,"Herkese Açık Alt Başlık Kanalı")
      .replace(13,"Sahne Kanalı")
      .replace(14,"Rehber Kanalı")
      .replace(15,"Forum Kanalı")
    }`
      , inline: true },
      { name: "Kanal ID", value: `${newChannel.id}`, inline: true },
      { name: "Oluşturulma Tarihi", value: `<t:${parseInt(newChannel.createdTimestamp / 1000)}:R>`, inline: true },
      { name:"NSFW",value:`${newChannel.nsfw ? "✅・Açık" : "❌・Kapalı"}`,inline:true},
    ])

    .addFields([
      { name: "Yeni Kanal Adı", value: `${newChannel.name}`, inline: false },
      { name: "Yeni Kanal Tipi", value: `${String(newChannel.type)
      .replace(0,"Yazı Kanalı")
      .replace(2,"Ses Kanalı")
      .replace(4,"Kategori")
      .replace(5,"Duyuru Kanalı")
      .replace(11,"Herkese Açık Alt Başlık Kanalı")
      .replace(13,"Sahne Kanalı")
      .replace(14,"Rehber Kanalı")
      .replace(15,"Forum Kanalı")
    }`
      , inline: true },
      { name: "Güncellenme Tarihi", value: `<t:${parseInt(new Date() / 1000)}:R>`, inline: true },
      { name:"NSFW",value:`${newChannel.nsfw ? "✅・Açık" : "❌・Kapalı"}`,inline:true},
    ])

    .setColor("#000001")
    .setFooter({text:`${oldChannel.guild.name}`})
    .setTimestamp()
    
    client.channels.cache.get(kanal).send({embeds:[embed]})

}