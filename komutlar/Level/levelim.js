const { EmbedBuilder ,AttachmentBuilder } = require('discord.js');
const canvacord  = require("canvacord");
const db = require('orio.db')


module.exports = {
    config:{
    name: "levelim",
    description: "Kaç level olduğunuzu kontrol edersiniz.",
    aliases: ["me", "level", "lvl"],
    kategori: "level",
    usage: "",
    },
    run: async(client, message, args) => {
        var user = message.mentions.users.first() || message.author;
        var id = message.author.id
        var gid = message.guild.id;
        let lvlmesaj = db.fetch(`xp_level_${gid}`)
        var xp = db.fetch(`xp_${id}_${gid}`)
        var lvl = db.fetch(`lvl_${id}_${gid}`)
        let u = message.mentions.users.first() || message.author;
        if(u.bot === true) { message.channel.send({embeds: [new EmbedBuilder()
        .setDescription("Botların seviyesi bulunmamaktadır!")
        .setColor("RANDOM") ]})}
    const card = "https://cdn.discordapp.com/attachments/1013123143692460142/1018212444079923350/unknown.png"
    const rank = new canvacord.Rank()
    .setAvatar(`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=2048`)
    .setCurrentXP(Number(xp))
    .setLevel(Number(lvl))
    .setRequiredXP(Number(lvlmesaj))
    .setStatus("dnd")
    .setProgressBar("#000001", "COLOR")
    .setUsername(message.author.tag)
    .setRankColor('transparent', 'transparent')
    .setBackground('IMAGE',`${card ? card : 'https://cdn.discordapp.com/attachments/1013123143692460142/1018212444079923350/unknown.png'}`)
    .setDiscriminator(message.author.discriminator);
  

rank.build()
    .then(data => {
        const attachment = new AttachmentBuilder(data, "RankCard.png");
        message.channel.send({content:`${message.author} isimli kişinin leveli`,files:[attachment]})
    })
},


}
