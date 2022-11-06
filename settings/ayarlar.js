require("dotenv").config();

module.exports = {
    TOKEN: process.env.TOKEN || "",  // bot token gir :)
    PREFIX: process.env.PREFIX || ".", // bot prefix
    SAHİP: process.env.SAHİP || "", //sahip id :()
    SHARDLOG: process.env.SHARDLOG || "", // SHARD Log
    HATALOG: process.env.HATALOG || "", // Hata Log
    LOADCOMMANDS: process.env.LOADCOMMANDS || "", // LoadCommands Log
    BİLDİRİLOG: process.env.BİLDİRİLOG || "", // Bildiri Log
    BOTUNADI: process.env.BOTUNADI || "", // Botun Adını Giriniz.

    //Yukardaki Herhangi Birşeyi Doldurmazsanız Hata Alırsınız.

}
