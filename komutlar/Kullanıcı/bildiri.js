const {EmbedBuilder} = require("discord.js");
module.exports = {
    config: {
        name: "bildiri",
        aliases: ["şikayet","öneri"],
        kategori: "Kullanıcı",
        description: "Botumuza Öneri Yapabilir Veya Şikayet Bildirebilirsiniz.",
    },
    run: async (client, message,args) => {
 let mesaj = args.slice(0).join(" ")
if (!mesaj) return message.channel.send("Lütfen önerini yaz!")   
  const embed = new EmbedBuilder()
  .setTitle(client.botunadı)
  .setDescription(`Öneren: ${message.author}\n\nÖneri: ${mesaj}`)
  .setColor("#007fff")
  client.channels.cache.get(client.bildirilog).send({embeds : [embed]})
}
}