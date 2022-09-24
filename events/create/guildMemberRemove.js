const { EmbedBuilder } = require('discord.js')
const db = require('orio.db');

module.exports = async (client,member,message) => {

//HG-BB

let hgbb = db.fetch(`hg_bb_kanal_${member.guild.id}`)
      
    if(!hgbb) return;
    
    const bb = new EmbedBuilder()
    .setColor("#000001")
    .setDescription(`${member}, Aramıza Ayrıldı`)
    client.channels.cache.get(hgbb).send({embeds: [bb]})

//SAYAÇ

let kontrol1 = db.fetch(`sayaç_log_${member.guild.id}`)
let kontrol2 = db.fetch(`sayaç_hedef_${member.guild.id}`)

if(!kontrol1) return;

if(kontrol2){

let kalan = kontrol2 - member.guild.memberCount

if(kalan === 0) {
 client.channels.cache.get(kontrol1).send(`Sunucudan ${member} Kişisi ayrıldı.**${member.guild.memberCount}** Kişiyiz. Sayayç Hedefimize Ulaşamadık`)
 db.delete(`sayaç_hedef_${member.guild.id}`)
}else{

client.channels.cache.get(kontrol1).send(`Sunucudan ${member} Kişisi ayrıldı.**${member.guild.memberCount}** Kişiyiz. Sayaç Hedefimize **${kalan}** kişi kaldı.`)

}

}else{

client.channels.cache.get(kontrol1).send(`Sunucudan ${member} Kişisi ayrıldı.**${member.guild.memberCount}** Kişiyiz. Şuan Hedefiniz Bulunmamaktadır.`)
}
    

}