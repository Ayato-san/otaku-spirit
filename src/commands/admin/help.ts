import { SlashCommandBuilder, EmbedBuilder, APIEmbedField, CommandInteraction } from 'discord.js'
import { readdirSync } from 'fs'
import { resolve } from 'path'
import { SlashCommand } from '../../types'

export const command: SlashCommand = {
    name: 'help',
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Affiche la liste des commande ansi que leur utilité'),
    execute: async (interaction: CommandInteraction) => {
        const slashCommandsDir: string = resolve(__dirname, '../')
        const body: APIEmbedField[] = []

        readdirSync(slashCommandsDir).forEach((folder: string) => {
            const categoryFolder: string = resolve(slashCommandsDir, folder)
            const commands: string[] = []

            readdirSync(categoryFolder).forEach((file: string) => {
                if (!file.endsWith('.js')) return
                const command: SlashCommand = require(`${categoryFolder}/${file}`).command
                const data = command.data.toJSON()
                commands.push(`**${data.name}** : ${data.description}`)
            })
            body.push({ name: folder.toUpperCase(), value: commands.join('\n') })
        })

        await interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setAuthor({ name: 'Ayato-san' })
                    .setDescription('Voici la liste des commandes')
                    .setColor('#2196f3')
                    .addFields(body),
            ],
            ephemeral: true,
        })
    },
}
