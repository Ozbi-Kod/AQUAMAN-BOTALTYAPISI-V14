const db = require('orio.db');

module.exports = {
config:{
    name: "level-sıfırla",
    description: "Level sistemini sıfırlarsınız.",
    aliases: [],
    kategori: "level",
    usage: "",
    

},
    run: async(client, message, args) => {
if(db.fetch(`xp_mesaj_${message.guild.id}`)){
    db.delete(`xp_mesaj_${message.guild.id}`)

}
if(db.fetch(`xp_level_${message.guild.id}`)){
    db.delete(`xp_level_${message.guild.id}`)
}
if(db.fetch(`level_tebrık_${message.guild.id}`)){
    db.delete(`level_tebrık_${message.guild.id}`)
}
if(db.fetch(`level_log_${message.guild.id}`)){
    db.delete(`level_log_${message.guild.id}`)

}
message.reply('Level Sistemi başarıyla sıfırlandı!');
   
},

}
