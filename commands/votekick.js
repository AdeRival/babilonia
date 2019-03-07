const Discord  = module.require('discord.js');

const agree    = "✅";
const disagree = "❎";

module.exports.run = async (bot, message, args) => {

  if (message.mentions.users.size === 0){
    return message.reply(":x: " + "| Tolong Mention User Untuk Di Kick Lain Waktu");
  }

  let kickmember = message.guild.member(message.mentions.users.first());
  if(!kickmember){
    message.reply(":x: " + "| User Tidak Valid!");
  }

  if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
    return message.reply(":x: " + "| i need the \"KICK_MEMBERS\" permission!").catch(console.error);
  }

  let msg = await message.channel.send("Voting 1 Menit Dimulai Dari Sekarang");
  await msg.react(agree);
  await msg.react(disagree);

  const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 60000});
  msg.delete();

  var NO_Count = reactions.get(disagree).count;
  var YES_Count = reactions.get(agree);

  if(YES_Count == undefined){
    var YES_Count = 1;
  }else{
    var YES_Count = reactions.get(agree).count;
  }

  var sumsum = new Discord.RichEmbed()
  
            .addField("Voting Finished:", "----------------------------------------\n" +
                                          "Total votes (NO): " + `${NO_Count-1}\n` +
                                          "Total votes (Yes): " + `${YES_Count-1}\n` +
                                          "----------------------------------------\n" +
                                          "NOTE: Voting Dibutuhkan Untuk Kick (3+)\n" +
                                          "----------------------------------------", true)

            .setColor("0x#FF0000")

  await message.channel.send({embed: sumsum});

  if(YES_Count >= 4 && YES_Count > NO_Count){

    kickmember.kick().then(member => {
      message.reply(`${member.user.username} Telah Sukses Di Kick`)
    })
  }else{

    message.channel.send("\n" + "AMAN..... UNTUK SEKARANG");
  }

}

module.exports.help = {
    name: "votekick",
    aliases: ["vk"],
}