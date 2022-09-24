const {PermissionsBitField,EmbedBuilder}= require('discord.js');
const db = require("orio.db");

module.exports = {
    config: {
        name: "reklamengel",
        aliases: ["reklamfiltre","reklam-engel","reklam-filtre"],
        description: "Reklam Engel Sistemini Açar|Kapatırsınız.",
        kategori: "Admin"
  
    },
    run: async (client, message, args) => {
      let dil = await db.get(`dil_${message.author.id}`)
      if(dil === "english") { 
        if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply({content: `You Must Have **ADMIN** Authorization to Use This Command.`})
        if (!args[0]) return message.channel.send({embeds:[
    new EmbedBuilder()
              .setColor("#ff0000")
              .setTimestamp()
              .setDescription(`To Set Ad Filter \`.reklam-engel open\` | If you want to turn it off, you can write \`.reklam-engel off\``)]})     
  if (args[0] !== 'open' && args[0] !== 'off') return message.channel.send({embeds:[
                new EmbedBuilder()
                .setColor("#ff0000")
                .setTimestamp()
                .setDescription(`Please write **open** or **close**!`)]})
    
                if (args[0] == 'open') {
     let acikmi = await db.fetch(`reklamFiltre_${message.guild.id}`)
    if(acikmi == "acik") return message.channel.send({embeds:[
      new EmbedBuilder()
                .setColor("#ff0000")
                .setTimestamp()
                .setDescription('Ad Filter is already on!')]})
     db.set(`reklamFiltre_${message.guild.id}`, 'acik')
  message.channel.send({embeds:[
    new EmbedBuilder()
              .setColor("#ff0000")
              .setTimestamp()
              .setDescription('Ad Filter successfully opened.')]})

  }

  if (args[0] === 'off') {
    if(db.has(`reklamFiltre_${message.guild.id}`)){
    db.delete(`reklamFiltre_${message.guild.id}`, `acik`)
  message.channel.send({embeds:[
              new EmbedBuilder()
              .setColor("#ff0000")
              .setTimestamp()
              .setDescription(`I have successfully disabled the Reklam-Engel system.`)]})
} else return message.channel.send({embeds:[
  new EmbedBuilder()
  .setColor("#ff0000")
  .setTimestamp()
  .setDescription(`Reklam-Engel system not already set!`)]})
  }
  
      }  

else{

  if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply({content: `Bu Komutu Kullanabilmeniz İçin **ADMİN** Yetkisine Sahip Olmanız Gerekmektedir.`})
  if (!args[0]) return message.channel.send({embeds:[
new EmbedBuilder()
        .setColor("#ff0000")
        .setTimestamp()
        .setDescription(`Reklam Filtresini Ayarlamak İçin \`.reklam-engel aç\` | Kapatmak İstiyorsanız \`.reklam-engel kapat\` Yazabilirsiniz`)]})     
if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send({embeds:[
          new EmbedBuilder()
          .setColor("#ff0000")
          .setTimestamp()
          .setDescription(`Lüten **aç** ya da **kapat** Yazın!`)]})

          if (args[0] == 'aç') {
let acikmi = await db.fetch(`reklamFiltre_${message.guild.id}`)
if(acikmi == "acik") return message.channel.send({embeds:[
new EmbedBuilder()
          .setColor("#ff0000")
          .setTimestamp()
          .setDescription('Reklam Filtresi zaten açık ki!')]})
db.set(`reklamFiltre_${message.guild.id}`, 'acik')
message.channel.send({embeds:[
new EmbedBuilder()
        .setColor("#ff0000")
        .setTimestamp()
        .setDescription('Reklam Filtresi başarıyla açıldı.')]})

}

if (args[0] === 'kapat') {
if(db.has(`reklamFiltre_${message.guild.id}`)){
db.delete(`reklamFiltre_${message.guild.id}`, `acik`)
message.channel.send({embeds:[
        new EmbedBuilder()
        .setColor("#ff0000")
        .setTimestamp()
        .setDescription(`Link-Engel sistemini başarıyla Kapattım.`)]})
} else return message.channel.send({embeds:[
new EmbedBuilder()
.setColor("#ff0000")
.setTimestamp()
.setDescription(`Link-Engel sistemi zaten ayarlanmamış!`)]})

}}},}