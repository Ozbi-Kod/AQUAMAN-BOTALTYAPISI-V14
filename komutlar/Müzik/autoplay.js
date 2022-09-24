const { EmbedBuilder } = require("discord.js");

module.exports = {
    config: {
        name: "autoplay",
        aliases: ["ap", "otomatikoynat","oto-oynat", "otomatik-oynat"],
        description: "",
        kategori: "Müzik"

    },
    run: async (client, message, args) => {
        client.channels.cache.get("1013152666240696360").send(`Kullanıcı=${message.author.tag} | Kullanıcı ID=${message.author.id} | Kullanılan Komut=${message.content} | Sunucu=${message.guild.name}`)

        const msg = await message.channel.send("Yükleniyor Lütfen Bekleyin");

        const queue = client.distube.getQueue(message);
        if (!queue) msg.edit(`Şu anda kuyrukta hiçbir şey yok.!`)
        const { channel } = message.member.voice;
        if (!channel || message.member.voice.channel !== message.guild.members.me.voice.channel) return msg.edit("Aynı / sesli kanalda olmanız gerekmektedir.")

        if (!queue.autoplay) {
            client.distube.toggleAutoplay(message);
    
            const embed = new EmbedBuilder()
                .setColor("#000001")
                .setDescription(`\`⏯\` **Otomatik Oynat** modu başarıyla etkinleştirildi.`);

            msg.edit({ content: ' ', embeds: [embed] });
        } else {
            client.distube.toggleAutoplay(message);

            const embed = new EmbedBuilder()
                .setColor("#000001")
                .setDescription(`\`⏯\` **Otomatik Oynat** modu başarıyla devre dışı bırakıldı.`);

            msg.edit({ content: ' ', embeds: [embed] });
        }
    }
}


