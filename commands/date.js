const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let date = new Discord.RichEmbed()	
	var today = new Date()
let Day = today.toString().split(" ")[0].concat("day");
let Month = today.toString().split(" ")[1]
let Year = today.toString().split(" ")[3]
message.channel.send(`\`${Day}\` \`${Month}\` \`${Year}\`\n\`Time of day:\` \`${today.toString().split(" ")[4]}\``)

}
module.exports.help = {
	name: "tanggal",
	aliases: ["tgg", "tng", "tgl"],
	usage: "r!tanggal",
	accesableby: "Anggota"
}
