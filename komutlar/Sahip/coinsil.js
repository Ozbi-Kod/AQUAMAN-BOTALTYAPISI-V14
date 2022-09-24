const { EmbedBuilder } = require("discord.js");
const db = require("quick.db");

module.exports = {
    config : {

        name: 'coin-sil',
        description: "Belirtilen kişiye coin silersiniz.",
        aliases: [],
        kategori: "sahip",
        usage: "",

    },
    run: async(client, message, args) => {
		if(message.author.id !== sahip.sahip) return;{
        if (!args[0]) return message.channel.send("**Lütfen bir kullanıcı adı seçin**")

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!user) return message.channel.send("**Lütfen birisini belirtsiniz**")
        if (!args[1]) return message.channel.send("**Lütfen miktar giriniz**")
        let bal = db.fetch(`coın_${user.id}`)
        if (isNaN(args[1])) return message.channel.send(`**❌ Tutarınızı belirtiniz**`);
        if ((args[1]) > db.fetch(`coın_${user.id}`)) return message.channel.send(`Maalesef <@${user.id}> Kişinin Okadar Parası Yok! Cüzdanı:` + bal)
        else{
        db.add(`coın_${user.id}`, -args[1])
        } 

        let paraEmbed = new EmbedBuilder()
            .setColor("#000001")
            .setDescription(`✅ Daha fazla ${args[1]} coin hesabından silindi \n\nBanka: ${bal}`);     
               message.channel.send({embeds: [paraEmbed]})
        }
    },
   
    }