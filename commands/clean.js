const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permissions!");
  if(!args[0]) return message.channel.send("no");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`🗑️ | **${message.author.username}**, Succesfully clean **${args[0]}** message from this channel..!`).then(msg => msg.delete(10000));
});

}

module.exports.help = {
  name: "clean",
  aliases: ["purge", "prune", "clear"],
}