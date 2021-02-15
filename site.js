const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  
  const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .addField(`Botumun Sitesine Bakmayı Unutmayın !`, `[Tıkla](https://rtx-bot-web-sitesi.glitch.me)`)
.setFooter(client.user.username, client.user.avatarURL)

  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['site'],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "site",
  description: "site",
  usage: "site"
};
