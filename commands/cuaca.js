const Discord = module.require("discord.js")
const weather = require("weather-js")

module.exports.run = async (bot, message, args) => {

    weather.find({search: args.join(" "), degreeType: "C"}, function(err, result) {
        if(err) message.channel.send(err)

        //If the place entered is invalid
        if(result.length === 0) {
            message.channel.send("**Tolong Berikan Tempat Yang Valid**")
            return;
        }

        //Variables
        var current = result[0].current //Variable for the current part of the JSON Output
        var location = result[0].location //This is a variable for the location part of the JSON Output

        //Sends weather log in embed
        let embed = new Discord.RichEmbed()
           .setDescription(`**${current.skytext}**`) //How the sky looks like
           .setAuthor(`Weather for ${current.observationpoint}`) //Shows the current location of the weater
           .setThumbnail(current.imageUrl) //Sets thumbnail of the embed
           .setColor(0x00AE86) //Sets the color of the embed
           .addField("Zona Waktu", `UTC${location.timezone}`, true) //Shows the timezone
           .addField("Jenis Derajat", location.degreetype, true) //Shows the degrees in Celcius
           .addField("Suhu", `${current.temperature}`, true)
           .addField("Terasa Seperti", `${current.feelslike} Derajat`, true)
           .addField("Angin", current.winddisplay, true)
           .addField("Kelembaban", ` ${current.humidity}%`, true)
           .addField("Hari", `${current.day}`, true)
           .addField("Tanggal", `${current.date}`, true)
           
           //Display when it's called
           message.channel.sendEmbed(embed)

    });

    message.delete();
    
    }
module.exports.help = {
    name: "cuaca",
    aliases: ["cua", "cc"],
    usage: "r!cuaca",
    accesableby: "Anggota"
}