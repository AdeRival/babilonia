const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {



    let youtube = args.slice(0).join('+');

        let link = `https://www.youtube.com/results?search_query=` + youtube;
        if(!youtube)return message.reply(`Please enter a word `)
        if(!link)return message.reply("Console error")
        let embed = new Discord.RichEmbed()
 
         
     .setColor('RANDOM')
         
          .setTimestamp()
        
          .addField('Aksi:', 'Searching on youtube')

          .addField("Kata:", `${args.slice(0).join(' ')}`)

          .addField('Link:', `${link}`)
         
          .setFooter("😬", message.author.avatarURL);
          
              message.channel.send(embed);
              message.author.send(`Anda Telah Mencari ${link} in ${ message.guild.name}`);

        
    
}



module.exports.help = {
    name: "youtube",
    aliases: ["yt", "ytb"],
    usage: "r!youtube (channel/lainnya)",
    accesableby: "Anggota"
}