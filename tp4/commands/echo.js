// echo.js
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Prend un input en option et le renvoie à l\'utilisateur')
        .addStringOption(option =>
            option.setName('message')
                .setDescription('Le message à renvoyer')
                .setRequired(true)),
    async execute(interaction) {
        const message = interaction.options.getString('message');
        await interaction.reply(message);
    },
};
