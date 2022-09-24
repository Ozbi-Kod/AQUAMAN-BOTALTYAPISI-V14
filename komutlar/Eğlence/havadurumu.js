const { EmbedBuilder } = require('discord.js');
const weather = require('weather-js');

module.exports = {
  config: {
      name: "havadurumu",
      aliases: [],
      description: "hava durumunu öğrenirsiniz.",
      kategori: "Eğlence"

  },
  run: async (client, message, args) => {

  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (result === undefined || result.length === 0) {
          message.channel.send({content: '🚫 **Lokasyon/Bölge Bulunamadı...**'})
          return
      }
    
      var current = result[0].current
      var location = result[0].location
      
      const embed = new EmbedBuilder
()
          .setTitle(`${current.observationpoint} Hava Durumu`)
          .setDescription(`**${current.skytext}**`)
          .setThumbnail(current.imageUrl)
          .setColor("#000001")
          .addField('⏳ Zaman Dilimi: ',`UTC${location.timezone}`, true)
          .addField('🎰 Derece Tipi: ',location.degreetype, true)
          .addField('🌞 Sıcaklık: ',`${current.temperature} Derece`, true)
          .addField('🌅 Hissedilen Sıcaklık: ', `${current.feelslike} Derece`, true)
          .addField('🌈 Rüzgar Oranı: ',current.winddisplay, true)
          .addField('🌁 Nem Oranı: ', `${current.humidity}%`, true)
          message.channel.send({embeds: [embed]})
  })
},

}