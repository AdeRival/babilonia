const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reports = message.guild.channels.find('name' , '⟬🔨⟭➞mod-logs');
    let reason =  args.slice(1).join(' ');

    if(!target) return message.channel.send('`Silakan Tentukan Member Untuk Dilaporkan.`');
    if(!reason) return message.channel.send('`Silakan Tentukan Alasan Untuk Melaporkan.`');
    if(!reports) return message.channel.send('`Harap buat saluran bernama "⟬🔨⟭➞mod-logs" untuk mencatat laporan.`');

    let reportembed = new Discord.RichEmbed()
        .setThumbnail(target.user.avatarURL)
        .setAuthor('Report', 'https://cdn.discordapp.com/emojis/465245981613621259.png?v=1')
        .setDescription(`New report by ${message.author.username}`)
        .addField('⚠ - Member Yang Di Report', `${target.user.tag}\n(${target.user.id})`, true)
        .addField('⚠ - Di Report Oleh', `${message.author.tag}\n(${message.author.id})`, true)
        .addField('⚙ - Saluran', `${message.channel}`)
        .addField('🔨 - Alasan', `${reason}`)
        .setColor('0xfc4f35')
        .setTimestamp();
    reports.send(reportembed);

    message.channel.send(`**${target}** Telah Di Report Oleh **${message.author}** **${reason}**`).then(message => message.delete(5000));
}
module.exports.help = {
    name: "report",
    aliases: ["repo", "rpt"],
    usage: "r!report @User",
    accesableby: "Anggota"
  }