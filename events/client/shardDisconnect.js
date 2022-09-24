const chalk = require("chalk");

module.exports = (client, event, id) => {
    console.log(chalk.redBright(`[${String(new Date).split(" ", 5).join(" ")}] || ==> || Shard #${id} Bağlantı Kesildi`))
    client.channels.cache.get(client.shardlog).send((`[${String(new Date).split(" ", 5).join(" ")}]  ==>  **Shard #${id}** Bağlantı Kesildi`))

}
