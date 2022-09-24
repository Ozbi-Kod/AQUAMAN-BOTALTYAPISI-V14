const Discord = require("discord.js");
const { Snake } = require("discord-gamecord")
module.exports = {
  config: {
      name: "snake",
      aliases: [],
      description: "Yılan Oynarsınız.",
      kategori: "Eğlence"

  },
  run: async (client, message, args) => {
new Snake({
        message: message,
        embed: {
        color: 'AQUA',
        OverTitle: "Oyun bitti.",
        },
        snake: { head: '🟢', body: '🟩', tail: '🟢' },
        emojis: {
          board: '⬛',
          food: '🍎',
          up: '⬆️',
          right: '➡️',
          down: '⬇️',
          left: '⬅️',
        },
        othersMessage: 'Butonları kullanmak için oyunu sen başlatmalısın.',
      }).startGame();
  },
  }
  