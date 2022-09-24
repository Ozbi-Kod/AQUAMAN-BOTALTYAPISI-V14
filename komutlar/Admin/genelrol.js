const { PermissionsBitField , EmbedBuilder} = require('discord.js');
const db = require("orio.db");

module.exports = {
    config: {
        name: "herkeserol",
        aliases: [],
        description: "Belirtilen Rolü Herkese Verip / Alırsınız",
        kategori: "Admin"
  
    },
    run: async (client, message, args) => {
        let dil = await db.get(`dil_${message.author.id}`)
        if(dil === "english") {      
        if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply({content: `You Must Have **ADMIN** Authorization to Use This Command.`})
              if (!args[0]) return message.channel.send({embeds:[
            new EmbedBuilder()
            .setColor("#000001")
            .setTimestamp()
            .setDescription(`If you want to Role Everyone \`.herkeserol give\` | If You Want To Buy \`.herkeserol get\` You can write`)]})     

        if (args[0] === 'give') {
let rols = message.mentions.roles.first();
if(!rols) return message.reply("Please Specify the Role That Will Be Given to Everyone.")
if(rols){
let bg = message.guild.members.cache.filter(m => m.roles.cache.filter(r => r.id !== message.guild.id).size)
    bg.forEach(r => {
        r.roles.add(rols)
    });
    message.reply(`No role on server ${bg.size} to the person ${rols} given the role.`)
}
    else{
   return message.reply(`I Don't Have The Authority To Cast The Role`)
    }
   }
   if (args[0] === 'get') {
    let rols = message.mentions.roles.first();
    if(!rols) return message.reply("Please specify the role to be taken from everyone.")
    if(rols){
    let bg = message.guild.members.cache.filter(m => m.roles.cache.filter(r => r.id !== message.guild.id).size)
        bg.forEach(r => {
            r.roles.remove(rols)
        });
        message.reply(`From Everyone on the Server ${rols} Taken the Role`)
    }
        else{
       return message.reply(`I Have No Authority to Take the Role`)
        }
   }
}

else{
    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) return message.reply({content: `Bu Komutu Kullanabilmeniz İçin **ADMİN** Yetkisine Sahip Olmanız Gerekmektedir.`})

if (!args[0]) return message.channel.send({embeds:[
    new EmbedBuilder()
    .setColor("#000001")
    .setTimestamp()
    .setDescription(`Herkese Rol Vermek istiyorsanız \`.herkeserol ver\` | Almak İstiyorsanız \`.herkeserol al\` Yazabilirsiniz`)]})     

if (args[0] === 'ver') {
let rols = message.mentions.roles.first();
if(!rols) return message.reply("Lütfen Herkese Verilecek Rolü Belirtiniz.")
if(rols){
let bg = message.guild.members.cache.filter(m => m.roles.cache.filter(r => r.id !== message.guild.id).size)
bg.forEach(r => {
r.roles.add(rols)
});
message.reply(`Sunucuda rolü olmayan ${bg.size} kişiye ${rols} rolü verildi.`)
}
else{
return message.reply(`Rolü Vericek Yetkim Bulunmuyor`)
}
}
if (args[0] === 'al') {
let rols = message.mentions.roles.first();
if(!rols) return message.reply("Lütfen Herkeksten Alınacak Rolü Belirtiniz.")
if(rols){
let bg = message.guild.members.cache.filter(m => m.roles.cache.filter(r => r.id !== message.guild.id).size)
bg.forEach(r => {
    r.roles.remove(rols)
});
message.reply(`Sunucuda ki Herkesten ${rols} Rolü Alımıştır`)
}
else{
return message.reply(`Rolü Alıcak Yetkim Bulunmuyor`)
}
}
}
}

}