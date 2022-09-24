const { EmbedBuilder  , PermissionsBitField}= require('discord.js')
const db = require("orio.db");

module.exports = {
  config: {
      name: "küfürengel",
      aliases: ["küfür-engel","küfürfiltre","küfür-filtre"],
      description: "Küfür Engel Sistemini Açar|Kapatırsınız.",
      kategori: "Admin"

  },
  run: async (client, message, args) => {
    let dil = await db.get(`dil_${message.author.id}`)
    if(dil === "english") {     
      if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply({content: `You must have **ADMIN** privilege to use this command.`})
    if (!args[0]) return message.channel.send({embeds:[
         new EmbedBuilder()
           .setColor("#ff0000")
           .setTimestamp()
           .setDescription(`To Set the Profanity Filter \`.küfür-engel open\` | If you want to turn it off, you can write \`.küfür-engel close\``)]})     
if (args[0] !== 'open' && args[0] !== 'close') return message.channel.send({embeds:[
             new EmbedBuilder()
             .setColor("#ff0000")
             .setTimestamp()
             .setDescription(`Please write **open** or **close**!`)]})

if(args[0] === 'open') {
 let acikmi = await db.fetch(`${message.guild.id}.kufur`)
 if(acikmi == "acik") return message.channel.send({embeds:[
   new EmbedBuilder()
             .setColor("#ff0000")
             .setTimestamp()
             .setDescription('The Profanity Filter is already on!')]})
 db.set(`${message.guild.id}.kufur`, 'acik')
 message.channel.send({embeds:[
           new EmbedBuilder()
           .setColor("#ff0000")
           .setTimestamp()
           .setDescription('The curse filter has been activated successfully.')]})

}

if (args[0] === 'close') {
 if(db.has(`${message.guild.id}.kufur`)){
 db.delete(`${message.guild.id}.kufur`, 'acik')
message.channel.send({embeds:[
           new EmbedBuilder()
           .setColor("#ff0000")
           .setTimestamp()
           .setDescription(`I have successfully turned off the Profanity Filter.`)]})
} else return message.channel.send({embeds:[
new EmbedBuilder()
.setColor("#ff0000")
.setTimestamp()
.setDescription(`The Profanity Filter is not already set!`)]})
}  
}
else{
    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply({content: `Bu Komutu Kullanabilmeniz İçin **ADMİN** Yetkisine Sahip Olmanız Gerekmektedir.`})
       if (!args[0]) return message.channel.send({embeds:[
            new EmbedBuilder()
              .setColor("#ff0000")
              .setTimestamp()
              .setDescription(`Küfür Filtresini Ayarlamak İçin \`.küfür-engel aç\` | Kapatmak İstiyorsanız \`.küfür-engel kapat\` Yazabilirsiniz`)]})     
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send({embeds:[
                new EmbedBuilder()
                .setColor("#ff0000")
                .setTimestamp()
                .setDescription(`Lüten **aç** ya da **kapat** Yazın!`)]})
  
  if(args[0] === 'aç') {
    let acikmi = await db.fetch(`${message.guild.id}.kufur`)
    if(acikmi == "acik") return message.channel.send({embeds:[
      new EmbedBuilder()
                .setColor("#ff0000")
                .setTimestamp()
                .setDescription('Küfür Filtresi zaten açık ki!')]})
    db.set(`${message.guild.id}.kufur`, 'acik')
    message.channel.send({embeds:[
              new EmbedBuilder()
              .setColor("#ff0000")
              .setTimestamp()
              .setDescription('Küfür filtresi Başarılı Şekilde Aktif Edildi.')]})

}

  if (args[0] === 'kapat') {
    if(db.has(`${message.guild.id}.kufur`)){
    db.delete(`${message.guild.id}.kufur`, 'acik')
  message.channel.send({embeds:[
              new EmbedBuilder()
              .setColor("#ff0000")
              .setTimestamp()
              .setDescription(`Küfür Filtresini başarıyla Kapattım.`)]})
} else return message.channel.send({embeds:[
  new EmbedBuilder()
  .setColor("#ff0000")
  .setTimestamp()
  .setDescription(`Küfür Filtresi zaten ayarlanmamış!`)]})
  }  
  }
}
}
