const { EmbedBuilder } = require('discord.js')
const db = require('orio.db');
module.exports = async (client,oldEmoji,newEmoji) => {
    let kanal = db.fetch(`modlog_${oldEmoji.guild.id}`)
        if(!kanal) return;
        let user = await oldEmoji.guild.fetchAuditLogs({ type: 'UPDATE_EMOJİ' }).then(audit => audit.entries.first())
      
        const embed = new EmbedBuilder()
        .setColor("#000001")
        .setTitle("Emoji Güncellendi")
        .setDescription(`
        
        Emoji İd : **${oldEmoji.id}**
        Eski Emoji İsmi : **${oldEmoji.name}**
        Yeni Emoji İsmi : **${newEmoji.name}**
        `)
        client.channels.cache.get(kanal).send({embeds:[embed]})
      

}