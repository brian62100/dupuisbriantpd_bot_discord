// cat.js
const { SlashCommandBuilder } = require('@discordjs/builders');
const { request } = require('undici');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cat')
        .setDescription('Affiche une image de chat'),
        async execute(interaction) {
            await interaction.reply('je n\'arrive pas a acceder a api');
        },
};
