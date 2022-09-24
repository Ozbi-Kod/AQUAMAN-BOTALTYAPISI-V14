const figlet = require('figlet');
const chalk = require('chalk');
module.exports = async (client) => {
  figlet(client.user.tag, function(err, data) {
    if (err) {
        console.log('hata var kontrol edin (ready)');
        console.dir(err);
        client.channels.cache.get(client.hatalog).send(`Hata Var Kontrol Edin (ready)`)
        client.channels.cache.get(client.hatalog).send(err)
        return;
    }
    console.log(chalk.red.bold(data));
  });

  let guilds = client.guilds.cache.size;
  let users = client.users.cache.size;
  let channels = client.channels.cache.size;

  client.user.setStatus('dnd');
  const aktiviteler = [
    client.botunadı,
    client.botunadı,
  ]
  setInterval(function() {
    var random = Math.floor(Math.random() * (aktiviteler.length - 0 + 1) + 0);

    client.user.setActivity(aktiviteler[random],{type:'WATCHING'});
  }, 2 * 3500);
}


