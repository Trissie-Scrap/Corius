const { richEmbed } = require('discord.js');
module.exports.run = async (bot, message, args, funcs) => {
  try {
      let whotto = message.mentions.members.first();
      if (!whotto) return funcs.send(`Please mention somebody to stare at!`);
      if (whotto.id == message.author.id) return funcs.send(`Ummm.. I am not sure if you can stare at yourself..`);
      let embed = new richEmbed()
        .setImage("https://i.gifer.com/OFLD.gif")
        .setTitle(`${whotto.user.username}, ${message.author.username} is staring at you..`)
        .setColor(funcs.rc());
      message.channel.send(embed);
  } catch (err) {
    console.log(err) 
    return funcs.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
  }
};

module.exports.config = {
  name: "stare",
  aliases: [],
  usage: "Use this command to stare at somebody.",
  cooldownTime: '5',
  commandCategory: "roleplay"
};