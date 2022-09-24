const {Discord, PermissionsBitField , EmbedBuilder} = require("discord.js");

module.exports = {
    config: {
        name: "unban",
        aliases: [],
        description: "Belirtilen Kişininn Sunucudaki Banını Açarsınız.",
        kategori: "Moderasyon"
  
    },
    run: async (client, message, args) => {
    if (!message.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return message.reply({content: `Bu Komutu Kullanabilmeniz İçin **BAN** Yetkisine Sahip Olmanız Gerekmektedir.`})

    
  const userError = new EmbedBuilder()
    .setColor('#000001')
      .setTitle(client.botunadı)
        .setDescription(`\`Yasağı kaldırmak için bir kullanıcı kimliği girmelisiniz .unban İD/@OZBİ\``)
 
  const userError2 = new EmbedBuilder()
    .setColor('#000001')
      .setTitle(client.botunadı)
        .setDescription("```ID'de Harf Kullanılanamaz```")
 
  const userError3 = new EmbedBuilder()
    .setColor('#000001')
      .setTitle(client.botunadı)
        .setDescription('```<Bu Kullanıcı Yasaklanmamış```')
   
  
  let user = args[0];
    if  (!user) return message.channel.send
          ({embeds:[userError]})
 
  if  (isNaN(args[0])) return message.channel.send
  ({embeds:[userError2]})
 
  const banList = await message.guild.bans.fetch();
 
  if (!user.id === banList) return message.channel.send
      (userError3)
 try {
 await message.guild.members.unban(user);
await message.channel.send(`<@${user}> Adlı Kullanıcının Yasağı Başarıyla Kaldırıldı.`)
 } catch {
message.channel.send(`<@${user}> Adlı Kullanıcının Yasağını kaldıramıyorum.`)   
 }
},

}