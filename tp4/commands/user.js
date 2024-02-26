// user.js
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Sort le nom de l\'utilisateur de la commande et sa date d\'arrivée sur le serveur'),
    async execute(interaction) {
        const member = interaction.member;
        await interaction.reply(`Nom de l'utilisateur: ${member.user.username}\nDate d'arrivée sur le serveur: ${member.joinedAt}`);
    },
};
