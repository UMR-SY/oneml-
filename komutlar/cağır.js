const Discord = require("discord.js");
const db = require("quick.db")
const moment = require("moment")
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json");

module.exports.run = async (bot, message, args) => {

moment.locale("tr") 

let except = message.guild.channels.cache.get("782539757188153344")
let mustafa = args.slice(0).join(' ')
if (!mustafa) return message.channel.send("Bir Sipariş Giriniz")

message.channel.send("Siparişiniz Verildi")


db.add(`crew${message.author.id}`, 1)
     var manyak1 = await db.fetch(`crew${message.author.id}`);  

let code = moment().format('LL');
let crewcode = moment().add(3, 'hours').format("LT");  
const manyak = new Discord.MessageEmbed()
.setDescription(`${message.guild.name} | Captan Sipariş Sistemi \n\n **Müşteri** ${message.author} \n\n __Sipariş Tarihi__: ${code} \n __Sipariş Saati__: ${crewcode} \n __Sipariş No__: ${manyak1} \n __Mağaza__: ${message.guild.name} \n __Ürün__: ${mustafa} \n __Teslim Günü__: ${code}`)
except.send(manyak)

};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "sipariş",
  description: "",
  usage: "taslak"
};