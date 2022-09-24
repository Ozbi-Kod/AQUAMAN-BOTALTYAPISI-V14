

module.exports = {
    config: {
        name: "kaçcm",
        aliases: [],
        description: "Ölçüm Yapar :).",
        kategori: "Eğlence"
  
    },
    run: async (client, interaction, args) => {
   interaction.channel.send({ content: 'Hemen Ölçüyorum 1 Saniye..' }).then(interaction => {
   var espriler = [' **Senin Malafatın  18CM ** :eggplant: ' ,'**Senin Malafatın  11CM ** :eggplant:' ,'**Senin Malafatın 32CM  ** :eggplant:' ,'**Senin Malafatın  35CM ** :eggplant:' ,'**Senin Malafatın  8CM  ** :eggplant:' ,'**Senin Malafatın  65CM  ** :eggplant:' ,'**Senin Malafatın 5CM  ** :eggplant:' ,'**Senin Malafatın 31CM  ** :eggplant:' ,'**Senin Malafatın  14CM ** :eggplant:' ,'**Senin Malafatın  1CM ** :eggplant:'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            interaction.edit({content: `${espri}` });
 });
},


}