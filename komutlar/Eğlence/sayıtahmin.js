const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
module.exports = {
  config: {
      name: "sayıtahmin",
      aliases: [],
      description: "Sayı Tahmin Edersiniz.",
      kategori: "Eğlence"

  },
  run: async (client, message, args) => {
  this.games = new Set();
  if(this.games.has(message.channel.id)) await message.reply({ content: 'Kanal başına sadece bir düello meydana gelebilir.' });
    const islem = Math.floor(Math.random() * (100 - 1)) + 1
    const fixedlisonuç = islem
    let choice;
    let haklar = 10
    await message.react('👌')
    this.games.add(message.channel.id);
    await message.channel.send({ content: stripIndents`
                    ${message.author}, Numarayı tahmin et 0 ve 100 Arası
                    \`${haklar}\` A Q U A M A N Hakkın Var.
                ` });
           let uwu = false;
            while (!uwu && haklar !== 0) {
                const response = await message.channel.messages.fetch(neblm => neblm.author.id === message.author.id, { max: 1, time: 15000 });
              if(!response.first()) { 
                this.games.delete(message.channel.id);
                message.channel.send({ content: `${message.author}, Maalesef! Zaman doldu!` })
                message.channel.send({ content: `${message.author}, :shrug: Kaybettin! Sayı: \`${fixedlisonuç}\` :shrug: ` })
              }              
                const choice = response.first().content
                if(isNaN(choice)) {
                  continue;
                }
                if (choice !== fixedlisonuç)  {
                  haklar -= 1
                  if(fixedlisonuç > choice) {
                  await message.channel.send({ content: stripIndents`
                              ${message.author}, :small_red_triangle: Daha büyük numara söylemelisin!
                              \`${haklar}\` A Q U A M A N Hakkın Var.
                          ` });
                  continue;
                  }
                  if(fixedlisonuç < choice) {
                    await message.channel.send({ content: stripIndents`
                              ${message.author}, :small_red_triangle_down: Daha kücük numara söylemelisin!
                              \`${haklar}\` A Q U A M A N Hakkın Var.
                          ` });
                  continue;
                  }
                }
                if (choice == fixedlisonuç) {
                  uwu = true
                }
                }
                if (haklar == 0) {
                  this.games.delete(message.channel.id);
                  await message.channel.send({ content: `${message.author}, :shrug: Kaybettin! Sayı: \`${fixedlisonuç}\` :shrug:` })
                }
                if (uwu) {
                  this.games.delete(message.channel.id);
                  await message.channel.send({ content: `${message.author}, :tada:  Doğru Tahmin! Sayı: \`${fixedlisonuç}\` :tada:` })
                try {
            } catch(e) {
              this.games.delete(message.channel.id);
            message.channel.send('Bir hata oluştu')
        }
    } else {
      this.games.delete(message.channel.id);
      return console.log('Bir hata oluştu')
    }

},
}