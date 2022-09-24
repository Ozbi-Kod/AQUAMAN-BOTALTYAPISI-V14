const {EmbedBuilder , PermissionsBitField} = require('discord.js')
const db = require('orio.db')
module.exports = {
  config: {
      name: "otoisim",
      aliases: [],
      description: "Oto İsim Sistemini ayarlayıp / kapatırsınız.",
      kategori: "Register"

  },
  run: async (client, message, args) => {

    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply({content: `Bu Komutu Kullanabilmeniz İçin **ADMİN** Yetkisine Sahip Olmanız Gerekmektedir.`})
    if (!args[0]) return message.channel.send({embeds:[
        new EmbedBuilder()
          .setColor("#ff0000")
          .setTimestamp()
          .setDescription(`.otoisim ayarla isim. kapatmak için .otoisim sıfırla`)]})     
  
    if (args[0] === 'ayarla') {
        let otoisim = args.slice(1).join(' ');
  if (!otoisim) return message.channel.send('.otoisim ayarla isim. kapatmak için .otoisim sıfırla')
  db.set(`otoisim_${message.guild.id}`, otoisim)
  message.channel.send('Oto İsim Başarıyla `'+ otoisim +'` Olarak Ayarlandı!')
}
  if (args[0] === 'sıfırla') {
    if(db.has(`otoisim_${message.guild.id}`)){
    db.delete(`otoisim_${message.guild.id}`)
  message.channel.send({embeds:[
              new EmbedBuilder()
              .setColor("#000001")
              .setTimestamp()
              .setDescription(`Oto İsim Sistemi Başarıyla Kapatıldı.`)]})
} else return message.channel.send({embeds:[
  new EmbedBuilder()
  .setColor("#000001")
  .setTimestamp()
  .setDescription(`Oto İsim Zaten Ayarlanmamıştı!`)]})
  }   
}
}