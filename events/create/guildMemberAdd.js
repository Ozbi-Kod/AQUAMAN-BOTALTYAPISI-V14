const {PermissionsBitField,EmbedBuilder} = require('discord.js')
const db = require('orio.db')
module.exports = async (client,member,message) => { 

 
    let kanal = db.fetch(`otorol_kanal_${member.guild.id}`)
    let rol   = db.fetch(`otorol_rol_${member.guild.id}`)
    
    if(!kanal) return;
    if(!rol) return;
    
    member.roles.add(rol)
    
//HG-BB 
    
    let hgbb = db.fetch(`hg_bb_kanal_${member.guild.id}`)
    
    if(!hgbb) return;
    
    const hg = new EmbedBuilder()
    .setColor("#000001")
    .setDescription(`${member}, Aramıza Hoşgeldin`)
    client.channels.cache.get(hgbb).send({embeds: [hg]})

//Sayaç

let kontrol1 = db.fetch(`sayaç_log_${member.guild.id}`)
let kontrol2 = db.fetch(`sayaç_hedef_${member.guild.id}`)

if(!kontrol1) return;

if(kontrol2){

let kalan = kontrol2 - member.guild.memberCount

if(kalan === 0) {
 client.channels.cache.get(kontrol1).send(`Yeni Biri Katıldı, ${member} Hoşgeldin. Seninle beraber **${member.guild.memberCount}** Kişiyiz Sayaç Hedefimize ulaştık.`)
 db.delete(`sayaç_hedef_${member.guild.id}`)
}else{

client.channels.cache.get(kontrol1).send(`Yeni Biri Katıldı, ${member} Hoşgeldin. Seninle beraber **${member.guild.memberCount}** Kişiyiz Sayaç Hedefimize **${kalan}** kişi kaldı.`)

}

}else{

client.channels.cache.get(kontrol1).send(`Yeni Biri Katıldı, ${member} Hoşgeldin. Seninle beraber **${member.guild.memberCount}** Kişiyiz. Şuan Bir Hedefiniz Yok.`)
}

//Ototag
    
  const tag = db.fetch(`tags_${member.guild.id}`)
  if(tag) {
    member.setNickname(`${tag} ${member.user.username}`)
  }

//Oto İsim

const otoisim = db.fetch(`otoisim_${member.guild.id}`)
if(otoisim) {
  member.setNickname(`${otoisim}`)
}

  //Kayıt Sistemi Hoşgeldin Mesajı

  let kanals =  db.fetch(`kayıtkanal_${member.guild.id}`)
  let rols   = db.fetch(`kayıtsızrol_${member.guild.id}`)

  if(!kanals && !client.channels.cache.get(kanals)) return;
  if(!rol && !member.guild.roles.cache.has(rols)) return;
member.roles.add(rols)

const guild = member.guild
let aylartoplam = {
  "01": "Ocak",
      "02": "Şubat",
      "03": "Mart",
      "04": "Nisan",
      "05": "Mayıs",
      "06": "Haziran",
      "07": "Temmuz",
      "08": "Ağustos",
      "09": "Eylül",
      "10": "Ekim",
      "11": "Kasım",
      "12": "Aralık"
}
let aylar = aylartoplam 
let user = client.users.cache.get(member.id);
require("moment-duration-format");
let kayıtçı = db.fetch(`kayıt_yetkılı_${member.guild.id}`)

  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const gün = moment.duration(kurulus).format("D")   
  let kontrol;
  if (gün < 30) kontrol = 'Güvenilir Değil'
  if (gün > 30) kontrol = 'Güvenilir'   
 
  member.setNickname(`İsim | Yaş`)

  client.channels.cache.get(kanals).send({content: `📥 • **${guild.name} Sunucusuna hoşgeldin ${member}!
  
🥳 • Seninle Beraber **${member.guild.memberCount || "DiscordApı" }** Değerli Kişiye Ulaştık.**

⏲️ • Hesabın **${moment(user.createdAt).format('DD')} ${aylar[moment(user.createdAt).format('MM')]} ${moment(user.createdAt).format('YYYY HH:mm:ss')}** Önce Oluşturulmuş.

🛠️ • `+ `${kontrol}` +`

🚨 • <@&${kayıtçı}> Rolündeki Yetkililer Seninle İlgilenicektir.
  
`}) 



}

  
  


  

