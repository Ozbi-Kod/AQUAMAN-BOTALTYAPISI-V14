const { Client, Collection, GatewayIntentBits , EmbedBuilder , Discord,PermissionsBitField} = require("discord.js");
const { DisTube } = require('distube');
const { SoundCloudPlugin } = require('@distube/soundcloud');
const { SpotifyPlugin } = require('@distube/spotify');
const { YtDlpPlugin } = require("@distube/yt-dlp");
const { DiscordTogether } = require('discord-together');
Client.discordTogether = new DiscordTogether(Client)
const db = require('orio.db')
const mongoose = require(`mongoose`)
mongoose.connect('')
class MainClient extends Client {
    constructor() {
        super({
            shards: "auto",
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.GuildVoiceStates,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildBans,
                GatewayIntentBits.GuildMembers
            ],
            allowedMentions: {
                parse: ["roles", "users", "everyone"],
                repliedUser: false
            },
        });

        process.on('unhandledRejection', async (reason, promise) => { 

            if (reason.code == 50013) return //console.log(`Yetki Yok Hatası (Missing Permisson)`);
            if (reason.code == 50001) return //console.log(`Yetki Yok Hatası (Missing Accsess)`);
            console.log(reason)
            
            if(client.user){
            const channel = client.channels.cache.find(channel => channel.id === client.hatalog)
            if(channel){
            channel.send(`
            \`\`\` 
            ${reason}
            \`\`\`
            `)
            } else {
            console.log("Error channel bulunamadı (unhandledRejection)")
            }
            }
            
            });
          
        process.on('uncaughtException', error => console.log(error));

        this.config = require('./settings/ayarlar.js');
        this.prefix = this.config.PREFIX;
        this.sahip = this.config.SAHİP;
        this.shardlog = this.config.SHARDLOG;
        this.hatalog = this.config.HATALOG;
        this.loadcommands = this.config.LOADCOMMANDS;
        this.bildirilog = this.config.BİLDİRİLOG
        this.botunadı = this.config.BOTUNADI



        if (!this.token) this.token = this.config.TOKEN;

        const client = this;

        this.distube = new DisTube(client, {
            searchSongs: 0, /// ARAMA MODUNU ETKİNLEŞTİRMEK İÇİN 5'E AYARLAYIN!
            searchCooldown: 30,
            leaveOnEmpty: true,
            emptyCooldown: 60,
            leaveOnFinish: true,
            leaveOnStop: true,
            plugins: [
                new SoundCloudPlugin(),
                new SpotifyPlugin({
                    emitEventsAfterFetching: true
                }),
                new YtDlpPlugin()],
        });

        ["aliases", "commands"].forEach(x => client[x] = new Collection());
        ["loadCommands", "loadEvents", "loadDistube"].forEach(x => require(`./handlers/${x}`)(client));

    }
    connect() {
        return super.login(this.token);
    };
};




module.exports = MainClient;