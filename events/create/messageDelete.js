const {PermissionsBitField,EmbedBuilder} = require('discord.js')
const db = require('orio.db')
module.exports = async (client,message) => { 
   
    const kanal = db.fetch(`modlog_${message.guild.id}`)

    if(!kanal) return;

    let user = message.member    
    const embed = new EmbedBuilder()
    .setAuthor({name:message.member.user.tag,iconURL: message.member.user.avatarURL()})
    .setDescription(`**${message.member.tag} Tarafından ${message.channel} Kanalına Gönderilen Mesaj Silindi**`)
    .addFields({name:"Mesaj İçeriği",value:`\`\`\`${message.content}\`\`\``,inline:false})
    .setColor("#000001")
    .setFooter({text:`${message.guild.name}`})
    .setTimestamp()
    message.guild.channels.cache.get(kanal).send({embeds:[embed]})
}