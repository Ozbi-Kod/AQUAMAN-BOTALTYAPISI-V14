const Discord = require("discord.js");
const {ActionRowBuilder, ButtonBuilder , EmbedBuilder} = require("discord.js")
const ms = require("ms")
const db = require('orio.db');

module.exports = {
config:{
    name: "vmute",
    description: "Belirlenen kişiye ses mute atar.",
    aliases: [],
    kategori: "Moderasyon",
    usage: "",

},
    run: async(client, message, args) => {
    let kontrol = db.fetch(`mute_rol_${message.guild.id}`)
    let kontrolkanal = db.fetch(`mute_kanal_${message.guild.id}`)
    let kontrolmuteytkrol = db.fetch(`mute_yetkilirol_${message.guild.id}`)
    
    
    if(!kontrol) return message.reply(`Ses Mute Rolü Ayarlanmamış. Ayarlamak için **${client.prefix}mute ayar rol @mute**`)
    if(!kontrolkanal) return message.reply(`Mute Log Ayarlanmamış. Ayarlamak için **${client.prefix}mute ayar log #kanal**`)
    if(!kontrolmuteytkrol) return message.reply(`Mute Yetkilisi Rolünü Ayarlayınız. Ayarlamak için **${client.prefix}mute ayar mute-yetkilisi @yetkili** `)
    
    
if(!message.member.roles.cache.has(db.fetch(`mute_yetkilirol_${message.guild.id}`))&&!message.member.permissions.has(Discord.PermissionsBitField.Flags.Administrator)) return message.reply(`Bu Komudu sadece ayarlanan **Mute Yetkilisi** rolü olan kişiler kullanabilir.`)

    let user = message.mentions.users.first();


    if(!user) return message.reply(`lütfen bir kişi etiketleyiniz`)

let mutesebep = args[1]



const butonlar = new ActionRowBuilder()
.addComponents(
    new ButtonBuilder()
    .setCustomId('mute_red')
    .setLabel('İptal')
    .setStyle('DANGER'),
    new ButtonBuilder()
        .setCustomId('mute_onay')
        .setLabel('Onayla')
        .setStyle('SUCCESS'),
      

);

const muteembed = new EmbedBuilder()
.setDescription(`
${user}, isimli kişiye ses mute atmak istiyormusunz mute sebebi ${mutesebep ? mutesebep : "YOK"}
`)


    message.reply({embeds:[muteembed] , components: [butonlar] }).then(async function(mesaj) {

    
        mesaj.createMessageComponentCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {


if(button.user.id !== message.author.id) return message.channel.send({ content: "Lütfen başkasının panelindeki butona erişmeye çalışmayın", ephemeral: true})
let üye = message.guild.members.cache.get(user.id)
if(button.customId === "mute_onay"){

    let muterol = db.fetch(`mute_rol_${message.guild.id}`)
    let kontrolkanal = db.fetch(`mute_kanal_${message.guild.id}`)
    let kontrolmuteytkrol = db.fetch(`mute_yetkilirol_${message.guild.id}`)
    
    üye.roles.add([ muterol ])
message.channel.send(`Başarılı bir şekilde ${user} isimli kişiye ses mute atıldı.`)
client.channels.cache.get(kontrolkanal).send(`${user} isimli kişiye mute atıldı.`)
}

if(button.customId ===  "mute_red"){
    message.channel.send(`Başarılı bir şekilde mute iptal edildi.`)
}
})
    }) 
    
},


}