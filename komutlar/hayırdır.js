const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('RED')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Gif Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const hayırdır = new Discord.MessageEmbed()
    .setAuthor(message.author.username + " Hayırdır İnşallah...")
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
    .setImage(`https://cdn.discordapp.com/attachments/779099271441809420/780015736680480798/hayrdr.gif`)
    return message.channel.send(hayırdır);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hayırdır',
  description: 'hayırdırinşallah gifi atar.',
  usage: 'hayırdır'
};
