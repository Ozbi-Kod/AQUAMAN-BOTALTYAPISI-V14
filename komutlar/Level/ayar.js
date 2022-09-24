const {PermissionsBitField , EmbedBuilder} = require("discord.js");
const db = require('orio.db')


module.exports = {
    config:{

        name: "level-ayar",
        description: "Level sistemini ayarlarsınız.",
        aliases: [],
        kategori: "level",
        usage: "",

    },

    run: async(client, message, args) => {
        if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply({content: `Bu Komutu Kullanabilmeniz İçin **ADMİN** Yetkisine Sahip Olmanız Gerekmektedir.`})

        let xpmesaj = db.fetch(`xp_mesaj_${message.guild.id}`)
        let xplevel = db.fetch(`xp_level_${message.guild.id}`)
        let levellog = db.fetch(`level_log_${message.guild.id}`)
        let leveltebrik2 = db.fetch(`level_tebrık_${message.guild.id}`) 
        let son;
        if(leveltebrik2 === true){
            son = "Açık"
        }else{
            son = "Kapalı"
        }
        const menu = new EmbedBuilder()
        .setColor("#000001")
        .setDescription(`
        > Doğru Kullanım;
        **${client.prefix}level-ayar xp-mesaj miktar :** mesaj başı xp oranını ayarlarsınız. [Otomatik ayar 1]
        **${client.prefix}level-ayar xp-level :** Kaç xp de lvl atlar. [Otomatik ayar 250]
        **${client.prefix}level-ayar log :** Level atlandığında mesaj atılacak kanal.
        **${client.prefix}level-ayar tebrik-mesaj :** Kişi level atladığında mesajını yanıtla yaparak tebrik eder. [Otomatik ayar **Kapalı**]
        
        > Ayarlar; 
        Mesaj başına Verilecek XP: **${xpmesaj ? xpmesaj : 1}**
        Kaç xp de level atılayacak: **${xplevel ? xplevel : 250}**
        Level Log: <#${levellog ? levellog : "Ayarlanmamış"}>
        Tebrik Mesaj: **${son}**


        `)

        if(!args[0]) return message.reply({embeds:[menu]})

        if(args[0] === "xp-mesaj"){
            let miktar = args[1]
            if(!miktar) return message.reply(`Lütfen her bir mesaj için verilecek xp değerini yazınız.`)
            db.set(`xp_mesaj_${message.guild.id}`, Number(miktar))
            message.reply(`Başarılı bir şekilde her bir mesaj için **${miktar}** xp ayarlandı.`)
        }
        if(args[0] === "xp-level"){
            let miktar = args[1]
            if(!miktar) return message.reply(`Lütfen kaç xp de level atlanacak ayarlayınız.`)
            db.set(`xp_level_${message.guild.id}`, Number(miktar))
            message.reply(`Başarılı bir şekilde level atlamak için gerekli xp **${miktar}** olarak ayarlanmıştır.`)
        }
        if(args[0] === "tebrik-mesaj"){
            let kontrol1 = db.fetch(`level_tebrık_${message.guild.id}`)
            if(kontrol1){
                db.set(`level_tebrık_${message.guild.id}`, false)
                message.reply(`Başarılı bir şekilde tebrik mesajı kapatıldı`)
            }
            if(!kontrol1){
                db.set(`level_tebrık_${message.guild.id}`, true)
                message.reply(`Başarılı bir şekilde tebrik mesajı açıldı`)
            }

        }
        if(args[0] === "log"){
            let kanal =  message.mentions.channels.first();
            if(!kanal) return message.reply(`Lütfen level log kanalını belirtiniz.`)
            db.set(`level_log_${message.guild.id}`, kanal.id)
            message.reply(`Başarılı bir şekilde level log kanalı ${kanal} olarak ayarlandı.`)
        }
},


}