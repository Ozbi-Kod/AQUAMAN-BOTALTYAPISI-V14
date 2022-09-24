const { Discord , PermissionsBitField,EmbedBuilder} = require('discord.js')
const db = require('orio.db')
module.exports = async (client, message) => { 
// Küfür Engel
    let küfürengel = await db.fetch(`${message.guild.id}.kufur`)
    if (küfürengel == 'acik') {
     if (message.author.bot) return;
        const kufur = ["allahını","amk", "ananı sikiyim", "ananıskm", "piç", "amk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "yarrak", "amcık", "yarram", "sikimi ye", "amq","oç","ananı sikim"];
        if (kufur.some(word => message.content.toLowerCase().includes(word))) {
        try {
        if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
        message.delete();
        return message.channel.send({embeds:[
        new EmbedBuilder()
        .setColor('000001')
        .setDescription(`<@${message.author.id}> __**küfür etmek yasak!**__`)]}).then((message) => setTimeout(() => message.delete(), 6000));
        }
        } catch(err) {
        }
        }
        } if (!küfürengel) return; 

// Reklam Engel

  let reklamfiltre = await db.fetch(`reklamFiltre_${message.guild.id}`)
  if (reklamfiltre == 'acik') {
    if (message.author.bot) return;  

  const reklam = ["https://","http://","discord.gg",".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".net", ".rf.gd", ".az", ".party", "discord.gg"];
  if (reklam.some(word => message.content.toLowerCase().includes(word))) {
  try {
  if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
  message.delete();
  return message.channel.send({embeds:[
  new EmbedBuilder()
  .setColor('#000001')
  .setDescription(`<@${message.author.id}> __**link atmak yasak!**__`)]}).then((message) => setTimeout(() => message.delete(), 6000));
  }
  } catch(err) {
        
  }
  }
        
  } if (!reklamfiltre) return;
    
// CapsLock

const casplock = await db.fetch(`${message.guild.id}_caps`);
if (casplock == 'acik') {
  if (message.author.bot) return;

let x = /\w*[A-Z]\w*[A-Z]\w*/g;
if (message.content.match(x)) {
if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
message.delete();
return message.channel.send({embeds:[
new EmbedBuilder()
.setColor('#000001')
.setDescription(`<@${message.author.id}> __**Caps-lock yasak!**__`)]}).then((message) => setTimeout(() => message.delete(), 6000));
}
}
} if(!casplock) return;

//----LEVEL SİSTEMİ

  if(message.author.bot== true) return;

const kontrol = db.fetch(`level_log_${message.guild.id}`)
if(!kontrol) return;

const xpkontrol = db.fetch(`xp_${message.author.id}_${message.guild.id}`)
if(!xpkontrol) db.set(`xp_${message.author.id}_${message.guild.id}`,0)
db.add(`xp_${message.author.id}_${message.guild.id}`, +1)

const xplevel = db.fetch(`xp_level_${message.guild.id}`)
if(xpkontrol >= xplevel) {
  let lvlekle = db.fetch(`lvl_${message.author.id}_${message.guild.id}`)
  if(!lvlekle) db.set(`lvl_${message.author.id}_${message.guild.id}`, 0)
  db.add(`lvl_${message.author.id}_${message.guild.id}`, +1)
  let tebrikmesaj = db.fetch(`level_tebrik_${message.guild.id}`)
  db.delete(`xp_${message.author.id}_${message.guild.id}`)
  if(tebrikmesaj) return; {
    client.channels.cache.get(kontrol).send({content: `<@${message.author.id}>Tebrikler başarılı bir şekilde level atladınız. Yeni leveliniz **${lvlekle}**`})
    db.set(`xp_${message.author.id}_${message.guild.id}`, 0)



}
  }

    }


