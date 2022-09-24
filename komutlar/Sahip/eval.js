const { EmbedBuilder } = require("discord.js");
const db = require('orio.db');

module.exports = {
    config: {
    name:"eval",
    description: "Eval",

    kategori:"Sahip",
    },
    run: async(client, message, args) => {
        if(message.author.id != client.sahip) return;
          
               const embed = new EmbedBuilder()
              .setAuthor({name:'TOKEN'})
              .setColor("#000001")
              .setDescription(`Şuan alıyorsun tokeni`)
               if (args[0] === client.token) return message.channel.send({embeds: [embed]})
          
          
          
                try {
                var code = args.join(" ");
                var evaled = eval(code);
                 if (args[0] === client.token) return message.channel.send({embeds: [embed]})
  
          
                if (typeof evaled !== "string")
                  evaled = require("util").inspect(evaled);
          
                message.channel.send(clean(evaled));
              } catch (err) {
                message.channel.send(`\`HATA\` \`\`\`xl\n${clean(err)}\n\`\`\``);
              }
          function clean(text) {
            if (typeof(text) === "string")
              return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
          }
	},
}
