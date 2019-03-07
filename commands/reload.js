const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => { 
    if(message.author.id !== "434043190086074378") return message.channel.send("You cannot use this command because, you are not a developer.")

    
  rebootBot(message.channel);
       function rebootBot(channel) {
           message.react('✅')
               .then(message => bot.destroy())
               .then(message => bot.destroy())
              .then(() => bot.login("NTQ1OTI5NjAwNjczMjUxMzQ5.D1VF3w.JtLlsxV7BGlrE9hm03DehsCyBPo"));
           message.channel.send("**Comet Has Successfully Rebooted..!**")
       }
    }
    module.exports.help = {
        name:"reboot",
        aliases: [],
      }