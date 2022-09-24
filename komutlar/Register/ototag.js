const {EmbedBuilder , PermissionsBitField} = require('discord.js')
const db = require('orio.db')
module.exports = {
  config: {
      name: "ototag",
      aliases: [],
      description: "Ototag Sistemini ayarlayıp / kapatırsınız.",
      kategori: "Register"

  },
  run: async (client, message, args) => {

    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply({content: `Bu Komutu Kullanabilmeniz İçin **ADMİN** Yetkisine Sahip Olmanız Gerekmektedir.`})
    if (!args[0]) return message.channel.send({embeds:[
      new EmbedBuilder()
        .setColor("#ff0000")
        .setTimestamp()
        .setDescription(`.ototag ayarla tagınız. kapatmak için .ototag sıfırla`)]})     

    if (args[0] === 'ayarla') {
        let tag = args.slice(1).join(' ');
  if (!tag) return message.channel.send('.ototag ayarla tagınız. kapatmak için .ototag sıfırla')
  db.set(`tags_${message.guild.id}`, tag)
  message.channel.send('Tag başarıyla `'+ tag +'` olarak ayarlandı!')
}
  if (args[0] === 'sıfırla') {
    if(db.has(`tags_${message.guild.id}`)){
    db.delete(`tags_${message.guild.id}`)
  message.channel.send({embeds:[
              new EmbedBuilder()
              .setColor("#000001")
              .setTimestamp()
              .setDescription(`Ototag Başarıyla Kapatıldı.`)]})
} else return message.channel.send({embeds:[
  new EmbedBuilder()
  .setColor("#000001")
  .setTimestamp()
  .setDescription(`Ototag Zaten Ayarlanmamıştı!`)]})
  }   
}
}