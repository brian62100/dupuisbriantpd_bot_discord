// server.js
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Sort le nom du serveur et son nombre de membres'),
    async execute(interaction) {
        const guild = interaction.guild;
        await interaction.reply(`Nom du serveur: ${guild.name}\nNombre de membres: ${guild.memberCount}`);
    },
};
