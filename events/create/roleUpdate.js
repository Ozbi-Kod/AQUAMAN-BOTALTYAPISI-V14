const { EmbedBuilder , PermissionsBitField} = require('discord.js')
const db = require('orio.db')
module.exports = async (client , newRole, OldRole) => {
 let kanal = db.fetch(`modlog_${OldRole.guild.id}`)
 if(!kanal) return;
 
    const embed = new EmbedBuilder()
       .setDescription(`**Rol Güncellendi**`)
       .addFields(
         {name:"Eski Rol Adı",value:OldRole.name,inline:true},
       {name:"Eski Rol Rengi",value:`${OldRole.hexColor}`,inline:true},
       {name:"Eski Rol İkonu",value:OldRole.iconURL() ? `[Görüntüle](${OldRole.iconURL()})`:"İcon Yok",inline:true},
       

       {name:"Yeni Rol Adı",value:newRole.name,inline:true},
       {name:"Yeni Rol Rengi",value:`${newRole.hexColor}`,inline:true},
       {name:"Yeni Rol İkonu",value:newRole.iconURL() ? `[Görüntüle](${newRole.iconURL()})`:"İcon Yok",inline:true},
       {name:"Güncellenme Tarihi",value:`<t:${parseInt(new Date() / 1000)}:R>`,inline:true},
       {name:"Güncellenen Yetkiler",value:`**Eklenen Yetkiler**
       ${newRole.PermissionsBitField().map(x => {
         if(OldRole.PermissionsBitField().includes(x)) return;
         return yetkiler[x];
       }).join(", ")}
       **Kaldırılan Yetkiler**
       ${
         OldRole.PermissionsBitField().map(x => {
           if(newRole.PermissionsBitField().includes(x)) return;
           return yetkiler[x];
         }).join(", ")
       }
       `,inline:false}

       )
       .setColor("#000001")
       .setFooter({text:`${newRole.guild.name}`})
       .setTimestamp()
       client.channels.cache.get(kanal).send({embeds:[embed]})

   }
