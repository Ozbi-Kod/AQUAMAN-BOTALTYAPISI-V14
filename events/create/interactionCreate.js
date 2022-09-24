const { EmbedBuilder , ButtonStyle , ActionRowBuilder ,InteractionType, ButtonBuilder , ModalBuilder , TextInputBuilder , TextInputStyle} = require('discord.js');
const db = require('orio.db');
module.exports = async (client,interaction) =>{
 // Rol Al
    if(interaction.customId === "java") {
        let member = interaction.member
        if(member.roles.cache.has("1002286615177216160")) {
           member.roles.remove("1002286615177216160");
           interaction.reply({ content: `<@&${"1002286615177216160"}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
        } else {
           member.roles.add("1002286615177216160");
           interaction.reply({ content: `<@&${"1002286615177216160"}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
        };
      };
      
      
      if(interaction.customId === "css") {
        let member = interaction.member
        if(member.roles.cache.has("1002286616364208280")) {
           member.roles.remove("1002286616364208280");
           interaction.reply({ content: `<@&${"1002286616364208280"}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
        } else {
           member.roles.add("1002286616364208280");
           interaction.reply({ content: `<@&${"1002286616364208280"}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
        };
      };
      if(interaction.customId === "altyapılar") {
        let member = interaction.member
        if(member.roles.cache.has("1002286618385850429")) {
           member.roles.remove("1002286618385850429");
           interaction.reply({ content: `<@&${"1002286618385850429"}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
        } else {
           member.roles.add("1002286618385850429");
           interaction.reply({ content: `<@&${"1002286618385850429"}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
        };
      };
      if(interaction.customId === "html") {
        let member = interaction.member
        if(member.roles.cache.has("1002286617429553252")) {
           member.roles.remove("1002286617429553252");
           interaction.reply({ content: `<@&${"1002286617429553252"}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
        } else {
           member.roles.add("1002286617429553252");
           interaction.reply({ content: `<@&${"1002286617429553252"}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
        };
      };
      if(interaction.customId === "python") {
        let member = interaction.member
        if(member.roles.cache.has("1002286619312787517")) {
           member.roles.remove("1002286619312787517");
           interaction.reply({ content: `<@&${"1002286619312787517"}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
        } else {
           member.roles.add("1002286619312787517");
           interaction.reply({ content: `<@&${"1002286619312787517"}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
        };
      };
// Yardım
const prefix = "."
try {
    if(!interaction.isSelectMenu()) return
    
    if(interaction.customId === "yardım") {
      
      let message = await interaction.channel.messages.fetch(interaction.message.id)
      let value = interaction.values
      
      if(value[0] === "Müzik") {
      await interaction.deferUpdate()
      
      const embed = new EmbedBuilder()
      .setDescription(`
      ${client.commands
         
          .filter(cmds => cmds.config.kategori == "Müzik")
        
          .map(ozbi => ` **${prefix}${ozbi.config.name}** = ${ozbi.config.description || "**Açıklama Eklenmemiş**"}`)
        
          .join('\n')}
          \n[Destek Sunucumuz](https://discord.gg/node)
  
      `)
      .setAuthor({ name: client.botunadı, url: "https://top.gg/tr/bot/981562634077880360" })

      .setColor('#000001')
      .setTimestamp()
      .setImage('https://cdn.discordapp.com/attachments/958676365153017887/994936833190400092/standard.gif')          
      
      await message.edit({embeds: [embed]})
      
      } else if(value[0] === "Moderasyon") { 
      await interaction.deferUpdate()
      
      const embed = new EmbedBuilder ()
      .setDescription(`
      ${client.commands
         
          .filter(cmds => cmds.config.kategori == "Moderasyon")
        
          .map(ozbi => ` **${prefix}${ozbi.config.name}** = ${ozbi.config.description || "**Açıklama Eklenmemiş**"}`)
        
          .join('\n')}
           \n[Destek Sunucumuz](https://discord.gg/node)
  
      `)
      .setAuthor({ name: client.botunadı, url: "https://top.gg/tr/bot/981562634077880360" })

  
  .setColor('#000001')
      .setTimestamp()
      .setImage('https://cdn.discordapp.com/attachments/958676365153017887/994936833190400092/standard.gif')          
      await message.edit({embeds:[embed]})
      } else if(value[0] === 'Ekonomi') {
      await interaction.deferUpdate()
      
      const embed = new EmbedBuilder()
      .setDescription(`
      ${client.commands
         
          .filter(cmds => cmds.config.kategori == "Ekonomi")
        
          .map(ozbi => ` **${prefix}${ozbi.config.name}** = ${ozbi.config.description || "**Açıklama Eklenmemiş**"}`)
        
          .join('\n')}
          \n[Destek Sunucumuz](https://discord.gg/node)
  
      `)
      .setAuthor({ name: client.botunadı, url: "https://top.gg/tr/bot/981562634077880360" })

      .setColor('#000001')
      .setTimestamp()
      .setImage('https://cdn.discordapp.com/attachments/958676365153017887/994936833190400092/standard.gif')          
      
      await message.edit({embeds: [embed]})
      } else if(value[0] === 'kullanıcı') {
        await interaction.deferUpdate()
        
        const embed = new EmbedBuilder()
        .setDescription(`
        ${client.commands
           
            .filter(cmds => cmds.config.kategori == "Kullanıcı")
          
            .map(ozbi => ` **${prefix}${ozbi.config.name}** = ${ozbi.config.description || "**Açıklama Eklenmemiş**"}`)
          
            .join('\n')}
            \n[Destek Sunucumuz](https://discord.gg/node)
    
        `)
        .setAuthor({ name: client.botunadı, url: "https://top.gg/tr/bot/981562634077880360" })

          .setColor('#000001')
        .setTimestamp()
        .setImage('https://cdn.discordapp.com/attachments/958676365153017887/994936833190400092/standard.gif')          
        await message.edit({embeds:[embed]})
      } else if(value[0] === 'Admin') {
        await interaction.deferUpdate()
        
        const embed = new EmbedBuilder()
        .setDescription(`
        ${client.commands
           
            .filter(cmds => cmds.config.kategori == "Admin")
          
            .map(ozbi => ` **${prefix}${ozbi.config.name}** = ${ozbi.config.description || "**Açıklama Eklenmemiş**"}`)
          
            .join('\n')}
             \n[Destek Sunucumuz](https://discord.gg/node)
    
        `)
    
        .setAuthor({ name: client.botunadı, url: "https://top.gg/tr/bot/981562634077880360" })
        .setColor('#000001')
        .setTimestamp()
        .setImage('https://cdn.discordapp.com/attachments/958676365153017887/994936833190400092/standard.gif')          
        
        await message.edit({embeds:[embed]})
      } else if(value[0] === 'Level') {
        await interaction.deferUpdate()
        
        const embed = new EmbedBuilder()
        .setDescription(`
        **.level-ayar xp-mesaj miktar**
        **.level-ayar xp-level**
        **.level-ayar log**
        **.level-ayar tebrik-mesaj**
        **.level-sıfırla**
        \n[Destek Sunucumuz](https://discord.gg/node)

        `)
        .setColor('#000001')
        .setTimestamp()
        .setImage('https://cdn.discordapp.com/attachments/958676365153017887/994936833190400092/standard.gif')          
              await message.edit({embeds:[embed]})

      } else if(value[0] === 'Kayıt') {
        await interaction.deferUpdate()
        
        const embed = new EmbedBuilder()
        .setDescription(`
        ${client.commands
           
            .filter(cmds => cmds.config.kategori == "Kayıt")
          
            .map(ozbi => ` **${prefix}${ozbi.config.name}** = ${ozbi.config.description || "**Açıklama Eklenmemiş**"}`)
          
            .join('\n')}
             \n[Destek Sunucumuz](https://discord.gg/node)
    
        `)
        .setAuthor({ name: client.botunadı, url: "https://top.gg/tr/bot/981562634077880360" })

        .setColor('#000001')
        .setTimestamp()
        .setImage('https://cdn.discordapp.com/attachments/958676365153017887/994936833190400092/standard.gif')          

        await message.edit({embeds:[embed]})
      } else if(value[0] === 'Eğlence') {
        await interaction.deferUpdate()
        
        const embed = new EmbedBuilder()
        .setDescription(`
        ${client.commands
           
            .filter(cmds => cmds.config.kategori == "Eğlence")
          
            .map(ozbi => ` **${prefix}${ozbi.config.name}** = ${ozbi.config.description || "**Açıklama Eklenmemiş**"}`)
          
            .join('\n')}
            \n[Destek Sunucumuz](https://discord.gg/node)
    
        `)
        .setAuthor({ name: client.botunadı, url: "https://top.gg/tr/bot/981562634077880360" })

          .setColor('#000001')
        .setTimestamp()
        .setImage('https://cdn.discordapp.com/attachments/958676365153017887/994936833190400092/standard.gif')          
        await message.edit({embeds:[embed]})

      } else if(value[0] === 'Filtre') {
        await interaction.deferUpdate()
        
        const embed = new EmbedBuilder()
        .setDescription(`
        ${client.commands
           
            .filter(cmds => cmds.config.kategori == "Filtre")
          
            .map(ozbi => ` **${prefix}${ozbi.config.name}** = ${ozbi.config.description || "**Açıklama Eklenmemiş**"}`)
          
            .join('\n')}
            \n[Destek Sunucumuz](https://discord.gg/node)
    
        `)
        .setAuthor({ name: client.botunadı, url: "https://top.gg/tr/bot/981562634077880360" })

          .setColor('#000001')
        .setTimestamp()
        .setImage('https://cdn.discordapp.com/attachments/958676365153017887/994936833190400092/standard.gif')          
        await message.edit({embeds:[embed]})

      }  
    }    
    // if error
    } catch(e) {
      console.error(e)
      interaction.followUp({content: e.message, ephemeral: true})
    }
    }
