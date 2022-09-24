const {EmbedBuilder , PermissionsBitField} = require("discord.js");
module.exports = {
    config: {
        name: "sil",
        aliases: ["temizle"],
        kategori: "Moderasyon",
        description:"1 ve 500 Arasında Belirtilen Kadar Mesaj Siler",
    },
    run: async (client, message,args) => {

    if (!message.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) return message.reply({content: `Bu Komutu Kullanabilmeniz İçin **MESAJLARI YÖNET** Yetkisine Sahip Olmanız Gerekmektedir.`})
    const clear = args[0];
    const channel = message.channel;
    let math = Math.floor(clear / 500);
    for (let i = 0; i < math; i++) {
      try {
        await channel.bulkDelete(500);
      } catch (err) {}
    }

    try {
      await channel.bulkDelete(clear - 500 * math);
    } catch (err) {}

    try {
        message.reply({ content: `${clear} Adet Mesaj Silindi` });
        setTimeout(() => {
      message.delete();
        }, 5000);
    } catch {}
}
}