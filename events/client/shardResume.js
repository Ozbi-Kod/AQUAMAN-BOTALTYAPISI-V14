const chalk = require("chalk");

module.exports = (client, id, replayedEvents) => {
    console.log(chalk.yellow(`[${String(new Date).split(" ", 5).join(" ")}] || ==> || Shard #${id} Yeniden Baglandı!`))
    client.channels.cache.get(client.shardlog).send(`[${String(new Date).split(" ", 5).join(" ")}]  ==>  **Shard #${id}** Yeniden Baglandı!`)

}