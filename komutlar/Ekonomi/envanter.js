const {EmbedBuilder} = require("discord.js");
const db = require('orio.db');

module.exports = {
    config:{
        name: "envanter",
        description: "Eşyalarınızı kontrol edersiniz.",
        aliases: [],
         kategori: "Ekonomi",
    },
    run: async(client,message,args) => {

let kazma = db.fetch(`kazma_${message.author.id}`)
let balta = db.fetch(`balta_${message.author.id}`)
let elmas = db.fetch(`elmas_${message.author.id}`)
let altın = db.fetch(`altın_${message.author.id}`)
let demir = db.fetch(`demir_${message.author.id}`)
let kömür = db.fetch(`kömür_${message.author.id}`)
let odun = db.fetch(`odun_${message.author.id}`)
let doktor = db.fetch(`doktor_${message.author.id}`)
let Medikit = db.fetch(`medikit_${message.author.id}`)
let Tornavida = db.fetch(`tornavida_${message.author.id}`)
let motor = db.fetch(`motor_${message.author.id}`)
let araba = db.fetch(`araba_${message.author.id}`)
let radyo = db.fetch(`Radyo${message.author.id}`)

const embed = new EmbedBuilder()

.setAuthor({name:`EŞYALARINIZ`})

.addFields({name:`Kazma`, value:`**${kazma? kazma: 0}**`,inline:true})
.addFields({name:`Balta`,value: `**${balta ? balta: 0}**` , inline:true})
.addFields({name:`Elmas`, value:`**${elmas ? elmas: 0}**`,inline:true})
.addFields({name:`Altın`, value:`**${altın ? altın: 0}**`,inline:true})
.addFields({name:`Demir`,value: `**${demir ? demir: 0}**`,inline:true})
.addFields({name:`Kömür`, value:`**${kömür ? kömür: 0}**`,inline:true})
.addFields({name:`Odun`, value:`**${odun ? odun: 0}**`,inline:true})
.addFields({name:`Doktor`, value:`**${doktor ? doktor: 0}**`,inline:true})
.addFields({name:`Medikit`,value: `**${Medikit ? Medikit: 0}**`,inline:true})
.addFields({name:`Tornavida`,value: `**${Tornavida ? Tornavida: 0}**`,inline:true})
.addFields({name:`Motor`, value:`**${motor ? motor: 0}**`,inline:true})
.addFields({name:`Araba`, value:`**${araba ? araba: 0}**`,inline:true})
.addFields({name:`Radyo`, value:`**${radyo ? radyo: 0}**`,inline:true})
.setColor('#000001')
.setFooter({text:client.botunadı})
message.reply({embeds:[embed]})
},

}