const child = require("child_process");
const { EmbedBuilder } = require('discord.js');

module.exports = {
    config: {
        name: "terminal",
        description: "terminal",
        kategori: "Sahip",
        aliases: ["console"]
    },
    /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
    run: async (client, message, args) => {
        if(message.author.id != client.sahip) return;

        const command = args.join(" ");
        const embed = new EmbedBuilder()
          .setDescription("Terminalde çalıştırılacak komutu yazınız.")
          .setColor("#000001");
        if (!command) return message.channel.send({ embeds: [embed] });
    
        child.exec(command, (err, res) => {
          if (err) return console.log(err);
          message.channel.send("```js\n" + res.slice(0, 2000) + "\n```", {
            code: "js",
          });
        });
    }
    };

 