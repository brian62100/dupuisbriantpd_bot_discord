// nani.js
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nani')
        .setDescription('Nani!'),
    async execute(interaction) {
        await interaction.reply('zarwardo!');
    },
};