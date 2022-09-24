const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    config: {
        name: "invite",
        aliases: [],
        kategori: "Kullanıcı",
        description: "Botun Davet Linkleri Vs.",
    },
    run: async (client, message, args) => {
        const embed = new EmbedBuilder()
        .setColor("#000001")
        .setAuthor({ name: "Davet!"})
        .setDescription("```Aşağıdaki Butonlardan Beni Sunucuna Davet Edebilirsin , Destek Sunucuma Gelebilirsin Veya Oy Verebilirsin.!```")
        .setTimestamp()
        .setFooter({ text: `${message.author.tag} Tarafından Kullanıldı.`, iconURL: message.author.displayAvatarURL()});

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()

                    .setLabel("Davet Linkim")
                    .setURL(`https://discord.com/api/oauth2/authorize?client_id=981562634077880360&permissions=8&scope=bot%20applications.commands`)
                    .setEmoji("🔗")
                    .setStyle(ButtonStyle.Link)
            )
            .addComponents(
                new ButtonBuilder()
                    .setLabel("Oy")
                    .setURL(`https://top.gg/bot/981562634077880360/vote`)
                    .setEmoji("🔗")
                    .setStyle(ButtonStyle.Link)
            )
            .addComponents(
                new ButtonBuilder()
                    .setLabel("Destek Sunucum")
                    .setURL(`https://discord.gg/GyPc8mNdGP`)
                    .setEmoji("🔗")
                    .setStyle(ButtonStyle.Link)
            )
        
        message.channel.send({ embeds: [embed], components: [row] });
    }
}

