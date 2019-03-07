module.exports.run = async (bot, message, args) => {

  //console.log(args[0]);// user
  //console.log(args[1]);// role
  //console.log(args[2]);//time
  
  if(!message.member.hasPermission("ADMINISTRATOR")){
    return message.reply(":x: " + "| Kamu Membutuhkan Permission \"ADMIN\" Role Untuk Mengekick Seseorang").catch(console.error);
  }
  if (message.mentions.users.size === 0){
    return message.reply(":x: " + "| Mohon Untuk Mention User Di Lain Waktu").catch(console.error);
  }
  let kickmember = message.guild.member(message.mentions.users.first());
  if(!kickmember){
    message.reply(":x: " + "| User Tidak Valid!");
  }
  if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
    return message.reply(":x: " + "| Kamu Membutuhkan \"KICK_MEMBERS\" Permission!").catch(console.error);
  }
  kickmember.kick().then(member => {
    message.reply(`${member.user.username} Telah Sukses Di Kick Dari Server`).catch(console.error);
  }).catch(console.error)
  
  }
  
  module.exports.help = {
      name: "kick",
      aliases: [],
  }