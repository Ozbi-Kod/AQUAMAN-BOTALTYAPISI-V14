const {EmbedBuilder} = require("discord.js");
const db = require('orio.db')
module.exports = async (client,role) => {
    const kanal = db.fetch(`modlog_${role.guild.id}`)
    if(!kanal) return;
    const embed = new EmbedBuilder()
        .setDescription(`**Yeni Rol Oluşturuldu**`)
        .addFields({name:"Rol Adı",value:role.name,inline:true},
        {name:"Rol Rengi",value:`${role.hexColor}`,inline:true},
        {name:"Rol İkonu",value:role.iconURL() ? `[Görüntüle](${role.iconURL()})`:"İcon Yok",inline:true},
        {name:"Oluşturulma Tarihi",value:`<t:${parseInt(role.createdTimestamp / 1000)}:R>`,inline:true}
        )

        .setColor("Green")
        .setFooter({text:`${role.guild.name}`})
        .setTimestamp()
        client.channels.cache.get(kanal).send({embeds:[embed]})

      
  }    
