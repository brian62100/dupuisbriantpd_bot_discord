// info.js
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Commande avec sous-commande user et server')
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Sort les informations sur l\'utilisateur')
                .addUserOption(option =>
                    option.setName('user')
                        .setDescription('L\'utilisateur dont vous voulez voir les informations')),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Sort les informations sur le serveur'),
        ),
    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();
        
        if (subcommand === 'user') {
            const userOption = interaction.options.getUser('user');
            const member = userOption ? await interaction.guild.members.fetch(userOption) : interaction.member;
            await interaction.reply(`Nom de l'utilisateur: ${member.user.username}\nDate d'arrivée sur le serveur: ${member.joinedAt}`);
        } else if (subcommand === 'server') {
            const guild = interaction.guild;
            await interaction.reply(`Nom du serveur: ${guild.name}\nNombre de membres: ${guild.memberCount}`);
        }
    },
};
