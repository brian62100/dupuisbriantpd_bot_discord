// urban.js
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('urban')
        .setDescription('Recherche un terme dans Urban Dictionary')
        .addStringOption(option =>
            option.setName('terme')
                .setDescription('Le terme à rechercher')
                .setRequired(true)),
    async execute(interaction) {
        try {
            const searchTerm = interaction.options.getString('terme');
            const { default: fetch } = await import('node-fetch');
            const response = await fetch(`https://api.urbandictionary.com/v0/define?term=${encodeURIComponent(searchTerm)}`);
            const data = await response.json();

            if (data.list && data.list.length > 0) {
                const definition = data.list[0].definition;
                await interaction.reply(`**${searchTerm}:**\n${definition}`);
            } else {
                await interaction.reply(`Aucune définition trouvée pour "${searchTerm}".`);
            }
        } catch (error) {
            console.error(error);
            await interaction.reply('Une erreur est survenue lors de la recherche dans Urban Dictionary.');
        }
    },
};
