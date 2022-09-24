const { EmbedBuilder } = require("discord.js");
const db = require('orio.db');


module.exports = {
    config:{
        name: 'coin-ekle',
        description: "Belirtilen Kişiye Coin Eklersiniz.",
        aliases: [],
        kategori: "sahip",
        usage: "",
    },
    run: async(client, message, args) => {
		if(message.author.id !== client.sahip) return;
        {
            if (!args[0]) return message.channel.send("**Lütfen bir kullanıcı adı seçin**")

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!user) return message.channel.send("**Lütfen birisini belirtsiniz**")
        if (!args[1]) return message.channel.send("**Lütfen miktar giriniz**")
        if (isNaN(args[1])) return message.channel.send(`**❌ Tutarınızı belirtiniz**`);
        if (args[0] > 10000) return message.channel.send("**Yalnızca 10000'den az coin ekleyebilirsiniz**")
        db.add(`coın_${user.id}`, +args[1])
        let bal = db.fetch(`coın_${user.id}`)

        let paraEmbed = new EmbedBuilder()
            .setColor("#000001")
            .setDescription(`✅ Daha fazla ${args[1]} coin almayı bitirdiniz \n\nBanka: ${bal}`);     
               message.channel.send({embeds: [paraEmbed]})
        }
    },
 
    }