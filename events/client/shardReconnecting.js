const chalk = require("chalk");

module.exports = (client, id) => {
    console.log(chalk.yellowBright(`[${String(new Date).split(" ", 5).join(" ")}] || ==> || Shard #${id} Yeniden Bağlanıyor`))
    client.channels.cache.get(client.shardlog).send(`[${String(new Date).split(" ", 5).join(" ")}]  ==>  **Shard #${id}** Yeniden Bağlanıyor`)

}