const { MessageEmbed, CommandInteraction, Client, MessageButton, MessageActionRow } = require("discord.js")

module.exports = {
    name: "about",
    description: "Show music project information",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
        await interaction.deferReply({
            ephemeral: false
        });
   const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=893000332295151657&permissions=8&scope=bot%20applications.commands`),
		    new MessageButton()
    .setLabel("Discord")
    .setStyle("LINK")
    .setURL("https://discord.gg/Nv5r5C9")
			);

      const mainPage = new MessageEmbed()
            .setAuthor('Play2impress Music', 'https://i.imgur.com/BsJ5jEG.jpeg')
            .setThumbnail('https://i.imgur.com/BsJ5jEG.jpeg')
            .setColor('#FF0000')
            
        await interaction.followUp({embeds: [mainPage], components: [row]});
    }
}
