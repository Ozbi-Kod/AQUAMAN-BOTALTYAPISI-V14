const { EmbedBuilder } = require('discord.js');
const db = require('orio.db')
module.exports = async (client,channel,message) => {
    let kanal = db.fetch(`modlog_${channel.guild.id}`)
    if(!kanal) return;

    const embed = new EmbedBuilder()
    .setColor("#000001")
    .setTitle("Kanal Oluşturuldu")
    .setDescription(`
    
    Kanal İd : **${channel.id}**
    Kanal İsmi : **${channel.name}**
    `)
    client.channels.cache.get(kanal).send({embeds:[embed]})
  
}