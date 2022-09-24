const {EmbedBuilder} = require('discord.js');
const db = require('orio.db')
module.exports = async (client,channel,member) => {
    
    let kanal = db.fetch(`modlog_${channel.guild.id}`)
    if(!kanal) return;
    //await channel.guild.fetchAuditLogs({ type: 'CHANNEL_DELETE' }).then(audit => audit.entries.first())
  
    const embed = new EmbedBuilder()
    .setColor("#000001")
    .setTitle("Kanal Silindi!!")
    .setDescription(`
    
    Kanal İd : **${channel.id}**
    Kanal İsmi : **${channel.name}**
-    `)
    client.channels.cache.get(kanal).send({embeds:[embed]})
}