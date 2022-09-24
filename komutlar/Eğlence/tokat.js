const Discord = require("discord.js");
module.exports = {
    config: {
        name: "tokatat",
        aliases: [],
        description: "Belirtilen Kişiye Tokat Atarsınız.",
        kategori: "Eğlence"
  
    },
    run: async (client, message, args) => {


let user = message.mentions.users.first();

if (message.mentions.users.size < 1)
return message

      .reply({ content: "**Kimi tokatlayacağımı etiketle de vurayım ağzının ortasına!**" })
      .catch(console.error);

const EmbedFwhyCode = new Discord.EmbedBuilder
()

    .setColor("0x808080")
    .setDescription(
      message.author.username + ` ${user}` + "** adlı kişiyi, Tokatladı! 🖐️ **")
.setImage("https://media0.giphy.com/media/deKWTyMOYLkje/giphy.gif")
    .setFooter({ text: client.botunadı, iconURL: client.user.avatarURL() });

message.channel.send({embeds: [EmbedFwhyCode]});

},
}