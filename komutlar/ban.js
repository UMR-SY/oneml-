const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embedCrewCode = new Discord.MessageEmbed()
      .setDescription("```⚠ Ne yazık ki bu komutu kullanmaya yetkin yok. ⚠ ```")
      .setColor("BLACK");
 
    message.channel.send(embedCrewCode);
    return;
  }
 
  let u = message.mentions.users.first();
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("```Lütfen atılacak kişiyi etiketleyiniz!```")
        .setColor("BLACK")
        .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }
 
  const embedCrewCode = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription(`${u} Adlı şahsın sunucudan banlanmasını onaylıyor musunuz?`)
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(embedCrewCode).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("İşlem iptal oldu!"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        message.channel.send(
          `İşlem Tamamlandı! ${u} adlı kişi sunucudan Banlandı!`
        );
 
        message.guild.member(u).ban();
      }
    });
  });
};
 
module.exports.conf = {
  aliases: [],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};
 
module.exports.help = {
  name: "ban",
  description: "kick",
  usage: "kick"
};