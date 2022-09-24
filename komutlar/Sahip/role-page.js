const { EmbedBuilder , ButtonBuilder ,ActionRowBuilder , ButtonStyle } = require('discord.js');

module.exports = {
    config: {
        name: "role-page",
        description: "role-page",
        kategori: "Sahip",
        aliases: []
    },
    run: async (client, message, args) => {
    if(message.author.id != client.sahip) return;
    let button1 = new ButtonBuilder()
    .setStyle(ButtonStyle.Success)
    .setEmoji('💻')
    .setLabel('Java Script')
    .setCustomId('java')

let button2 = new ButtonBuilder()
    .setStyle(ButtonStyle.Success)
    .setEmoji('💻')
    .setLabel('CSS')
    .setCustomId('css')

    let button3 = new ButtonBuilder()
    .setStyle(ButtonStyle.Success)
    .setEmoji('💻')
    .setLabel('HTML')
    .setCustomId('html')
   
    let button4 = new ButtonBuilder()
    .setStyle(ButtonStyle.Success)
    .setEmoji('💻')
    .setLabel('PYTHON')
    .setCustomId('python')

    let button5 = new ButtonBuilder()
    .setStyle(ButtonStyle.Success)
    .setEmoji('💻')
    .setLabel('ALTYAPILAR')
    .setCustomId('altyapılar')



let row = new ActionRowBuilder()
    .addComponents(button1,button2,button3,button4,button5)



message.channel.send({ content:` @everyone Aşağıdan Rollerinizi Alabilirsiniz.`, components: [row]  }) ;

    }
}