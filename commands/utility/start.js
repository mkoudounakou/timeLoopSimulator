const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	name: "start",
	description: "Begin interactive learning exercise",
	execute: async(interaction) => {
		await interaction.reply('Lets begin');
	}
}
