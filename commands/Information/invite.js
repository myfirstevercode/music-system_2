const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "invite",
    category: "Information",
    aliases: [ "addme" ],
    description: "invite EC Music Bot",
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
    .setLabel("YouTube")
    .setStyle("LINK")
    .setURL("https://www.youtube.com/c/DryderMataroa1"),
    new MessageButton()
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://discord.gg/SKzXFapdGW")
			);

          const mainPage = new MessageEmbed()
            .setAuthor('Express Codex Music', 'https://i.imgur.com/ZFH5OtF.png')
            .setThumbnail('https://i.imgur.com/ZFH5OtF.png')
             .setColor('#FF0000')
            .addField('invite EC Music Bot Here', `[Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot)`, true)
           message.channel.send({embeds: [mainPage], components: [row]})
    }
}