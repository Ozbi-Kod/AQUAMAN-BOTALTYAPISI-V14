const {PermissionsBitField} = require("discord.js");

module.exports = {
config:{
  name: "nuke",
  description: "Belirlenen kanalı sıfırlarsın",
  aliases: [],
  kategori: "Admin",
  usage: "",

},
    run: async(client, message, args) => {
      let dil = await db.get(`dil_${message.author.id}`)
      if(dil === "english") {     
          if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply({content: `You Must Have **ADMIN** Authorization to Use This Command.`})


      message.channel.clone().then(channel => {
      channel.setPosition(message.channel.position)
      channel.send("https://cdn.discordapp.com/attachments/927885582221312010/927887159787139092/hidrojen-bombasi_1786815.gif")
      channel.send(`Channel Reset Successfully.`)
      })
      message.channel.delete() }       
else{      if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply({content: `Bu Komutu Kullanabilmeniz İçin **ADMİN** Yetkisine Sahip Olmanız Gerekmektedir.`})


message.channel.clone().then(channel => {
channel.setPosition(message.channel.position)
channel.send("https://cdn.discordapp.com/attachments/927885582221312010/927887159787139092/hidrojen-bombasi_1786815.gif")
channel.send(`Kanal Başarılı bir şekilde sıfırlandı.`)
})
message.channel.delete()}

},
}
