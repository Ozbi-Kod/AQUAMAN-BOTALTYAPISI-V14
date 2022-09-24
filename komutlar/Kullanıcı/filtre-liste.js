const { EmbedBuilder } = require("discord.js");
const db = require('orio.db')
module.exports = {
    config: {
        name: "filtre-liste",
        aliases: ["fl"],
        usage: "(komut)",
        kategori: "Kullanıcı",
        description: "Botun sahip olduğu tüm filtreleri görüntüler.",
    },
    run: async (client, message) => {
        let dil = await db.get(`dil_${message.author.id}`)
        if(dil === "english") {
            const msg = await message.channel.send("Loading...");
            const embed = new EmbedBuilder()
                .setColor('#FD0A0A')
                .setAuthor({ name: `Filters`, iconURL: message.guild.iconURL({ dynamic: true })})
                .setDescription(`\`${client.prefix}3d\`\n\`${client.prefix}bassboost\`\n\`${client.prefix}echo\`\n\`${client.prefix}speedup\`\n\`${client.prefix}slowed\`\n\`${client.prefix}reverse\`\n\`${client.prefix}surround\``)
                .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 2048 }))
                .setFooter({ text: `Example Usage: ${client.prefix}filter bassboost` })
                .setTimestamp()
    
                msg.edit({ content: ' ', embeds: [embed] })
    
        }
        else{
        const msg = await message.channel.send("Yükleniyor...");
        const embed = new EmbedBuilder()
            .setColor('#FD0A0A')
            .setAuthor({ name: `Filtreler`, iconURL: message.guild.iconURL({ dynamic: true })})
            .setDescription(`\`${client.prefix}3d\`\n\`${client.prefix}bassboost\`\n\`${client.prefix}echo\`\n\`${client.prefix}speedup\`\n\`${client.prefix}slowed\`\n\`${client.prefix}reverse\`\n\`${client.prefix}surround\``)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 2048 }))
            .setFooter({ text: `Örnek Kullanım: ${client.prefix}filtre bassboost` })
            .setTimestamp()

            msg.edit({ content: ' ', embeds: [embed] })
}
        }
    
}; 

