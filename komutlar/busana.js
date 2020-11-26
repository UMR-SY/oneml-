const Discord = require("discord.js");

exports.run = function(client, message) {
  const CrewCodeetiketlenenkisi = message.mentions.users.first();

  if (!CrewCodeetiketlenenkisi)
    return message.channel.send(
      "**Birisini etiketlemelisin!**"
    );

  const CrewCodeembed = new Discord.MessageEmbed()

    .setDescription(
      `${CrewCodeetiketlenenkisi}` +
        `**${message.author.username}  Bu Sana!**`
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/779099271441809420/780014612723925042/bu_sana.gif"
    );

  return message.channel.send(CrewCodeembed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["bu-sana"],
  permLevel: 0
};

exports.help = {
  name: "busana",
  description: " busana Atarsınız işte ",
  usage: "+busana"
};