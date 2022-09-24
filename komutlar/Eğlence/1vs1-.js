const { EmbedBuilder } = require('discord.js');
module.exports = {
    config: {
        name: "1vs1",
        aliases: [],
        description: "Belirtilen kişiyle vs atarsınız",
        kategori: "Eğlence"
  
    },
    run: async (client, message, args) => {

    let user = message.mentions.users.first()
    if (message.mentions.users.size < 2) return message.channel.send({ embeds:[
        new EmbedBuilder()
        .setColor('#000001')
        .setTitle('5v5')
        .setDescription(message.author.tag + ', kullanım: .1vs1 <@kullanıcı> <@kullanıcı> .')
        .setTimestamp()
    ]})

    var sans = ["10'a","1'e","20'ye","30'a"]
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
      message.channel.send({ embeds: [
          new EmbedBuilder()
          .setColor('#000001')
          .setTitle('1vs1')
          .setDescription('Savaş başladı!')
          .setFooter({ text: 'Rahatsızların  Savaşı yapılıyor.', iconURL: client.user.avatarURL() })
          .setTimestamp()
      ]})

      .then(nmsg => nmsg.edit({ embeds: [new EmbedBuilder().setColor('#000001').setTitle('1vs1').setDescription('Savaşılıyor Pat Küt.').setFooter({ name: 'Profesyönellerin  Savaşı yapılıyor.', iconURL: client.user.avatarURL }).setTimestamp()]}))
      .then(nmsg => nmsg.edit({ embeds: [new EmbedBuilder().setColor('#000001').setTitle('1vs1').setDescription('Savaşılıyor Pat Küp.').setFooter({ name: 'Profesyönellerin  Savaşı yapılıyor.', iconURL: client.user.avatarURL }).setTimestamp()]}))
      .then(nmsg => nmsg.edit({ embeds: [new EmbedBuilder().setColor('#000001').setTitle('1vs1').setDescription('Savaşılıyor Pat küt.').setFooter({ name: 'Profesyönellerin  Savaşı yapılıyor.', iconURL: client.user.avatarURL }).setTimestamp()]}))
      .then(nmsg => nmsg.edit({ embeds: [new EmbedBuilder().setColor('#000001').setTitle('1vs1').setDescription('Savaş Sonuçlanıyor.').setFooter({ name: 'Profesyönellerin  Savaşı yapılıyor.', iconURL: client.user.avatarURL }).setTimestamp()]}))
      .then(nmsg => nmsg.edit({ embeds: [new EmbedBuilder().setColor('#000001').setTitle('1vs1').setDescription('Savaş bitti!').setFooter({ name: 'Profesyönellerin  Savaşı yapılıyor.', iconURL: client.user.avatarURL }).setTimestamp()]}))
      .then(nmsg => nmsg.edit({ embeds: [new EmbedBuilder().setColor('#000001').setTitle('1vs1').setDescription('Savaşın Galibi: **' + user.tag+'** Helal olsun sana Ne Vurdun Be Adımın Canını 100 den **'+ sonuc +'** Kadar Düşürdün Ve Adam Pes Etti.').setImage("https://media1.giphy.com/media/6fReqjdbFYXJu/giphy.gif").setFooter({ name: 'Rahatsızların  Savaşı yapıldı.', iconURL: client.user.avatarURL }).setTimestamp()]}))
    

    },
}