const Discord = require("discord.js");
const db = require('orio.db');

module.exports = {
  config: {
    name: "cmute",
    aliases: [],
    description: ".cmute @ozbi 5m Belirtilen kişiye Chat Mute Atar.",
    kategori: "Moderasyon" 

},

    run: async(client, message, args) => {
  if(!message.member.roles.cache.has(db.fetch(`mute_yetkilirol_${message.guild.id}`)) &&!message.member.permissions.has('ADMINISTRATOR')) return message.reply(`Bu Komudu sadece ayarlanan **Mute Yetkilisi** rolü olan kişiler kullanabilir.`)
      let kontrolkanal = db.fetch(`mute_kanal_${message.guild.id}`)
    
      const guildMember = message.mentions.members.first()
        if (args[0] == "kaldır") {
        if (!guildMember) return message.channel.send("Lütfen mutelenecek üyeyi etiketleyin.")
        guildMember.timeout(null).catch(console.error);
         message.channel.send(`${guildMember} kullanıcısı **0sn** süresi boyunca zaman aşımına uğratıldı.`)
       } else {
        if (!guildMember) return message.channel.send("Lütfen mutelenecek üyeyi etiketleyin.")
        var timeoutTime = args[1]
        if (timeoutTime == "60sn") timeoutTime = 60000
        if (timeoutTime == "5m") timeoutTime = 300000
        if (timeoutTime == "10m") timeoutTime = 600000
        if (timeoutTime == "1s") timeoutTime = 3600000
        if (timeoutTime == "1g") timeoutTime = 86400000
        if (timeoutTime == "1h") timeoutTime = 604800016
        if (!timeoutTime || !["60sn","5m","10m","1s","1g","1h"].includes(args[1])) timeoutTime = 60000
        guildMember.timeout(timeoutTime, args[2] ? `${args.slice(2).join(" ")} - ${message.author.tag}` : "No reason.").catch(console.error);
        message.channel.send(`${guildMember} kullanıcısı **${["60sn","5m","10m","1s","1g","1h"].includes(args[1]) ? args[1] : "60sn"}** süresi boyunca zaman aşımına uğratıldı.`)
        client.channels.cache.get(kontrolkanal).send(`${guildMember} kullanıcısı **${["60sn","5m","10m","1s","1g","1h"].includes(args[1]) ? args[1] : "60sn"}** süresi boyunca zaman aşımına uğratıldı.`)
 
      }
},
}