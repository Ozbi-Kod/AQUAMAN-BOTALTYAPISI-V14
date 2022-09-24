
const db = require('orio.db');

module.exports = {
config:{
    name: "bahis",
    description: "Bahis Oynarsınız.",
    aliases: ["idda"],
     kategori: "Ekonomi",
    },

    run: async(client, message, args) => {
   var possibility = ["win", "lose"];
        const amount = args[0];
        if (!amount) return message.channel.send("Bahis yapmadan önce geçerli bir miktar giriniz!")
        if (isNaN(amount)) return message.channel.send("Lütfen bahis yapmadan önce düzgün bir sayı gir!")
        if (amount > db.fetch(`coın_${message.author.id}`)) return message.channel.send(`Maalesef ${amount} kadar dolarınız yok!`)
        const conclusion = (possibility[Math.floor(Math.random() * possibility.length)])
        if (conclusion === "win") {
            message.channel.send(`${amount} dolar için bahse girdiniz!`).then(x => setTimeout(() => {
                x.edit(`Tebrikler ${amount * 1.5} dolar kazandınız!`)
            }, 500));
            db.add(`coın_${message.author.id}`, amount * 1.5);
        } else {
            message.channel.send(`${amount} dolar için bahse girdiniz!`).then(x => setTimeout(() => {
                x.edit(`Maalesef ${amount} dolar kaybettiniz!`)
            }, 500));
            db.add(`coın_${message.author.id}`, -amount)
        }
    }
}

