const { EmbedBuilder } = require("discord.js");

module.exports = async (client, queue) => {
    const embed = new EmbedBuilder()
        .setDescription(`\`📛\` | **Şarkı sonlandırılmıştır**`)
        .setColor('#000001')

    queue.textChannel.send({ embeds: [embed] })
}

