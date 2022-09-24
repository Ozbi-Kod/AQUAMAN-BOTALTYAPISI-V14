const slotItems = ["🍇", "🍉", "🍌", "🍎", "🍒"];
const { EmbedBuilder } = require('discord.js');  
const db = require('orio.db');

module.exports = {
    config:{ 
    name: 'slots',
    description: "Slots oynarsınız.",
    aliases: ["gacha"],
    kategori: "Ekonomi",
},
    run: async(client, message, args) => {
    let user = message.author;
    let paradb = await db.fetch(`coın_${user.id}`)
    let para = parseInt(args[0]);
    let win = false;

    let paramore = new EmbedBuilder()
    .setColor('#000001')
    .setDescription(`❌ Yeterince paran yok`);

    let parahelp = new EmbedBuilder()
    .setColor('#000001')
    .setDescription(`❌ Lütfen bir number seçin`); 

    if (!para) return message.channel.send({embeds: [parahelp]});
    if (para > paradb) return message.channel.send({embeds: [paramore]});

    let number = []
    for (let i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2])  { 
        para *= 9
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        para *= 2
        win = true;
    }
    if (win) {
        let slotsEmbed1 = new EmbedBuilder()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nŞanslısınız ve ${para} coin aldınız`)
            .setColor('#000001')
        message.channel.send({embeds: [slotsEmbed1]})
        db.add(`coın_${user.id}`, +para)
    } else {
        let slotsEmbed = new EmbedBuilder()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\n${para} coin kaybettiniz`)
            .setColor('#000001')
        message.channel.send({embeds: [slotsEmbed]})
        db.add(`coın_${user.id}`, -para *1.5)
    }
},

}