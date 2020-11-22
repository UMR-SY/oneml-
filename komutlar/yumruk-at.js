const Discord = require("discord.js");

exports.run = function(client, message) {
  const CrewCodeetiketlenenkisi = message.mentions.users.first();

  if (!CrewCodeetiketlenenkisi)
    return message.channel.send(
      "**Lütfen Yumruk Atmak İçin Birini Etiketleyin**"
    );

  const CrewCodeembed = new Discord.MessageEmbed()

    .setDescription(
      `${CrewCodeetiketlenenkisi}` +
        `**${message.author.username}  Sana Yumruk Attı**`
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/779099271441809420/780013987294478336/yumruk.gif"
    );

  return message.channel.send(CrewCodeembed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yumrukat"],
  permLevel: 0
};

exports.help = {
  name: "yumruk-at",
  description: " Yumruk Atarsınız işte ",
  usage: "-yumruk-at"
};
