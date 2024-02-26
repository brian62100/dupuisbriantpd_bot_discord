// dragonball.js
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quoi')
        .setDescription('Quoi!'),
    async execute(interaction) {
        await interaction.reply('Kamehame!!!');
        await interaction.followUp('galick gun!!!');
        await interaction.followUp('kaioken fois 4!!!');
    },
};
