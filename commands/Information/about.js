const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "about",
    category: "Information",
    aliases: [ "botinfo" ],
    description: "See description about this project",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
     
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=840906694933479434&permissions=158712451025&scope=bot%20applications.commands`),
			new MessageButton()
    .setLabel("GitHub")
    .setStyle("LINK")
    .setURL("https://github.com/drydermata"),
    new MessageButton()
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://discord.gg/SKzXFapdGW")
			);

      const mainPage = new MessageEmbed()
            .setAuthor('Express Codex Music Bot', 'https://i.imgur.com/ZFH5OtF.png')
            .setThumbnail('https://i.imgur.com/ZFH5OtF.png')
            .setColor('#FF0000')
            .addField('Creator', 'Dryder Mataroa', true)
            .addField('YouTube', '[YouTube](https://www.youtube.com/c/DryderMataroa1)', true)
        return message.channel.send({embeds: [mainPage], components: [row]});
    }
}