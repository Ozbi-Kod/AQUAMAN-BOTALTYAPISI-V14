const { EmbedBuilder } = require('discord.js')
const db = require('orio.db');
module.exports = async (client, emoji) => {
    let kanal = db.fetch(`modlog_${emoji.guild.id}`)
    if(!kanal) return;
    let user = await emoji.guild.fetchAuditLogs({ type: 'EMOJİ_DELETE' }).then(audit => audit.entries.first())
  
    const embed = new EmbedBuilder()
    .setColor("#000001")
    .setTitle("Emoji Silindi")
    .setDescription(`
    
    Emoji İd : **${emoji.id}**
    Emoji İsmi : **${emoji.name}**
    `)
    client.channels.cache.get(kanal).send({embeds:[embed]})
}