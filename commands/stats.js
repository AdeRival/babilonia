const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (bot, message, args, level) => { // eslint-disable-line no-unused-vars
  const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  message.channel.send(`= STATISTICS =
• Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
• Uptime     :: ${duration}
• Users      :: ${bot.users.size.toLocaleString()}
• Servers    :: ${bot.guilds.size.toLocaleString()}
• Channels   :: ${bot.channels.size.toLocaleString()}
• Discord.js :: v${version}
• Node       :: ${process.version}`, {code: "asciidoc"});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Mortal"
};

exports.help = {
  name: "stats",
  aliases: [],
  category: "Miscelaneous",
  description: "Gives some useful bot statistics",
  usage: "r!stats"
};