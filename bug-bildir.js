const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let bug = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let channel = bot.channels.get("737044370322096259")//bug repot kanal id
let embed = new Discord.RichEmbed()
.setTitle("Bug Report")
.addField("Bug", bug)
.addField("Report Eden", user, true)
.addField("Sunucu", guild, true)
.addField("Sunucu ID", guildid, true)
.addField("Kanal", kanal, true)
.setColor("#f49542")
.setImage("https://cdn.discordapp.com/attachments/655459488236568597/669939737431375872/cizgi.gif") 

message.channel.send("✅  **| Bug Report Başarı İle İletildi.**")
channel.send(embed).then(i => i.react("🔨"))

  

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bildir','bugbildir',' bug'],
  permLevel: 0  
};

exports.help = {
  name: 'bug-bildir',
  description: 'Bug Bildirirler .',
  usage: 'bug-bildir'
}