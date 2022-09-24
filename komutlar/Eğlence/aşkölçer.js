const { DiscordTogether } = require('discord-together');

module.exports = {
    config: {
        name: "aşkölçer",
        aliases: [],
        description: "Birini Etiketle",
        kategori: "Eğlence"
  
    },
    run: async (client, message, args) => {
    let ks = message.mentions.users.first()
    if(!ks) return message.channel.send("Birini etiketle")
    var r = [":heart: Azıcıkta olsa seviyor",":heart: Sana tutulmuş",":broken_heart: Malesef seni sevmiyor",":heartpulse: Bişiler hissediyor",":heartbeat: Ne yaptı büyü filanmı ?"]
    let rs = r[Math.floor(Math.random()*r.length)]
   return message.channel.send(`${ks} ${rs}`)
},
}