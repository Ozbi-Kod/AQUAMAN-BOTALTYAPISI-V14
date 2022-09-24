const chalk = require("chalk");
const delay = require("delay");

module.exports = async (client, id) => { 
    await delay(1000); 
    console.log(chalk.greenBright(`[${String(new Date).split(" ", 5).join(" ")}] || ==> || Shard #${id} Hazır`))
    client.channels.cache.get(client.shardlog).send(`[${String(new Date).split(" ", 5).join(" ")}]  ==>  **Shard #${id}** Hazır`)
}