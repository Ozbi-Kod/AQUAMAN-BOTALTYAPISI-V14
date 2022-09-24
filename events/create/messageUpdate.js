const { Discord , PermissionsBitField,EmbedBuilder} = require('discord.js')
const db = require('orio.db')
module.exports = async (client,oldMessage, newMessage) => { 
// Küfür Engel
let küfürengel = await db.fetch(`${oldMessage.guild.id}.kufur`)
if (küfürengel == 'acik') {
const kufur = ["allahını","amk", "ananı sikiyim", "ananıskm", "piç", "amk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "yarrak", "amcık", "yarram", "sikimi ye", "amq","oç","ananı sikim"];
if (kufur.some(word => newMessage.content.includes(word))) {
try {
if (!oldMessage.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
oldMessage.delete();
return oldMessage.channel.send({embeds:[
new EmbedBuilder()
.setColor('#000001')
.setDescription(`<@${oldMessage.author.id}> __**küfür etmek yasak!**__`)]}).then((message) => setTimeout(() => message.delete(), 6000));
}
} catch(err) {
}
}                      
} if(!küfürengel) return; 

// Reklam Engel

let reklamengel = await db.fetch(`reklamFiltre_${oldMessage.guild.id}`)
if (reklamengel == 'acik') { 
    if (oldMessage.author.bot) return;
     
const reklam = ["https://","http://","discord.gg",".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".net", ".rf.gd", ".az", ".party", "discord.gg"];
if (reklam.some(word => newMessage.content.includes(word))) {
try {
if (!oldMessage.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
oldMessage.delete();
return oldMessage.channel.send({embeds:[
new EmbedBuilder()
.setColor('#000001')
.setDescription(`<@${oldMessage.author.id}> __**link atmak yasak!**__`)]}).then((message) => setTimeout(() => message.delete(), 6000));
}
} catch(err) {
}
}
} if (!reklamengel) return; 

// CapsLock

const casplock = await db.fetch(`${oldMessage.guild.id}_caps`);
if (casplock == 'acik') {
  if (oldMessage.author.bot) return;

let x = /\w*[A-Z]\w*[A-Z]\w*/g;
if (newMessage.content.match(x)) {
if (!oldMessage.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
oldMessage.delete();
return oldMessage.channel.send({embeds:[
new EmbedBuilder()
.setColor('#000001')
.setDescription(`<@${oldMessage.author.id}> __**Caps-lock yasak!**__`)]}).then((message) => setTimeout(() => message.delete(), 6000));
}
}
} if(!casplock) return;
}



